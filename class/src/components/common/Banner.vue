<template>
  <div class="banner">
      <!-- <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe> -->
       <mt-swipe :auto="4000" :continuous="true"> 
            <mt-swipe-item v-for="(item,index) in list " :key="index">
                <img :src="item.img" alt="">				
            </mt-swipe-item>
        </mt-swipe>
  </div>
</template>

<script>

export default {
  name: 'Banner',
  components:{},
  data(){
	  return{
		  list:[
              {img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=120101040,1209919999&fm=26&gp=0.jpg"},
              {img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2967971883,1131910996&fm=26&gp=0.jpg"},
              {img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3097234508,1173398617&fm=26&gp=0.jpg"}
          ]
	  }
  }

}
</script>

<style lang="less" scoped>
  @import '../../styles/main.less';
  .banner{
    width: 100%;
    .h(200);
    img{
      display: inline-block;
      width: 100%;
      .h(200);
    }
    

  }

</style>

