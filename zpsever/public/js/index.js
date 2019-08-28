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
            var {ptitle}=p1;
            /*var html=`<ul class="clearbox">
            <li>
                <a class="mk" href="#">${result[0].ptitle}
                    <img class="imgs" src="img/index/minggi/tub/yyy.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">${result[1].ptitle}
                    <img class="imgs" src="img/index/minggi/tub/dianz.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">${result[2].ptitle}
                  <img class="imgs" src="img/index/minggi/tub/tab_sj.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">${result[3].ptitle}
                  <img class="imgs" src="img/index/minggi/tub/zzban.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">${result[4].ptitle}
                    <img class="imgs" src="img/index/minggi/tub/fwy (1).png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">${result[5].ptitle}
                     <img class="imgs" src="img/index/minggi/tub/kdy.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">${result[6].ptitle}
                  <img class="imgs" src="img/index/minggi/tub/dg.png" alt="">
                </a>
            </li>
            <li>
                <a class="mk" href="#">${result[7].ptitle}
                    <img class="imgs" src="img/index/minggi/tub/cg.png" alt="">
                </a>
            </li>
            <li>
                <a class="" href="#">${result[8].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[9].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[10].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[11].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[12].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[13].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[14].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[15].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[16].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[17].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[18].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[19].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[20].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[21].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[22].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[23].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[24].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[25].ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${result[26].ptitle}</a>
            </li>
            <li>
                <a class="on" href="#">${result[27].ptitle}</a>
            </li>
        </ul>`;*/
        document.getElementById("p1").innerHTML=html;
        }
    })
    //xhr.onreadystatechange=function
  //.then(result=>{
    //将这里的全部内容，剪切到上方success内
  //})
});//();

/* success:function(result){
    console.log(result);
    var {product, specs, pics}=result;

    var {title, subtitle, price, promise}=product;
    $("#ptitle").html(title);
    $("#p_sub_title").html(subtitle);
    $("#pprice").html(`¥${price.toFixed(2)}`);
    $("#ppromise").html(promise);
*/