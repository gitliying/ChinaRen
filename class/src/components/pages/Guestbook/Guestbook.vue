<template>
  <div class="guestbook">
    <Header :headTitle='headTitle'></Header>
    <div class="guestbook-header">
      <p><i class="fa fa-pencil-square-o"></i>hi!  <span>{{userName}} </span> 欢迎您！~</p>
     <div class="guestbook-content">
       <textarea type="textarea"  rows="10" cols="30" placeholder="请在此处输入您的留言内容！" v-model="content"></textarea>
        <div class="guestbook-content-buttons">
          <button type="button" class="btn btn-secondary" @click="handlerReset()">清空</button>
          <button type="button" class="btn btn-success" @click="handleraCommit()">提交</button>
        </div>
        <div class="guestbook-content-says">
          <p><i class="fa fa-user-circle"></i> {{userName}} <span>{{showContent | moment}}</span></p>
          <div class="says-content">
            {{showContent.content}}
          </div>
        </div>
        <div class="show-data">
          <div class="data" v-for="(item,index) in getdatas" :key="index">
            <p><i class="fa fa-user-circle"></i> {{userName}} <span>{{item.datetime | moment}}</span></p>
            <div class="says-content">
              {{item.content}}
            </div>
          </div>
          <div class="more" @click="showMore()">点击加载更多~</div>
        </div>
     </div>
    </div>
  </div>
</template>

<script>

//引入所需的组件
import Header from '../../common/Header.vue';

import axios from 'axios';

export default {
  name: 'Guestboopk',
  components:{Header},
  data(){
	  return{
      headTitle:'留言板',
      userName:localStorage.userName,
      content:'',
      datetime:new Date(),
      showContent:'',
      qty:5,
      targetPage:1,
      getdatas:''
	  }
  },
  methods:{
    handlerReset(){
      this.content = ''
    },
    handleraCommit(){
      var data = {
        userName:this.userName,
        content:this.content,
        datetime:this.datetime
      }
      if(!this.content){
        alert('留言内容不能为空！')
      }else{
        axios.post('http://localhost:3000/api/user/guestbook',data)
        .then((res)=>{
          this.showContent = res.data.data[0];
          alert(res.data.msg)
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    },
    getdata(){
      //show 所有留言
      var showdata = {
        qty:this.qty,
        targetPage:this.targetPage,
        userName:this.userName
      }
      axios.post('http://localhost:3000/api/user/showGuestbook',showdata)
      .then((res)=>{
        this.getdatas = res.data.data.guestbookList;
        console.log(this.getdatas)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    // 点击加载更多
    showMore(){
      this.targetPage++;
    }
  },
  mounted(){
    this.getdata();
  }
}  
</script>

<style lang="less" scoped>
  @import '../../../styles/main.less';
  .guestbook{
    .guestbook-header{
      p{
        .padding(10,10,10,10);
        .margin-bottom(10);
        .fs(16);
        span{
          color: blue;
        }
      }
    }
    .guestbook-content{
      textarea{
        .w(375);
        .h(200);
        .fs(16);
        .padding(10,10,10,10);
      }
      .guestbook-content-buttons{
        text-align: right;
         button{
          .w(100);
          .h(50);
          .fs(20);
        }
      }
      .guestbook-content-says{
        color: blue;
      }
      .show-data{
        .h(250);
        overflow-y: auto;
        .show{
          color: blue;
            .says-content{
            .padding(10,10,10,20);
            color: black;
            .fs(16);
          }
        }
        .more{
          .h(40);
          .fs(18);
          .lh(40);
          color: gray;
          background: rgb(238, 235, 235);
          border-radius: 10px;
          text-align: center;
        }
      }
      .says-content{
        .padding(10,10,10,20);
        color: black;
        .fs(16);
      }
    }
  }

</style>
