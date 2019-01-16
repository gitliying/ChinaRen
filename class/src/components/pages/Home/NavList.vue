<template>
      <div class="navlist">
        <div class="nav-container">
          <ul>
            <router-link tag="li" class="nav-container-left" :to="item.path"  v-for="(item,index) in list" :key="index">
              <img :src="item.image" />
              <div class="nav-container-right">
                <p>{{item.title}}</p>
                <span>{{item.content}}</span>
              </div>
            </router-link>
          </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: 'NavList',
  components:{},
  data () {
    return {
      list: [{
        image: '../../../static/images/nav-icon1.jpg',
        title: 'chat',
        content:'聊天窗,在这里，留下你想说得话',
        path: '/chat'
      }, {
        image:'../../../static/images/nav-icon2.jpg',
        title: 'ChinaRen',
        content:'校友录',
        path: '/ChinaRen'
      }, {
        image:'../../../static/images/nav-icon3.jpg',
        title: 'search',
        content:'查找校友',
        path: '/search'
      }, {
        image: '../../../static/images/nav-icon4.jpg',
        title: 'photos',
        content:'个人相册',
        path: '/photos'
      }]
    }
  }

}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.navlist{
  width: 100%;
  .h(362);
  overflow-y: auto;
  .nav-container{
    .nav-container-left{
      .padding(5,20,4,20);
      display: flex;
      border-bottom: 1px dashed #ccc;
      img{
        display: inline-block;
        .w(100);
        .h(80);
      }
      .nav-container-right{
        .padding-left(20);
        p{
          .fs(20);
          font-weight: 600;
          .margin-bottom(10);
        }
        span{
          .fs(14);
          color: gray;
        }
      }
    }
  }
}
    
</style>

