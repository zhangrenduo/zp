var dd={field:"",childfield:"",to_id:"",to_text:"",is_multi:"",show_full:"",is_loc:"",empty:"",title:"",unlimit:""};var pclose=function(){if($(".calendar ").css("display")=="block"){$(".calendar ").hide()}$("#"+dd.field).hide();$(".page1").show().next().hide();if($_CONFIG.template=="my/jobassist"){if($("#shadow").hasClass("enable")){$("#shadow").removeClass("enable").hide();return false}}if(($_CONFIG.template=="resume/resumeedit"||$_CONFIG.template=="resume/guide2")&&dd.field=="bmajor"){window.scrollTo(0,document.body.scrollHeight)}};var judge=true;var setPage=function(){dd.field=arguments[0],dd.childfield=arguments[1],dd.to_id=arguments[2],dd.to_text=arguments[3],dd.is_multi=arguments[4],dd.show_full=arguments[5],dd.empty=arguments[6]?arguments[6]:"",dd.is_loc=arguments[7]?arguments[7]:"";var htm="";var code=eval(dd.field+"_c"),value=eval(dd.field+"_v");if(dd.field.indexOf("area")!=-1){dd.unlimit="000000";dd.title="地区";$("#"+dd.field).hide()}if(dd.field.indexOf("fun")!=-1){dd.unlimit="0000";dd.title="职能"}if(dd.field.indexOf("ind")!=-1){dd.unlimit="00";dd.title="行业"}if(dd.field.indexOf("major")!=-1){dd.unlimit="00";dd.title="专业"}if($("#"+dd.field)[0]&&dd.field.indexOf("fun")!=-1){$("#"+dd.field).remove()}if(dd.field.indexOf("area")!=-1){var hotcity=setHotCity()}htm+='<div id="'+dd.field+'" class="cover"><div class="t_phead"><div class="t_hinfo"><i class="bb" onclick="pclose();"></i>';if(dd.is_multi==1){var sel_id=$("#"+dd.to_id).val(),sel_name=$("#"+dd.to_text).text();ar_sel_id=sel_id?sel_id.split(","):new Array();ar_sel_name=sel_name?sel_name.split(","):new Array();htm+='<p class="bb"><span class="slte icin" id="'+dd.field+'_selnum">已选'+dd.title+"（"+ar_sel_id.length+'/5）</span></p><i class="bb" onclick="confirmMulti()">确定</i></div>';htm+='<section class="plst" id="'+dd.field+'_sel">';if(sel_id){for(var ele in ar_sel_id){htm+='<span class="i cancel '+dd.field+'" id="'+dd.field+"sel_"+ar_sel_id[ele]+'" value="'+ar_sel_id[ele]+'"><em class="icon" onclick="delMulti(this)"></em>'+ar_sel_name[ele]+"</span>"}}else{htm+="<center>您还未选择"+dd.title+"哦！</center>"}htm+="</section>"}else{htm+='<p class="p2 bb">'+dd.title+"选择</p></div>"}htm+='</div><div class="wp pbox ltse" style="z-index:1">';if(hotcity){htm+=hotcity}htm+='<div class="plist">';if(dd.childfield){for(var ele in code){var father_id="";var ck="nr";if(/^[0]+$/.test(code[ele])){if(dd.show_full==0){continue}else{father_id=' id="'+dd.field+"_"+code[ele]+'"';if(sel_id.indexOf(code[ele])!=-1){ck="ck"}}}else{father_id=' id="f_'+dd.field+"_"+code[ele]+'"'}htm+='<div class="i '+ck+'"'+father_id+' onclick="setChild(this)" value="'+code[ele]+'"><span>'+value[ele]+"</span></div>"}}else{for(var ele in code){if(/^[0]+$/.test(code[ele])){dd.unlimit=code[ele];if(dd.show_full==0){continue}}if(dd.is_multi==1){if(sel_id.indexOf(code[ele])!=-1){var ck="ck"}else{var ck="nr"}htm+='<div class="i '+ck+'" id="'+dd.field+"_"+code[ele]+'" onclick="selMulti(this)" value="'+code[ele]+'"><span>'+value[ele]+"</span></div>"}else{htm+='<<div class="i nr" onclick="selVal(this)" value="'+code[ele]+'"><span>'+value[ele]+"</span></div>"}}}htm+="</div></div></div>";if(storageTest(window.localStorage)){var txt="";for(var i=-1;i<localStorage.length;i++){txt=localStorage.key(i);if(txt!==dd.field){localStorage.setItem(dd.field,htm)}}$("body").children().wrapAll('<div class="page1"></div>');htm=localStorage.getItem(dd.field);$(".page1").after(htm)}else{if(judge){$("body").children().wrapAll('<div class="page1"></div>');$(".page1").after(htm)}judge=false}if(dd.is_multi==1){if(ar_sel_id.length>0){$(".phead").addClass("mk")}$(".slte").click(function(){if($(".plst").css("display")=="none"){$(".plst").show();if(!$(".phead").hasClass("mk")){$(".phead").addClass("mk")}}else{$(".plst").hide();if($(".phead").hasClass("mk")){$(".phead").removeClass("mk")}}})}pageshow(dd.field);var reg=/,/;if(reg.test($("#fun").val())>0){var funlist=$("#fun").val().split(",");for(var i=0;i<funlist.length;i++){$("#f_bfun_"+funlist[i].substr(0,2)+"00").click()}}};var setHotCity=function(){var f=hotareaall_c,a=hotareaall_v;var b='<div class="ptit"><div class="e"><span>当前城市</span></div></div>';b+='<div class="ncity" onclick="selVal(this)" value="'+$_CONFIG.jobarea+'"><span>'+$_CONFIG.jobareaname+"</span></div>";b+='<div class="ptit"><div class="e"><span>热门城市</span></div></div>	 <div class="clist">';var c=0;for(var d in f){if(dd.show_full==0&&f[d]=="000000"){continue}if(dd.is_loc){b+="<a onclick=\"setLoc(this,'"+$_CONFIG.domain+'\')" value="'+f[d]+'"><span>'+a[d]+"</span></a>"}else{if(dd.is_multi==1){var e=$("#"+dd.to_id).val();if(e.indexOf(f[d])!=-1){b+='<a onclick="selAreaMulti(this,1)" value="'+f[d]+'" id="hotcity_'+f[d]+'" class="on"><span>'+a[d]+"</span></a>"}else{b+='<a onclick="selAreaMulti(this,1)" value="'+f[d]+'" id="hotcity_'+f[d]+'" class=""><span>'+a[d]+"</span></a>"}}else{b+='<a onclick="selVal(this)" value="'+f[d]+'"><span>'+a[d]+"</span></a>"}}}b+='</div> <div class="ptit"><div class="e"><span>按省份选择城市</span></div></div>';return b};var setChild=function(o){var next=$(o).next();if(next.hasClass("lsinfo")){if(next.css("display")=="none"){$(".lsinfo").hide();$(".down").removeClass("down");$(o).addClass("down");next.show()}else{$(o).removeClass("down");next.hide()}}else{var code=eval(dd.childfield+"_c"),value=eval(dd.childfield+"_v"),fathercode=$(o).attr("value");if(dd.field.indexOf("area")!=-1){var htm='<div class="clist lsinfo" style="display:block">',trigger=true,id=new Array();$(".barea").each(function(){id.push($(this).attr("value"))});id=id.toString();for(var ele in code){if(code[ele].substr(0,2)==fathercode.substr(0,2)){if(dd.is_loc){htm+='<a value="'+code[ele]+'" onclick="setLoc(this,\''+$_CONFIG.domain+"')\">"+value[ele]+"</a>"}else{if(dd.is_multi){var ck="";if(id.indexOf(code[ele])!=-1){ck=' class="on"'}htm+="<a"+ck+' id="barea_'+code[ele]+'" value="'+code[ele]+'" onclick="selAreaMulti(this)">'+value[ele]+"</a>"}else{htm+='<a value="'+code[ele]+'" onclick="selVal(this)">'+value[ele]+"</a>"}}trigger=false}}if(trigger){if(is_loc){setLoc(o,$_CONFIG.domain)}else{selVal(o)}return false}htm+='<div class="clear"></div></div>'}else{var htm='<p class="lsinfo clist" style="display:block">';var noshow=0;var noshow_multi=0;for(var ele in code){if(dd.is_multi==1&&$(o).attr("value")==dd.unlimit){selMulti(o);return false}if(code[ele].substr(0,2)==fathercode.substr(0,2)){if(dd.is_multi==1){var id=$("#"+dd.field+"_"+dd.unlimit).hasClass("ck")?"":$("#"+dd.to_id).val();if(id.indexOf(code[ele])!=-1){var ck="ck"}else{var ck="nr"}if(dd.to_id=="funtype3"){if(noshow_multi>0){htm+='<span class="i '+ck+'" value="'+code[ele]+'" id="'+dd.field+"_"+code[ele]+'" onclick="selMulti(this)">'+value[ele]+"</span>"}noshow_multi++}else{htm+='<span class="i '+ck+'" value="'+code[ele]+'" id="'+dd.field+"_"+code[ele]+'" onclick="selMulti(this)">'+value[ele]+"</span>"}}else{if(noshow>0){htm+='<span class="i nr" value="'+code[ele]+'" onclick="selVal(this)">'+value[ele]+"</span>"}noshow++}trigger=false}}htm+="</p>"}$(".lsinfo").hide();$(".down").removeClass("down");$(o).addClass("down");$(o).after(htm)}};var selMulti=function(f){var d=$(f).attr("value");if(d==dd.unlimit){$("#"+dd.field+"_sel").empty();$(".ck").removeClass("ck").addClass("nr")}else{if($("#"+dd.field+"_"+dd.unlimit).hasClass("ck")){$("#"+dd.field+"_"+dd.unlimit).removeClass("ck").addClass("nr");$("#"+dd.field+"sel_"+dd.unlimit).remove()}if(dd.childfield){var e="";for(var b=0;b<d.length-2;b++){e+="0"}if(d.substr(2)==e){$(f).siblings().each(function(){if($(this).hasClass("ck")){$(this).removeClass("ck").addClass("nr");var g=$(this).attr("value");$("#"+dd.field+"sel_"+g).remove()}})}else{var c=d.substr(0,2)+e;$("#"+dd.field+"_"+c).removeClass("ck").addClass("nr");$("#"+dd.field+"sel_"+c).remove()}}}if($(".plst").find("."+dd.field).length>=5&&!$(f).hasClass("ck")){pop("您已经选择了5个"+dd.title+"，如需更换，请取消后重新选择！",1,"确定");return false}if($(f).hasClass("nr")){$(f).removeClass("nr").addClass("ck");var a='<span class="i cancel '+dd.field+'" id="'+dd.field+"sel_"+d+'" value="'+d+'"><em class="icon" onclick="delMulti(this)"></em>'+$(f).text()+"</span>";$("#"+dd.field+"_sel").append(a);if($(".ck")[0]){$("#"+dd.field+"_sel").find("center").remove()}}else{if(d!=dd.unlimit){$(f).removeClass("ck").addClass("nr");$("#"+dd.field+"sel_"+d).remove();if(!$(".plst").find("."+dd.field)[0]){$("#"+dd.field+"_sel").append("<center>您还未选择"+dd.title+"哦！</center>")}}}if(d==dd.unlimit){confirmMulti()}$("#"+dd.field+"_selnum").text("已选"+dd.title+"（"+$(".plst").find("."+dd.field).length+"/5）")};var selAreaMulti=function(e){var d=arguments[1]?arguments[1]:"";var c=$(e).attr("value");if(c=="000000"){$("#barea_sel").empty();$(".on").removeClass("on")}else{if($("#barea_000000").hasClass("on")){$("#barea_000000").removeClass("on");$("#bareasel_000000").remove()}if(c.substr(2)=="0000"){if(!d){$(".on:not(#barea_"+c+")").each(function(){if(c.substr(0,2)==$(this).attr("value").substr(0,2)){$(this).removeClass("on");$("#bareasel_"+$(this).attr("value")).remove()}})}}else{var b=c.substr(0,2)+"0000";$("#barea_"+b).removeClass("on");$("#bareasel_"+b).remove()}}if($(".plst").find(".barea").length>=5&&!$(e).hasClass("on")){pop("您已经选择了5个地区，如需更换，请取消后重新选择！",1);return false}if(!$(e).hasClass("on")){$(e).addClass("on");if(d){$("#barea_"+c).addClass("on")}else{$("#hotcity_"+c).addClass("on")}var a='<span class="i cancel barea" id="bareasel_'+c+'" value="'+c+'"><em class="icon" onclick="delMulti(this)"></em>'+$(e).text()+"</span>";$("#barea_sel").append(a);if($(".on")[0]){$("#barea_sel").find("center").remove()}}else{if(c!="000000"){$(e).removeClass("on");if(d){$("#barea_"+c).removeClass("on")}else{$("#hotcity_"+c).removeClass("on")}$("#bareasel_"+c).remove();if(!$(".plst").find(".barea")[0]){$("#barea_sel").append("<center>您还未选择地区哦！</center>")}}}if(c=="000000"){confirmMulti()}$("#barea_selnum").text("已选地区（"+$(".plst").find(".barea").length+"/5）")};var confirmMulti=function(){var b=new Array(),d=new Array();$("."+dd.field).each(function(){b.push($(this).attr("value"));d.push($(this).text())});var c=b.toString(),a=d.toString();if(c==""&&!dd.empty){pop("请选择"+dd.title,1,"确定");return false}if(a==""){a="请选择"+dd.title}selVal("",c,a)};var delMulti=function(c){var b=$(c).parent();b.remove();var a=b.attr("value");if(dd.field.indexOf("area")!=-1){$("#barea_"+a).removeClass("on");$("#hotcity_"+a).removeClass("on");if(!$("."+dd.field)[0]){$("#"+dd.field+"_sel").append("<center>您还未选择"+dd.title+"哦！</center>")}}else{$("#"+dd.field+"_"+a).removeClass("ck").addClass("nr");if(!$("."+dd.field)[0]){$("#"+dd.field+"_sel").append("<center>您还未选择"+dd.title+"哦！</center>")}}$("#"+dd.field+"_selnum").text("已选"+dd.title+"（"+$(".plst").find("."+dd.field).length+"/5）")};var selVal=function(c){var a=typeof(arguments[1])!="undefined"?arguments[1]:$(c).attr("value"),b=arguments[2]?arguments[2]:$(c).text();$("#"+dd.to_id).attr("value",a);$("#"+dd.to_text).text(b);if($("#"+dd.to_text).hasClass("c_default")){$("#"+dd.to_text).removeClass("c_default")}if($("#"+dd.to_text).hasClass("c_tdefault")){$("#"+dd.to_text).removeClass("c_tdefault")}if(!a){$("#"+dd.to_text).addClass("c_default")}if(!a){$("#"+dd.to_text).addClass("c_tdefault")}pclose()};function pageshow(a){$(".page1").hide();$("#"+a).show();document.body.scrollTop=0;document.documentElement.scrollTop=0}function pageclose(){$(".page1").show();$(".page2").hide();document.body.scrollTop=0;document.documentElement.scrollTop=0}$(".hinfo .slte").click(function(){if($(".phead").hasClass("mk")){$(".phead").removeClass("mk")}else{$(".phead").addClass("mk")}});$(".ltse .i").click(function(){if($(this).hasClass("down")){$(this).removeClass("down");if($(this).next().hasClass("lsinfo")){$(this).next().hide()}}else{$(".ltse .i").removeClass("down");$(".ltse .lsinfo").hide();if($(this).parent().hasClass("lsinfo")){if($(this).hasClass("ck")){$(this).removeClass("ck").addClass("nr")}else{$(this).removeClass("nr").addClass("ck")}}else{$(this).addClass("down");if($(this).next().hasClass("lsinfo")){$(this).next().show()}}}});var storageTest=function(b){if(!!b){try{b.setItem("key","value");b.removeItem("key");return true}catch(a){return false}}else{return false}};