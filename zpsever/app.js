//引入express模块
const express=require('express');
//引入用户路由器
const userRouter=require('./routes/user.js');
const productRouter=require('./routes/product.js');
//引入body-parser中间件
const bodyParser=require('body-Parser');
//创建web服务器
var app=express();
//监听端口
app.listen(8080);

//托管静态资源到public目录下
app.use(express.static('public') );

//使用body-Parser中间件
app.use(bodyParser.urlencoded({
  extended:false  //不是第三方的qs模块，而是使用querystring模块
}));



//使用路由器
//   /user/reg
app.use('/user',userRouter);
app.use('/product',productRouter);







