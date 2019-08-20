//http://localhost:3000/index
$(function(){
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
//https://www.runoob.com/jquery/jquery-plugin-password-validation.html