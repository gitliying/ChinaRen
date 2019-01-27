const  mongoose=require('mongoose')
 let Schema = mongoose.Schema;

  let userinfoSchema=new Schema({
    userName:{type:String},
    content:{type:String},
    datetime:{type:String}
    
  })
  // type 字段类型  required 是否必须
 let userinfomodel=mongoose.model('userinfos', userinfoSchema);
  //参数1  集合名字  参数2是 schema对象 将schema对象变成model
  module.exports=userinfomodel