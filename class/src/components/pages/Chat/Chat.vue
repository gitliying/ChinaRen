<template>
  <div class="guestbook">
    <Header :headTitle='headTitle'></Header>
  </div>
</template>

<script>

//引入所需的组件
import Header from '../../common/Header.vue';

export default {
  name: 'Chat',
  components:{Header},
  data(){
	  return{
		  headTitle:'聊天窗'
	  }
  }

}
</script>

<style lang="less" scoped>
  @import '../../../styles/main.less';


</style>
