<template>
	<div class="info">
        <div class="top">
        	<p>
        		<i @click="backToHome()" class="fa fa-angle-left" aria-hidden="true"></i>
        	</p>
        	<p>
        		<i class="fa fa-user-circle" aria-hidden="true"></i>
        	</p>
        	<div class="welcome">
        		<p>{{userEmail}}</p>
        		<div>Welcome to 民师院校友录</div>
        	</div>
        	<div @click="backToLogin()" class="delu">退出登录</div>
     	</div>   
	</div>
</template>

<script>
	
	export default{
		name:'Info',
		components:{},
		data(){
			return{
				userEmail:email,
			}
			
		},
		methods:{
				backToHome(){
					this.$router.push('/');
				},
				backToLogin(){
					this.$router.push('/my/login');
					localStorage.clear();
//					console.log(email);
//					console.log(typeof(email))

				}
				
			},
		created(){
			//拿到存在localStorage的userEmail
	        this.userEmail = localStorage.getItem('u_email');
	        
		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.info{
	.top{
		
		p:nth-child(1){
			.h(44);
			.margin-left(10);
			i{
				.fs(30);
				color:#d93035;
			}
		}
		p:nth-child(2){
			.h(94);
			.lh(94);
			text-align:center;
			.fs(94);
			color:#8dc4dc;
			.margin-bottom(100);
		}
	}
	.delu{
		position:fixed;
		left:0;
		bottom:0;
		width:100%;
		text-align:center;
		.fs(16);
		.h(42);
		.lh(42);
		color:#fff;
		background:#d93035;
		box-shadow:0px 0px 0px #fff;
	}
	.welcome{
		
		p{
			color:#8dc4dc;
			text-align:center;
			.fs(20);
			font-weight:700;
		}
		
		div{
			color:#7dc4dc;
			text-align:center;
			.margin-top(50);
			.fs(24);
			font-weight:600;
			font-style:italic;
		}
	}
	
}
</style>