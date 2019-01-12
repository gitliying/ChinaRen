const  mongoose=require('mongoose')
 let Schema = mongoose.Schema;

  let foodSchema=new Schema({
  	name:{type:String,required:true},
  	img:{type:String,required:true},
  	type:{type:String,required:true},
  	price:{type:Number,required:true},
  	desc:{type:String,required:true},
  	hot:{type:String}
  })
  // type 字段类型  required 是否必须
 let foodmodel=mongoose.model('food', foodSchema);
  //参数1  集合名字  参数2是 schema对象 将schema对象变成model
  module.exports=foodmodel
