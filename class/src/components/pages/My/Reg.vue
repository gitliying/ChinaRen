<template>
	<div class="reg">
        <div class="top">
        	<p>
        		<i @click="backToHome()" class="fa fa-angle-left" aria-hidden="true"></i>
        	</p>
        <p>
        	<i class="fa fa-user-circle" aria-hidden="true"></i>
        </p>
        </div>
        <div class="msg">
        	<i class="fa fa-cog" aria-hidden="true"></i>
       		 请输入您的个人信息
       		 <i class="fa fa-cog" aria-hidden="true"></i>
        </div>
        <div class="bottom">
			<div>
        		<span>
        			<i class="fa fa-user-o" aria-hidden="true"></i>
        		</span>
        		<input 
				   v-model="userName"
        			type="text" 
        			placeholder="请输入姓名"/>
        	</div>
			<div>
        		<span>
        			<i class="fa fa-mobile" aria-hidden="true"></i>
        		</span>
        		<input 
				   v-model="userTel"
				   @blur="checkedUserTel()"
        			type="text" 
        			placeholder="请输入真实手机号"/>
        	</div>
			<span v-if="userTelErr">亲，输入手机格式不正确哦！</span>
			<div>
        		<span>
        			<i class="fa fa-envelope-o" aria-hidden="true"></i> 
        		</span>
        		
        		<input 
					v-model="userEmail"
        			type="text" 
        			@blur="userCheck()" 
        			placeholder="请输入邮箱"/>
        	</div>
        	<span v-if="userErr">亲，邮箱格式不正确哦！</span>
        	<div>
        		<span>
        			<i class="fa fa-key" aria-hidden="true"></i>
        		</span>
        		<input 
				   v-model="userPass"
        			type="password" 
        			placeholder="请输入密码"/>
        	</div>
			<div class="checkCode">
				<span><i class="fa fa-envelope-open-o" aria-hidden="true"></i></span>
				<div><input 
				type="text"
				placeholder="输入验证码"
			    v-model="code" 
				@keyup.enter="backToLogin()"/></div>
				<span @click="getCode()">发送验证码</span>
			</div>
        	<p>
        		<input type="checkbox"/>
        		记住我
        	</p>
        	<div @click="backToLogin()" class="delu" id="Reg">注册</div>
        	<p @click="quickBackToLogin()">已注册，直接登录</p>
        	
        </div>
	</div>
	<!--<router-view></router-view>-->
</template>

<script>
	import axios from 'axios';
	export default{
		name:'My',
		components:{},
		data(){
			return{
				userEmail:'',
				userPass:'',
				userName:'',
				userTel:'',
				reg:null,
				pass:null,
				userErr:false,
				userTelErr:false,
				code:'',
			}
			
		},
		methods:{
			backToHome(){
				this.$router.push('/');
				
			},
			userCheck(){
				//邮箱验证
				this.reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
				if( !this.reg.test(this.userEmail) ){
					this.userErr = true;
				}else{
					this.userErr = false;
				}
			},
			checkedUserTel(){
				var tel = /^[1][3,4,5,7,8][0-9]{9}$/;
				if ( tel.test(this.userTel) ) {
					this.userTelErr = false;
				}else{
					this.userTelErr = true;
				}
			},
			getCode(){
				//获取验证码
				if(this.userEmail!='' && this.userPass!='' ){
					var data = {
						email:this.userEmail
					}
					axios.post('http://localhost:3000/api/user/getcode',data)
					.then((res)=>{
						alert(res.data.msg)
					})
					.catch((err)=>{
						console.log(err);
					})
				}else{
					alert("请先填写信息才能注册哦！")
				}
			},
			backToLogin(){
				//调用后台的 reg 接口 传数据给后台
				var data = {
					userName:this.userName,
					userTel:this.userTel,
					userEmail:this.userEmail,
					userPass:this.userPass,
					code:this.code
				}

				axios.post('http://localhost:3000/api/user/reg',data)
				.then((res)=>{
					alert(res.data.msg)
					if( res.data.err == 0 ){
						this.$router.push('/my/login');
					}
					localStorage.setItem('userName',this.userName);
					localStorage.userName= this.userName;
					localStorage.setItem('userTel',this.userTel);
					localStorage.userTel= this.userTel;
				})
				.catch((res)=>{
					alert(res.data.msg)
				})
				
			},
			quickBackToLogin(){
				this.$router.push('/my/login');
			}
				
		}
		
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.reg{
	.top{
		p:nth-child(1){
			margin-bottom: 0;
			.h(30);
			.margin-left(10);
			i{
				.fs(30);
				color:#26a2ff;
			}
		}
		p:nth-child(2){
			.h(70);
			.lh(70);
			text-align:center;
			.fs(80);
			color:#8dc4dc;
		}
	}
	.msg{
		.margin-top(10);
		.h(15);
		color:#5c5c5c;
		.fs(16);
		text-align:center;
	}
	.bottom{
		.w(375);
		.h(50);
		text-align:center;
		div{
			border:1px solid #ccc;
			.margin-top(15);
			box-shadow:5px 5px 2px #ccc;
			border-radius:5px;
			.margin-left(10);
			.w(345);
			span{
				.h(15);
				.w(40);
				border-right:1px solid #ccc;
				i{
					display: inline-block;
					.w(30);
					.fs(20);
					color:#26a2ff;
				}
			}
			input{
				.w(285);
				.h(30);
				.fs(16);
			}
		}
		.checkCode{
			div{
				display: inline;
				.w(180);
				.padding-left(10);
				input{
					margin-left: 0;
					.w(180);
					.fs(16);
				}
			}
			span{
				.fs(16);
				color:#26a2ff;
				vertical-align: middle;
			}
			
		}
		span{
			.fs(12);
			color:red;
		}
		p{
			.margin-top(10);
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