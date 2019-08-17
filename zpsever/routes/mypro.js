const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.登录
router.get("/v1/login/:user_name-:password",(req,res)=>{
	//接收验证数据
  var $user_name=req.params.user_name;
  var $password=req.params.password;
  /*//验证
  if(!$uname){
    res.send("用户名为空");
	return;
  }
  if(!$upwd){
    res.send("用户密码为空");
	return;
  }*/
  //查询数据库
  var sql="select * from job_seeker where user_name=? and password=?";
  pool.query(sql,[$user_name,$password],(err,result)=>{
	if(result.length>0){
	  res.send("1");
	}else{
	  res.send("0");
	}
  });
});

//2.查询用户列表
router.get("/v1/userlist",(req,res)=>{
  var sql="select * from job_seeker";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
	res.send(result);
  });
});

//3.删除用户
router.delete("/v1/deluser/:uid",(req,res)=>{
  var $uid=req.params.uid;
	//连接数据库
	var sql="delete from job_seeker where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
	  if(err) throw err;
	  res.send("1");
	  /*if(result.affectedRows>0){
			res.send("1");//1表示删除成功
		}else{
			res.send("0");
		}*/
	});
});

//4.根据id查询用户
router.get("/v1/query/:uid",(req,res)=>{
	var $uid=req.params.uid;
	//查数据库 
	var sql="select * from job_seeker where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	});
});
//5.修改用户信息
router.put("/v1/update",(req,res)=>{
	//获取参数
	var $uid=req.body.uid;
	var $user_name=req.body.user_name;
	var $email=req.body.email;
	//非空验证
	if(!$uid){
		res.send("用户ID未接收到");	return;
	}
	if(!$uname){
		res.send("用户名未接收到");	return;
	}
	if(!$email){
		res.send("邮箱未接收到");	return;
	}
	//插入数据库
	var sql="update job_seeker set user_name=?,email=? where uid=?";
	pool.query(sql,[$user_name,$email,$uid],(err,result)=>{
		if(err) throw err;
			res.send("1");//1表示修改成功
	});
});
//检验用户名是否存在
router.get("/v1/checkUname",(req,res)=>{
	var $user_name=req.query.user_name;
	if(!$user_name){
		res.send("用户名不存在");
		return;
	}
	var sql="select * from job_seeker where user_name=?";
	pool.query(sql,[$user_name],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");//重名，不能注册
		}else{
			res.send("0");//可以注册
		}
	});
});
//注册接口
router.post("/v1/register",(req,res)=>{
	var $user_name=req.body.user_name;
	var $password=req.body.password;
	var $email=req.body.email;
	if(!$user_name){
		res.send("用户名不存在");
		return;
	}
	if(!$password){
		res.send("密码不存在");
		return;
	}
	if(!$email){
		res.send("邮箱不存在");
		return;
	}
	var sql="insert into job_seeker values(null,?,?,?,?,null,?,?)";
	pool.query(sql,[$user_name,$password,$email],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});
});

//导出路由器
module.exports=router;