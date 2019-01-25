<template>
  <div class="header">
    <i class="fa fa-home" @click="backToHome()"></i>
    {{title}}
  </div>
</template>

<script>


export default {
  name: 'Header',
  props:['headTitle'],
  components:{},
  data(){
	  return{
		  title:this.headTitle
	  }
  },
  methods:{
    backToHome(){
      this.$router.push('/');
    }
  }

}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
.header{
  .h(50);
  background: skyblue;
  color:#fff;
  .fs(20);
  text-align: center;
  .lh(50);
  position: relative;
  i{
    position: absolute;
    left: 10px;
    .lh(50);
  }
  
}
</style>
