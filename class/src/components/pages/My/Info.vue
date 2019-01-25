<template>
	<div class="info">
        <div class="top">
        	<p>
        		<i @click="backToHome()" class="fa fa-angle-left" aria-hidden="true"></i>
				<span>我的信息</span>
			</p>
        	<div class="infomation">
				<div>
        			<span>我的名字</span>
					<span>{{userName}}</span>
				</div>
				<div>
        			<span>联系方式</span>
					<span>{{userTel}}</span>
				</div>
				<div>
        			<span>我的邮箱</span>
					<span>{{userEmail}}</span>
				</div>
				
        	</div>
			<div class="quit" @click="backToLogin()">
				<button type="button" class="btn  btn-danger">退出</button>
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
				userEmail:localStorage.userEmail,
				userName:localStorage.userName,
				userTel:localStorage.userTel,
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
					localStorage.removeItem("userEmail");

				},
			}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.info{
	.top{
		display: flex;
		flex-direction: column;
		p{
			background: #bebec0;
			.padding-left(20);
			.h(44);
			.lh(44);
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
		.quit{
			position: relative;
			right: 0;
			bottom: 0;
			button{
				width: 100%;
				.h(50);
				.fs(18);
			}
		}
	}
}
</style>