const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const db=require('./dbconnect.js')
const path=require('path')
//post参数解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//静态文件开启
app.use(express.static(path.join(__dirname,'./public')))
//开启admin 静态文件
app.use('/admin',express.static(path.join(__dirname,'./admin')))
//router
const user=require('./router/user.js')

 
app.use('/api/user',user)

app.listen(3000,()=>{
	console.log('server start in port：'+3000)
})