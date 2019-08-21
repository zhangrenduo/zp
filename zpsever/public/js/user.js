//登录
function out_luname_msg() {
	if (!uname.value) {
		ln_msg.innerHTML = "用户名为空";
		ln_msg.style.color = "#f00";
		return;
	} else {
		ln_msg.innerHTML = "输入成功";
		ln_msg.style.color = "#0f0";
		return;
	}
}

function out_lupwd_msg() {
	if (!upwd.value) {
		lp_msg.innerHTML = "密码为空";
		lp_msg.style.color = "#f00";
		return;
	} else {
		lp_msg.innerHTML = "输入成功";
		lp_msg.style.color = "#0f0";
		return;
	}
}

function user_login() {
	var $uname = uname.value;
	var $upwd = upwd.value;
	//1.获取xhr异步对象
	var xhr = new XMLHttpRequest();
	//4.绑定监听，获取响应
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var result = xhr.responseText;
			if (result == 1) {
				alert("登录成功");
				return window.location.href="index.html"
			} else {
				document.getElementById("login_msg").style.color = "#f00";
				login_msg.innerHTML = "用户名或密码错误"
			}
		}
	}
	//非空判断
	if (!$uname) {
		document.getElementById("ln_msg").style.color = "#f00";
		ln_msg.innerHTML = "用户名为空";
		return;
	}
	if (!$upwd) {
		document.getElementById("lp_msg").style.color = "#f00";
		lp_msg.innerHTML = "用户密码为空";
		return;
	}
	//2.打开连接，创建对象
	xhr.open("get", "http://127.0.0.1:3000/login/login/" + $uname + "-" + $upwd, true);
	//3.发送请求
	xhr.send();
}

//注册
function runame_msg() {
	rn_msg.innerHTML = "用户名3~8位";
	rn_msg.style.color = "#999";
}

function rupwd_msg() {
	rp_msg.innerHTML = "密码6~12位";
	rp_msg.style.color = "#999";
}

function out_rupwd_msg() {
	if (rupwd.value) {
		if (rupwd.value.length >= 6 && upwd.value.length <= 12) {
			rp_msg.innerHTML = "输入成功";
			rp_msg.style.color = "#0f0";
		} else {
			rp_msg.innerHTML = "密码格式不正确";
			rp_msg.style.color = "#f00";
		}
	} else {
		rp_msg.innerHTML = "密码不能为空";
		rp_msg.style.color = "#f00";
	}
}

var str = false;

function out_runame_msg() {
	if (runame.value) {
		if (runame.value.length >= 3 && uname.value.length <= 8) {
			var $uname = runame.value;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4 && xhr.status == 200) {
					var result = xhr.responseText;
					if (result == "1") {
						document.getElementById("rn_msg").style.color = "red";
						rn_msg.innerHTML = "该用户已存在";
						str = true;
					} else {
						document.getElementById("rn_msg").style.color = "green";
						rn_msg.innerHTML = "该用户名可用"
					}
				}
			}
			xhr.open("get", "/double?uname=" + $uname, true);
			xhr.send();
		} else {
			rn_msg.innerHTML = "用户名格式不正确";
			rn_msg.style.color = "#f00";
		}
	} else {
		rn_msg.innerHTML = "用户名不能为空";
		rn_msg.style.color = "#f00";
	}
}

function user_reg() {
	var $uname = runame.value;
	var $upwd = rupwd.value;
	var val1 = document.getElementById("text").value;
	if (!$uname) {
		rn_msg.innerHTML = "用户名称为空";
		rn_msg.style.color = "#f00"
		return;
	}
	if (!$upwd) {
		rp_msg.innerHTML = "用户密码为空";
		rp_msg.style.color = "#f00"
		return;
	}
	if (val1 != "") {
		if (val1 != code) {
			text_msg.innerHTML = "验证码不正确";
			text_msg.style.color = "#f00";
			return;
		} else {
			text_msg.innerHTML = "验证成功";
			text_msg.style.color = "#0f0";
		}
	} else {
		text_msg.innerHTML = "验证码为空";
		text_msg.style.color = "#f00";
		return;
	}
	if (str == true) {
		str = false;
		rn_msg.innerHTML = "该用户名以被注册";
		rn_msg.style.color = "#f00";
	} else {
		if (rn_msg.innerHTML == "该用户名以被注册" || rn_msg.innerHTML == "该用户已存在") {
			alert("该用户以被注册");
		} else {
			//1.获取xhr异步对象
			var xhr = new XMLHttpRequest();
			//4.绑定监听，获取响应
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4 && xhr.status == 200) {
					var result = xhr.responseText;
					if (result == 1) {
						alert("注册成功");
						//reg.style.display = "none";
						//login.style.display = "block";
						rn_msg.innerHTML = "该用户名以被注册";
						rn_msg.style.color = "#f00";
						//return window.location.href="index.html";
					} else {
						alert("注册失败");
						return;
					}
				}
			}
			//2.打开连接，创建请求
			xhr.open("post", "/register/reg", true);
			//3.发送请求
			var formdata = "uname=" + $uname + "&upwd=" + $upwd;
			//设置请求头信息
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(formdata);
		}
	}
}
var code;
change();

function change() {
	code = "";
	var codeLength = 4;
	var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
		'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
	for (var i = 0; i < codeLength; i++) {
		var charIndex = Math.floor(Math.random() * 36);
		code += selectChar[charIndex];
	}
	document.getElementById("discode").style.fontFamily = "Fixedsys";
	document.getElementById("discode").style.letterSpacing = "5px";
	document.getElementById("discode").style.fontSize = "30px";
	document.getElementById("discode").style.color =
		`rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1)`;
	document.getElementById("discode").style.backgroundColor = "#ccc";
	document.getElementById("discode").innerHTML = code;
	document.getElementById("discode").style.lineHeight = "55px";
}

function into() {
	text_msg.innerHTML = "验证码为4位";
	text_msg.style.color = "#999"
}

function outto() {
	var val1 = document.getElementById("text").value;
	var val2 = code;
	if (val1 != "") {
		if (val1 != val2) {
			text_msg.innerHTML = "验证码不正确";
			text_msg.style.color = "#f00";
		} else {
			text_msg.innerHTML = "验证成功";
			text_msg.style.color = "#0f0";
		}
	} else {
		text_msg.innerHTML = "验证码为空";
		text_msg.style.color = "#f00";
	}
}

//点击切换
/*var login = document.getElementById("login");
var reg = document.getElementById("reg");

function loginreg() {
	reg.style.display = "block";
	login.style.display = "none";
}

function reglogin() {
	reg.style.display = "none";
	login.style.display = "block";
}*/
