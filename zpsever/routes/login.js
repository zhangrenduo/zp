//引入express模块
const express=require('express');
//创建空的路由
var router=express.Router();
const pool=require("../pool");
//添加路由

//功能一:完成用户登录操作

//用户登陆
router.get("/login/login/:uname-:upwd", function (req,res) {
	var $uname = req.params.uname;
	var $upwd = req.params.upwd;
	var sql = "SELECT * FROM zp_user WHERE uname=? AND upwd=?";
	pool.query(sql, [$uname, $upwd], function (err, result) {
		if (err) throw err;
		if (result.length > 0) {
			res.send("1");
		} else {
			res.send("0");
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