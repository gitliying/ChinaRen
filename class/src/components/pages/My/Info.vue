<template>
	<div class="info">
        <div class="top">
        	<p>
        		<i @click="backToHome()" class="fa fa-angle-left" aria-hidden="true"></i>
				<span>个人信息</span>
			</p>
        	<div class="infomation">
				<div>
        			<span>我的名字<i style="color:red">*</i></span>
					<input type="text" v-model="userName" placeholder="请输入真实姓名" value="username"/>
				</div>
				<div>
        			<span>我的账号</span>
					<span>{{userEmail}}</span>
				</div>
				<div>
        			<span>联系方式 <i style="color:red">*</i></span>
					<input type="text" 
					placeholder="请输入真实手机号"
					v-model="userTel" 
					@blur="userTelErr()"
					/>
				</div>
				<div v-if="checkUserTel">
					<span style="color:red;text-align:right ">输入手机号有误！</span>
				</div>
				<div>
        			<span>地址</span>
					<input type="text" v-model="userAddress" placeholder="请输入地址"/>
				</div>
				<div>
        			<span>生日</span>
					<input type="date" v-model="userBirthday" placeholder="请输入日期"/>
				</div>
        	</div>
			<div class="save">
				<div>
					<span @click="save()">保存</span>
				</div>
				<div @click="backToLogin()">
					<span>退出登录</span>
				</div>
			</div>
     	</div> 
	</div>
</template>

<script>
import axios from 'axios';
	export default{
		name:'Info',
		components:{},
		data(){
			return{
				userEmail:localStorage.us,
				userName:'',
				userTel:'',
				userAddress:'',
				userBirthday:'',
				checkUserTel:false,
				_id:''
			}            
			
		},
		methods:{
				backToHome(){
					this.$router.push('/');
				},
				backToLogin(){
					this.$router.push('/my/login');
					localStorage.clear();

				},
				userTelErr(){
					var checkUserTel=/^[1][3,4,5,7,8][0-9]{9}$/;
            		if ( checkUserTel.test(this.userTel) ) {
						this.checkUserTel = false;
					}else{
						this.checkUserTel = true;
					}
				},
				save(){
					var data = {
						userEmail:this.userEmail,
						userName:this.userName,
						userTel:this.userTel,
						userAddress:this.userAddress,
						userBirthday:this.userBirthday,
					}
					if(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.userTel) && this.userName!='' && typeof(this._id) == 'undefined'){
						axios.post('http://localhost:3000/api/user/info',data)
						.then((res)=>{
							//保存_id
							console.log('info:',res)
							this._id = res.data.data[0]._id;
							console.log('_id:',this._id)
							localStorage.setItem('_id',this._id);
							localStorage._id = this._id;
							alert(res.data.msg)  
						})
						.catch((err)=>{
							console.log('err',err)
							alert(err.data.msg)
						})
					}else if(typeof(this._id) != 'undefined'){
						localStorage.setItem('userEmail',this.userEmail);
						localStorage.setItem('userName',this.userName);
						localStorage.setItem('userTel',this.userTel);
						localStorage.setItem('userAddress',this.userAddress);
						localStorage.setItem('userBirthday',this.userBirthday);
						this.userEmail = localStorage.userEmail;
						this.userName = localStorage.userName;
						this.userTel = localStorage.userTel;
						this.userAddress = localStorage.userAddress;
						this.userBirthday = localStorage.userBirthday;
					}
					else{
						alert('姓名和手机号为必填项，请先填写信息！')
					}
				}
			}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.info{
	.top{
		p{
			.h(44);
			.padding-left(10);
			background: #ccc;
			.padding-bottom(10);
			i{
				.fs(30);
				color:#26a2ff;
			}
			span{
				.fs(16);
			}
		}
		.infomation{
			div{
				display: flex;
				justify-content: space-between;
				.margin(20,20,0,20);
				.padding-bottom(10);
				border-bottom: 1px solid #d9d9d9;
				span{
					.fs(16);
				}
				span:nth-child(2){
					color: rgba(0, 0, 0, .5);
				}
				input{
					.fs(16);
					text-align: center;
				}
			}
		}
		.save{
			display: flex;
			justify-content: space-between;
			.margin-top(30);
			div{
				.margin(0,20,0,20);
				display: inline-block;
				.w(100);
				.h(40);
				background: #26a2ff;
				.fs(18);
				text-align: center;
				.lh(40);
				color: #fff;
			}
		}
		
	}
}
</style>