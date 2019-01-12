const express=require('express');
const Router=express.Router();

const foodModel=require('../model/foodModel.js');
const mail=require('../mail.js')
const util=require('../utils/utli.js')
//foodlist 显示最新10条数据信息
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
Router.post('/foodlist',(req,res)=>{
	foodModel.find()
	.then((data)=>{
	 res.send(util.sendData(0,'请求ok',data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,'请求错误',null))
	})
	
})
//添加菜品信息
Router.post('/addfood',(req,res)=>{

	let insertData={name:'火山飘雪',img:'img/1540796340533.png',type:'凉菜',price:12,desc:'超好吃'}
	foodModel.insertMany(insertData)
	.then((data)=>{
	 res.send(util.sendData(0,'添加菜品信息ok',data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,'添加菜品信息nook',null))
	})
})
//删除某一菜品信息
Router.post('/delfood',(req,res)=>{

	let id=req.body.id 
	if (!id) {res.send(util.sendData(-1,'参数错误',null))}
	foodModel.deleteOne({_id:id})
	.then((data)=>{
	 res.send(util.sendData(0,'删除成功',data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,'删除失败',null))
	})
})
//分类查询
Router.post('/foodByType',(req,res)=>{

	let type=req.body.type 
	if (!type) {res.send(util.sendData(-1,'参数错误',null))}
	foodModel.find({type:type})
	.then((data)=>{
	 res.send(util.sendData(0,'查询ok',data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,'查询失败',null))
	})
})

module.exports=Router;