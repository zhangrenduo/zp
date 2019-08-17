 //引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由


//4.修改求职者详细信息
router.get('/update',function(req,res){
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
  pool.query('UPDATE job_seeker_info SET email=?,name=?,hope_money=?,phone=?,gender=?,hope_job=?,head_img_URL=? WHERE  job_seeker_info_id=?',
	  [obj.email,obj.name,obj.hope_money,obj.phone,obj.gender,obj.hope_job,obj.head_img_URL,obj. job_seeker_info_id],function(err,result){
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


//1.求职者详细信息列表
router.get('/list',function(req,res){
  //1.1获取数据
  var obj=req.query;
  console.log(obj);
  //1.2将数据转为整型
  obj.pno=parseInt(obj.pno);
  obj.size=parseInt(obj.size);
  //1.3验证输入是否为空
  if(!obj.pno) obj.pno=1;//设置默认页码1
  if(!obj.size) obj.size=2;//默认大小为2
  //1.4计算每页的开始
  var start=(obj.pno-1)*obj.size;
  //1.5执行SQL语句，把结果响应给浏览器端
  pool.query('SELECT * FROM job_seeker_info LIMIT ?,?',[start,obj.size],function(err,result){
    if(err) throw err;
	res.send(result);
  });
});

//导出路由器
module.exports=router;