const express=require('express');
const Router=express.Router();

const userModel=require('../model/userModel.js');
const userinfoModel=require('../model/userinfoModel.js');
const mail=require('../mail.js')
const util=require('../utils/util.js')
/**
 * @api {post} /user/login/ login
 * @apiName Login
 * @apiGroup User
 *
 * @apiParam {String} us Users unique ID.
 * @apiParam {String} pass Users unique ID.
 *
 * @apiSuccess {String} err Firstname of the User.
 * @apiSuccess {String} msg  Lastname of the User.
 */
 let obj={}
Router.post('/login',(req,res)=>{
	let {us,pass}=req.body
	userModel.find( {us,pass})
	.then((data)=>{
	   console.log(data)
	   if (data.length>=1) { return res.send('登录ok')}
	   	res.send("登录失败")
	})
	
})
/**
 * @api {post} /user/reg/ 注册
 * @apiName reg
 * @apiGroup User
 *
 * @apiParam {String} us Users unique ID.
 * @apiParam {String} pass Users unique ID.
 *
 * @apiSuccess {String} err Firstname of the User.
 * @apiSuccess {String} msg  Lastname of the User.
 */

Router.post('/reg',(req,res)=>{
	let {us,pass,code}=req.body
	if (obj[us]!==code) { return res.send(util.sendData(-1,'验证码错误',null) )}
	
	userModel.find({us})
	.then((data)=>{
		if(data.length>=1){
			return res.send(util.sendData(-1,"该邮箱已被注册，请登录",null))
		}else if(data.length<1){
			userModel.insertMany({us,pass})
				.then((data)=>{
					res.send(util.sendData(0,'注册ok 请登录',null))
				})
				.catch((err)=>{
					console.log(err)
					res.send(util.sendData(-1,'注册失败',null))
				})
		}
	})			
})

//保存用户信息
Router.post('/info',(req,res)=>{
	let {userName,userEmail,userTel,userAddress,userBirthday}=req.body;
	userinfoModel.find({userEmail})
	.then((data)=>{
		console.log('SAVEDATA:',data.length)
		if(data.length>1){
			return res.send(util.sendData(-1,"已保存，您可以继续完善信息！",data))
		}else if(data.length<=1){
			userinfoModel.insertMany({userName,userEmail,userTel,userAddress,userBirthday})
			.then((data)=>{
				console.log('indata:',data)
				res.send(util.sendData(0,'保存成功！',data))
			})
			.catch((err)=>{
				console.log(err)
				res.send(util.sendData(-1,'保存失败！',null))
			})
		}
	})		
})

//根据_id,查询数据显示
Router.post('/findById',(req,res)=>{
	//接收数据
	let {_id} = req.body;
	if (!_id) {res.send(util.sendData(-1,'参数错误',null))}
	userinfoModel.findById(_id)
		.then((data)=>{
			res.send(util.sendData(0,'原始数据查询成功',data))
		})
		.catch((err)=>{
			console.log(err)
			res.send(util.sendData(-1,'原始数据查询失败',null))
		})
})


//id 根据id更新
Router.post('/findByIdAndUpdate',(req,res)=>{
	//接收数据
	let updateData = req.body;
  	console.log('updateData:',updateData)
    userinfoModel.findByIdAndUpdate(updateData._id,updateData)
	.then((data)=>{
		console.log('yiyi:',data);
		res.send(util.sendData(0,'保存更新成功！',data))
	})
	.catch((err)=>{
		console.log(err)
		res.send(util.sendData(-1,'保存更新失败！',null))
	})
})


// 获取邮箱验证码

/**
 * @api {post} /user/getcode/ 获取邮箱验证码
 * @apiName getcode
 * @apiGroup User
 *
 * @apiParam {String} email 用户邮箱
 *
 * @apiSuccess {String} err Firstname of the User.
 * @apiSuccess {String} msg  Lastname of the User.
 */
Router.post('/getcode',(req,res)=>{
	let {email}=req.body
	if (!email||email=="") {return res.send(util.sendData(-1,'参数错误',null))}
    let num1=(parseInt(Math.random(0,1)*1000)).toString()
    //生成验证码
	mail.sendmail(email,num1)
	.then((resolve)=>{
		obj[email]=num1
		//保存验证码信息
		// console.lo""g(obj)
		res.send(util.sendData(0,'验证码已发送',null))
	})
	.catch((err)=>{
		console.log(err)
		res.send(util.sendData(-1,'验证码发送失败',null))
	})
	
})
//抛出
module.exports = Router;