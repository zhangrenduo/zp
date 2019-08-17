//http://localhost:3000/index
(function(){
    ajax({
        url:"http://localhost:3000/index",
        type:"get",
        dataType:"json"
    }).then(result=>{
        console.log(result);
        var [p1]=result;
        var {ptitle}=p1;
        var html=`<div class="hot hot1">
        <ul class="clearbox">
            <li>
                <a class="mk" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="mk" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="mk" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="mk" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="mk" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="mk" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="mk" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="mk" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="" href="#">${ptitle}</a>
            </li>
            <li>
                <a class="on" href="#">${ptitle}</a>
            </li>
        </ul>
    </div>`;
    document.getElementById("p1").innerHTML=html;
    })
})();