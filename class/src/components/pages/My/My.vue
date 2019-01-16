<template>
	<div class="my">
        <router-view></router-view>
	</div>
</template>

<script>
	
	import Reg from './Reg';
	export default{
		name:'My',
		components:{Reg},
		data(){
			return{
				email:'',
			}
		}, 
		created(){
			
		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';

</style>