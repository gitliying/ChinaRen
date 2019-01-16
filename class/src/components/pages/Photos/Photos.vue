<template>
  <div class="guestbook">
    <Header :headTitle='headTitle'></Header>
  </div>
</template>

<script>

//引入所需的组件
import Header from '../../common/Header.vue';

export default {
  name: 'Photos',
  components:{Header},
  data(){
	  return{
		  headTitle:'相册'
	  }
  }

}
</script>

<style lang="less" scoped>
  @import '../../../styles/main.less';


</style>
