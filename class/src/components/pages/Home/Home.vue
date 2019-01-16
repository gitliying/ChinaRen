<template>
  <div class="home">
    <Header :headTitle='headTitle'></Header>
    <Banner></Banner>
    <NavList></NavList>
    <Tabbar></Tabbar>
  </div>
</template>

<script>

//引入所需的组件
import Header from '../../common/Header.vue';
import Banner from '../../common/Banner.vue';
import Tabbar from '../../common/Tabbar.vue';
import NavList from './NavList.vue';

export default {
  name: 'Home',
  components:{Header,Banner,NavList,Tabbar},
  data(){
	  return{
		  headTitle:'民师院校友录'
	  }
  }  
}
</script>

<style lang="less" scoped>
  @import '../../../styles/main.less';


</style>
