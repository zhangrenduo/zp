const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
    //var lid=req.query.index_ptitle_id;
    //var title=req.query.ptitle;
    var sql=`SELECT * FROM index_ptitle WHERE index_ptitle_id!=0 ORDER BY index_ptitle_id`;
    pool.query(sql,[],(err,result)=>{
        if(err){
            res.send(err);
            console.log(err);
        }else{
            res.send(result);
            /*res.writeHead(200,{
            "Access-Control-Allow-Origin":
            "*"
            });
            res.write(JSON.stringify(result));
            res.end();*/
        }
    })
});
 //导出路由器
 module.exports=router;
