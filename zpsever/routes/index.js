const express=require("express");
const router=express.Router();
const pool=require("../pool");

/*router.get("/",(req,res)=>{
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
       /* }
    })
});*/

router.get("/",(req,res)=>{
    var lid=req.query.lid;
    var output={
      title:[],
      ptitle:[],
      detail:[]
    }
    if(index_ptitle_id!==undefined){
      var sql1=`select * from index_ptitle where index_ptitle_id=?`;
      pool.query(sql1,[index_ptitle_id],(err,result)=>{
        if(err) console.log(err);
        output.product=result[0];
        console.log(output);
        var index_ptitle_id=output.product["index_title_id"];
        var sql2=`select spec,lid from index_ptitle where index_title_id=?`;
        pool.query(sql2,[index_ptitle_id],(err,result)=>{
          if(err) console.log(err);
          output.specs=result;
          console.log(output);
          var sql3=`select * from index_dtitle where index_ptitle_id=?`
          pool.query(sql3,[index_ptitle_id],(err,result)=>{
            if(err) console.log(err);
            output.pics=result;
            console.log(output);
            res.send(output);
          })
        })
      })
    }else{
      res.send(output);
    }
  })
//导出路由器
module.exports=router;
/*router.get("/",(req,res)=>{
    var lid=req.query.lid;
    var output={
      product:{},
      specs:[],
      pics:[]
    }
    if(lid!==undefined){
      var sql1=`select * from xz_laptop where lid=?`;
      pool.query(sql1,[lid],(err,result)=>{
        if(err) console.log(err);
        output.product=result[0];
        console.log(output);
        var family_id=output.product["family_id"];
        var sql2=`select spec,lid from xz_laptop where family_id=?`;
        pool.query(sql2,[family_id],(err,result)=>{
          if(err) console.log(err);
          output.specs=result;
          console.log(output);
          var sql3=`select * from xz_laptop_pic where laptop_id=?`
          pool.query(sql3,[lid],(err,result)=>{
            if(err) console.log(err);
            output.pics=result;
            console.log(output);
            res.send(output);
          })
        })
      })
    }else{
      res.send(output);
    }
  })*/