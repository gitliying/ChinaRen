<template>
  <div class="tabbar">
     <mt-tabbar v-model="selected">
        <mt-tab-item id="消息" class="tabbar-icon">
            <i slot="icon" class="fa fa-comment" ></i>
                消息
        </mt-tab-item>
        <mt-tab-item id="留言板" class="tabbar-icon">
            <i slot="icon" class="fa fa-telegram" ></i>
                留言板
        </mt-tab-item>    
        <mt-tab-item id="个人中心" class="tabbar-icon">
            <i slot="icon" class="fa fa-user-circle-o" ></i>
                个人中心
        </mt-tab-item> 
    </mt-tabbar>
  </div>
</template>

<script>


export default {
  name: 'Tabbar',
  components:{},
  data(){
	  return{
        selected: '首页',
	  }
  },
   watch: {
      selected: function (val, oldVal) {
        console.log(val) // click后打印出当前mt-tab-item的id
        
      }
    }

}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
    tabbar{
        tabbar-icon{
            i{
                display: inline-block;
                width: 100%;
                height: 100%;
            }
        }
    }
    
</style>

