const express=require("express");
const router=express.Router();
const pool=require("../pool");

/*router.get("/",(req,res)=>{
    var sql=`SELECT * FROM index_title WHERE index_title_id!=0 ORDER BY index_title_id`;
    pool.query(sql,[],(err,result)=>{
        if(err){
            res.send(err);
            console.log(err);
        }else{
            res.send(result);
        }
    })
});
router.get("/",(req,res)=>{
    var sql=`SELECT * FROM index_dtitle WHERE index_dtitle_id!=0 ORDER BY index_dtitle_id`;
    pool.query(sql,[],(err,result)=>{
        if(err){
            res.send(err);
            console.log(err);
        }else{
            res.send(result);
        }
    })
});*/
router.get("/",(req,res)=>{
    var sql=`SELECT * FROM index_ptitle WHERE index_ptitle_id!=0 ORDER BY index_ptitle_id`;
    pool.query(sql,[],(err,result)=>{
        if(err){
            res.send(err);
            console.log(err);
        }else{
            res.send(result);
        }
    })
});
//导出路由器
module.exports=router;