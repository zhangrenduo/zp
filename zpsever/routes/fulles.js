 //引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由



//4.修改求职者详细信息
router.get('/full_info',function(req,res){
	//4.1获取数据
  var obj=req.query;
  //console.log(obj);
  //4.2验证数据是否为空
  //批量验证，获取每一个属性，然后判断是否为空
  var i=400;
  for(var key in obj){
	  i++;
	  //判断属性值是否为空
	  if(!obj[key]){
		res.send({code:i,msg:key+'requred'}); 
		return;
	  }
    //console.log(key,obj[key]);
  }
  //4.3执行SQL语句
  pool.query('UPDATE job_full_info SET title=?,money=?,create_time=?,welfare=?,demand_education=?,demand_experience=?,demand_gender=?,demand_age=?,job_location=?,people_num=?,job_content=?,job_kind_id=?,job_city_id=?,job_recruiter_id=? WHERE job_full_info_id=?',
	  [obj.title,obj.money,obj.create_time,obj.welfare,obj.demand_education,obj.demand_experience,obj.demand_gender,obj.demand_age,obj.job_location,obj.people_num,obj.job_content,obj.job_kind_id,obj.job_city_id,obj.job_recruiter_id,obj. job_full_info_id],function(err,result){
    if(err) throw err;
	console.log(result);
	//判断是否修改成功
	if(result.affectedRows>0){
	  res.send({code:200,msg:'update success'});
	}else{
	  res.send({code:301,msg:'update err'});
	}
  });
  //res.send('修改成功');
});

//导出路由器
module.exports=router;