<template>
  <div class="search">
    <Header :headTitle='headTitle'></Header>
    <div class="input-group form-group search-content">
      <input type="text" class="form-control" placeholder="请输入姓名" v-model="userName" @keyup.enter="goSearch()"/>
      <!-- <span class="input-group-btn"> -->
        <button class="btn btn-primary" @click="goSearch()">搜索</button>
      <!-- </span> -->
    </div>
    <div class="alert alert-danger search-err" role="alert" v-if="searchErr">
      没有搜素到该数据，请重新输入！
    </div>
    <div class="search-success" v-for="(item,index) in searchData" :key="index" v-if="searchSuccess">
      <div class="top">
        {{item.userName}}
      </div>
      <div class="content">
        <p>Email:&nbsp; {{item.userEmail}}</p>
        <p>Tel:&nbsp;{{item.userTel}}</p>
      </div>
    </div>
  </div>
</template>

<script>

//引入所需的组件
import Header from '../../common/Header.vue';

import axios from 'axios';

export default {
  name: 'Search',
  components:{Header},
  data(){
	  return{
      headTitle:'搜索',
      userName:'',
      searchErr:false,
      searchSuccess:false,
      searchData:null
	  }
  },
  methods:{
    goSearch(){
      var data = {
        userName:this.userName
      }
      axios.post('http://localhost:3000/api/user/search',data)
        .then((res)=>{
          if(res.data.err == -1){
            this.searchErr = true;
          }else if(res.data.err == 0){
            this.searchData = res.data.data;
            this.searchErr = false;
            this.searchSuccess = true;
          }
        })
    }
  }

}
</script>

<style lang="less" scoped>
  @import '../../../styles/main.less';
  .search{
    .search-content{
      .padding(10,10,10,10);
      input{
        .h(50);
        .fs(16); 
      }
      button{
        .h(50);
        .fs(16);
        border-radius: 0 0;
      }
    }
    .search-err{
      .fs(16);
    }
    .search-success{
      .margin-left(20);
      .padding-right(20);
      .fs(16);
      .top{
        background: rgb(230, 228, 228);
        align-items: center;
        border-right: 1px dashed #ccc;
      }
      .content{
        .margin-bottom(20);
        border-bottom: 1px solid #ccc;
        p{
          margin: 0;
        }
      }
    }
  }

</style>
