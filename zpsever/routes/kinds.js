//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//获取职位分类表
router.get('/kind',function(req,res){
	//3.1获取数据
  var obj=req.query;
  //console.log(obj);
  //3.2验证数据是否为空
  if(!obj.job_kind_id){
    res.send({code:401,msg:'job_kind_id require'});
	return;
  }
  if(!obj.job_kind_name){
    res.send({code:402,msg:'job_kind_name require'});
	return;
  }
  //3.3执行SQL语句
  pool.query('SELECT * FROM job_kind WHERE job_kind_id=? AND job_kind_name=?',[obj.job_kind_id,obj.job_kind_name],function(err,result){
    if(err) throw err;
	//把查询到的数据响应到浏览器端
	res.send({result});
  });
});

//导出路由器
module.exports=router;