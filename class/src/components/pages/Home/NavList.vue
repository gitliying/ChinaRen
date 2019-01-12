<template>
      <div class="navlist">
      <mu-container>
        <mu-flex justify-content="center">
          <mu-paper :z-depth="1">
            <!-- <mu-appbar color="primary">
              <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
              </mu-button>
              Photo -->
            <!-- </mu-appbar> -->
            <mu-grid-list class="gridlist-demo">
              <!-- <mu-sub-header>December</mu-sub-header> -->
              <mu-grid-tile v-for="(tile, index) in list" :key="index">
                <img :src="tile.image" >
                <span slot="title">{{tile.title}}</span>
                <span slot="subTitle">by <b>{{tile.author}}</b></span>
                <mu-button slot="action" icon>
                  <mu-icon value="star_border"></mu-icon>
                </mu-button>
              </mu-grid-tile>
            </mu-grid-list>
          </mu-paper>
        </mu-flex>
      </mu-container>
    </div>
</template>

<script>
//
import guestbook from '../../../assets/images/nav-icon1.jpg';
import ChinaRen from '../../../assets/images/nav-icon2.jpg';
import photos from '../../../assets/images/nav-icon3.jpg';
import search from '../../../assets/images/nav-icon4.jpg';

export default {
  name: 'NavList',
  components:{},
  data () {
    return {
      list: [{
        image: guestbook,
        title: 'guestbook',
        author: 'Myron'
      }, {
        image: ChinaRen,
        title: 'ChinaRen',
        author: 'Linyu'
      }, {
        image: search,
        title: 'search',
        author: 'ruolin'
      }, {
        image: photos,
        title: 'photos',
        author: 'kakali'
      }]
    }
  }

}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.navlist{
  .gridlist-demo{
    margin: 0 auto;
    // width: 360px;
    // height: 450px;
    overflow-y: auto;
  }
}
    
</style>

