//http://localhost:3000/index
/*$(function(){
    $.ajax({
        //去掉index.html结尾的<script src="js/ajax.js">
       //因为jQuery中自带了$.ajax函数
        url:"http://localhost:3000/index",
        type:"get",
        dataType:"json",
        //xhr.onreadystatechange=function
        success:function(result){
            console.log(result);
            var [p1]=result;
            var {index_ptitle_id,ptitle}=p1;
            var html=`<ul class="clearbox">
            <li>
                <a class="mk" href="#">${ptitle}
                    <img class="imgs" src="img/index/minggi/tub/yyy.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">${ptitle}
                    <img class="imgs" src="img/index/minggi/tub/dianz.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">${ptitle}
                  <img class="imgs" src="img/index/minggi/tub/tab_sj.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">${ptitle}
                  <img class="imgs" src="img/index/minggi/tub/zzban.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">服务员
                    <img class="imgs" src="img/index/minggi/tub/fwy (1).png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">快递员
                     <img class="imgs" src="img/index/minggi/tub/kdy.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">导购
                  <img class="imgs" src="img/index/minggi/tub/dg.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">仓管
                    <img class="imgs" src="img/index/minggi/tub/cg.png" alt="">
                </a>
            </li>
            <li>
                <a class="" href="#">物流</a>
            </li>
            <li>
                <a class="" href="#">物业</a>
            </li>
            <li>
                <a class="" href="#">销售</a>
            </li>
            <li>
                <a class="" href="#">收银员</a>
            </li>
            <li>
                <a class="" href="#">普工</a>
            </li>
            <li>
                <a class="" href="#">导游</a>
            </li>
            <li>
                <a class="" href="#">技工</a>
            </li>
            <li>
                <a class="" href="#">领班</a>
            </li>
            <li>
                <a class="" href="#">保洁</a>
            </li>
            <li>
                <a class="" href="#">客服</a>
            </li>
            <li>
                <a class="" href="#">电工</a>
            </li>
            <li>
                <a class="" href="#">前台</a>
            </li>
            <li>
                <a class="" href="#">汽车</a>
            </li>
            <li>
                <a class="" href="#">学徒</a>
            </li>
            <li>
                <a class="" href="#">厨师</a>
            </li>
            <li>
                <a class="" href="#">酒店</a>
            </li>
            <li>
                <a class="" href="#">旅游</a>
            </li>
            <li>
                <a class="" href="#">房地产</a>
            </li>
            <li>
                <a class="" href="#">兼职</a>
            </li>
            <li>
                <a class="on" href="#">全部</a>
            </li>
        </ul>`;
        var obj=[];
        for(var item of p1){
         console.log(obj.push(item))
        }
        console.log(obj);
        document.getElementById("p1").innerHTML=html;
        }
    })
    //xhr.onreadystatechange=function
  //.then(result=>{
    //将这里的全部内容，剪切到上方success内
  //})
});//();
//jqery教程
//https://www.runoob.com/jquery/jquery-plugin-password-validation.html*/


//新建文件: public/js/details.js
$(function(){
    //地址栏: xxx/product_details.html?lid=1
    //location.search: ?lid=1
    //.split("=")   ?lid   1
    //               [0]  [1]
    //var lid=location.search.split("=")[1];
    //只有lid是有值时，才执行查找操作
   // if(lid){
      //console.log(lid);
      //ftp: ../PROJECT/xz/routes/details.js
      //下载并放到xz/routes/下
      //ftp: ../PROJECT/xz/app.js
      //下载并替换xz/app.js
      //重启服务端: node app.js
      //地址栏测试: http://localhost:3000/details?lid=商品编号
      $.ajax({
        url:"http://localhost:3000/index",
        type:"get",
        data:{ index_ptitle_id },
        dataType:"json",
        success:function(result){
          console.log(result);
          var {title, ptitle,detail}=result;
  
          var {title}=title;
          
  
          var html="";
          for(var pt of ptitle){
            //sp:{spec: 规格名, lid: }
            var {ptitle}=pt;
            html+=`<li>
            <a class="mk" href="#">${ptitle}
                <img class="imgs" src="img/index/minggi/tub/yyy.png" alt="">
            </a>
        </li>`;
          }
          $("#ptitle").html(html);
  
          /*放大镜效果*/
          /*1. 小图片列表*/
          //1. 小图片加载到页面
          var html="";
          for(var d of detail){
            //sp:{sm: , md: , lg: }
            var {dimg,dcontent}=d;
            html+=` <a href="#" tracetag="MIDUODUO_INDEX_MQ">
            <img width="65" height="65" src="${dimg}" alt="">
            <strong class="at bb">瓜子二手车</strong>
            <em class="mq_name">${dcontent}</em>
        </a>`;
          }
          var $ulImgs=$("#ulImgs");
          var LIWIDTH=62;
          $ulImgs.html(html)
         /* //根据图片的张数，计算ul的宽
                  .css(
                    "width",
                    LIWIDTH*pics.length
                  )
          //2. 单击左右按钮，让ulImgs左右移动
          var times=0;
          var $btnLeft=$("#btnLeft");
          var $btnRight=$("#btnRight")
          if(pics.length<=4){
            $btnRight.addClass("disabled");
          }
          $btnRight.click(function(){
            var $btn=$(this);
            if($btn.is(":not(.disabled)")){
              times++;
              $ulImgs.css(
                "margin-left",
                -LIWIDTH*times
              );
              //当点完所有多余的图片后，当前按钮禁用
              if(pics.length-4==times){
                $btn.addClass("disabled");
              }
              //只要右边按钮可以点一下，左边按钮一定启用的
              $btnLeft.removeClass("disabled");
            }
          });*/
          /*$btnLeft.click(function(){
            var $btn=$(this);
            if($btn.is(":not(.disabled)")){
              times--;
              $ulImgs.css(
                "margin-left",
                -LIWIDTH*times
              );
              //当点完所有多余的图片后，当前按钮禁用
              if(times==0){
                $btn.addClass("disabled");
              }
              //只要左边按钮可以点一下，右边按钮一定启用的
              $btnRight.removeClass("disabled");
            }
          })*/
          /*2. 中图片*/
          /*//1. 开始时，将第一张图片的中图片版本加载到img上
          var $mImg=$("#mImg");
          $mImg.attr("src",pics[0].md);
          var $lgDiv=$("#div-lg");
          $lgDiv.css(
            "background-image",
            `url(${pics[0].lg})`
          )*/
          /*3. 大图片移动*/
          //1. 当鼠标进入super-mask时，同时显示大图片
          //2. 首次加载时，或当鼠标进入小图片时，都要同步更换大图片background-image
        }
      })
    //}
  })
  //在product_details.html底部引入<script src="js/header.js">和<script src="js/details.js"
  //header.js中第9行console.log(result)注释掉！