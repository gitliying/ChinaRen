<template>
  <div class="tabbar">
     <mt-tabbar v-model="selected">
        <mt-tab-item id="" class="tabbar-icon">
            <i slot="icon" class="fa fa-home" ></i>
                首页
        </mt-tab-item>
        <mt-tab-item id="guestbook" class="tabbar-icon">
            <i slot="icon" class="fa fa-telegram" ></i>
                留言板
        </mt-tab-item>    
        <mt-tab-item id="my" class="tabbar-icon">
            <i slot="icon" class="fa fa-user-circle-o"></i>
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
            selected: '',
            userEmail:localStorage.userEmail,
        }
    },
    watch: {
        selected: function (val, oldVal) {
            console.log(val) // click后打印出当前mt-tab-item的id
            if( val == 'my' && typeof(this.userEmail) != 'undefined' ){
                return this.$router.push(val+'/info');
           }
            this.$router.push(val);
        }
    }

}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
    .tabbar{
        .h(55);
        .fs(16);
        color: rgb(179, 172, 172);
        width: 100%;
        position: fixed;
        bottom: 0;
        right: 0;
        .tabbar-icon{
            i{
                display: inline-block;
                width: 100%;
                height: 100%;
            }
        }
    }
    
</style>

