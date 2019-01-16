<template>
	<div class="login">
        <div class="top">
        	<p>
        		<i 
        			@click="backToMy()" 
        			class="fa fa-angle-left" 
        			aria-hidden="true"
        			>
        		</i>
        	</p>
        <p>
        	<i class="fa fa-user-circle" aria-hidden="true"></i>
        </p>
        </div>
        <div class="msg">
        	<i class="fa fa-cog" aria-hidden="true"></i>
       		 请登入您的账号
       		 <i class="fa fa-cog" aria-hidden="true"></i>
        </div>
        <div class="bottom">
        	<div>
        		<span>
        			<i class="fa fa-mobile" aria-hidden="true"></i>
        		</span>
        		
        		<input 
        			type="text" 
        			v-model="userEmail"
        			placeholder="请输入邮箱" />
        	</div>
        	<div>
        		<span>
        			<i class="fa fa-key" aria-hidden="true"></i>
        		</span>
        		<input 
        			type="password"
        			v-model="userPass"
        			@keyup.enter="backToHome()"
        			placeholder="请输入密码"/>
        	</div>
        	<p>
        		<input type="checkbox" />
        		记住我
        	</p>
        	<div 
        		@click="backToHome()" 
        		class="delu"
        		>
        		登录</div>
        	<p @click="backToReg()" >快速注册</p>
        	
        </div>
	</div>
</template>

<script>
	export default{
		name:'Login',
		components:{},
		data(){
			return{
				userEmail:'',
				userPass:'',
				email:localStorage.getItem('u_email'),
				pass:localStorage.getItem('u_pass')
			}
			
		},
		methods:{
				backToHome(){
					if(this.userEmail==this.email && this.userPass==this.pass && this.email!=''){
						if(confirm('登录成功,是否跳转到首页？')){
							this.$router.push('/');
						}
					}else{
//						console.log(this.userEmail)
//						console.log(this.userPass)
						alert('哇哦，登录失败了呢');
					}
					
				},
				backToReg(){
					this.$router.push('/my/reg');
				},
				backToMy(){
					this.$router.push('/');
				}
				
			},
			created(){
				//判断是否已经是登录状态
			this.email = localStorage.getItem('u_email');
			if(this.email){
				this.$router.push('/my/info');
			}
			// else{
			// 	this.$router.push('/my/login');
			// }
			}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.login{
	.top{
		p:nth-child(1){
			.h(44);
			.margin-left(10);
			i{
				.fs(30);
				color:#26a2ff;
			}
		}
		p:nth-child(2){
			.h(94);
			.lh(94);
			text-align:center;
			.fs(94);
			color:#8dc4dc;
		}
	}
	.msg{
		.margin-top(20);
		.h(22);
		color:#5c5c5c;
		.fs(16);
		text-align:center;
	}
	.bottom{
		.w(375);
		.h(52);
		text-align:center;
		div{
			border:1px solid #ccc;
			.margin-top(20);
			box-shadow:5px 5px 2px #ccc;
			border-radius:5px;
			.margin-left(10);
			.w(345);
			span{
				.h(40);
				.w(40);
				border-right:1px solid #ccc;
				i{
					display: inline-block;
					.w(30);
					.fs(30);
					color:#26a2ff;
				}
			}
			input{
				.w(285);
				.h(40);
				.fs(16);
			}
		}
		p{
			.margin-top(20);
			.margin-left(20);
			text-align:left;
			.fs(12);
			color:#a5a5a5;
			input{
				.w(20);
				.h(20);
			}
		}
		.delu{
			.fs(16);
			.h(42);
			.lh(42);
			color:#fff;
			background:#26a2ff;
			box-shadow:0px 0px 0px #fff;
		}
	}
}
</style>