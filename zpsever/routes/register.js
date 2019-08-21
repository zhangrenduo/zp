//引入express模块
const express=require('express');
//创建空的路由
var router=express.Router();
const pool=require("../pool");
//添加路由

//用户注册
//检测是否重名
router.get('/double', (req,res) => {
	var $uname = req.query.uname;
	if (!$uname) {
		res.send('未找到uname');
		return;
	}
	var sql = 'select * from zp_user where uname=?';
	pool.query(sql, [$uname], (err,result) => {
		if (err) throw err;
		if (result.length >= 1) {
			res.send('1');
		} else {
			res.send('0');
		}
	})
});
router.post("/regiter/reg", (req,res) => {
	var $uid = req.body.uid;
	var $uname = req.body.uname;
	var $upwd = req.body.upwd;
	var $email = req.body.email;
	var $phone = req.body.phone;
	var $user_name = req.body.user_name;
	var $gender = req.body.gender;
	var sql = "insert into zp_user set uid=?,uname=?,upwd=?,email=?,phone=?,user_name=?,gender=?";
	pool.query(sql, [$uid, $uname, $upwd, $email, $phone, $user_name, $gender], (err,result) => {
		if (err) throw err;
		if (result.affectedRows > 0) {
			res.send("1");
		} else {
			res.send("2");
		}
	});
});
  //测试:
  //(1)启动node app.js
  //(2)
  //http://127.0.0.1:3000/login?uname=tom&upwd=123
  //http://127.0.0.1:3000/login?uname=tom&upwd=121
  //导出路由器
module.exports=router;