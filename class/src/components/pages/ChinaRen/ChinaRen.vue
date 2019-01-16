<template>
  <div class="guestbook">
    <Header :headTitle='headTitle'></Header>
  </div>
</template>

<script>

//引入所需的组件
import Header from '../../common/Header.vue';

export default {
  name: 'ChinaRen',
  components:{Header},
  data(){
	  return{
		  headTitle:'校友通讯录'
	  }
  }

}  
</script>

<style lang="less" scoped>
  @import '../../../styles/main.less';


</style>
