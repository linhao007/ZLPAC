<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>咨立拍车网站</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="stylesheet" type="text/css" href="css/first.css" />
<link href="css/index.css" rel="stylesheet" type="text/css" />
<link type="text/css" href="css/foot.css" rel="stylesheet" />
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/tab.js"></script>
<script type="text/javascript" charset="utf-8">
	var qqcode_fs_cfg = {
		"root" : "http://www.sunkf.net/codes/two/default/",
		"datalist" : [ {
			"qq" : "3036103936",
			"qqdesc" : "客服1",
			"face" : 0
		}, {
			"qq" : "2965755134",
			"qqdesc" : "客服2",
			"face" : 0
		} ],
		"side" : "right",
		"topfix" : "100"
	};
</script>
<script type="text/javascript" charset="utf-8"
	src="http://www.sunkf.net/codes/two/default/kf.js?v=1021"></script>
<script>
function checkForm5(){
		if(document.topLoginForm.u_id.value == ""){
			alert("请输入账号！");
			return false;
		}
		if(document.topLoginForm.psword.value == ""){
			alert("请输入密码！");
			return false;
		}
		return true;
	}
</script>
  </head>
  
  <body>
    <div class="up">
		<div class="header">
			<div style="margin-top:15px;">
				<font size="+1" color="#FFFFFF"> 专业事故车拍卖平台 </font>
				<div style="float:right">
					<form method="post" name="topLoginForm" action="zlpc/login" onsubmit="return checkForm5()" >
						<font color="#FFFFFF"> 用户名: </font> <input type="text" name="u_id"  /> <font color="#FFFFFF"> 密&nbsp;&nbsp;码:
						</font> <input type="password" name="psword" /> <input type="submit"
							value="登录"
							style="background:url(img/dengru.png); width:40px; height:25px;" />
					</form>
				</div>
			</div>
		<li class="doLogBox" style="margin-left:700px;">
			<c:if test="${sessionScope.user != null }">
				用户：<font color="#F00"><b>${sessionScope.user.u_name }</b></font>&nbsp;|
			</c:if>
			&nbsp;<a href="login.html"> 登录 </a> &nbsp;|&nbsp; <a href="register"> 注册
			</a> &nbsp;|&nbsp; <a href="login/forget"> 找回密码 </a>&nbsp;
			<c:if test="${sessionScope.user != null }">
				|&nbsp;<a href="exit">注销</a>
			</c:if>
			</li>
		</div>
	</div>
	<div class="logoposition">
		<div style=" margin-left:80px;width:200px; float:left">
			<img class="logo" src="img/zili.png" />
		</div>
		<div style="width:600px; margin-top:10px; float:left">
			<div style="margin-top:25px;; margin-left:350px;">
				<font size="+2"> 联系电话<br/>0791-83963313 </font>
			</div>
		</div>
		<div style="width:300px;float:left; margin-top:50px;">
			<font size="+1">  <a href="company/laws.html">免责声明 </a> |<a href="company/response.html"> 
					法律声明 </a> </font>
		</div>
	</div>
  </body>
</html>
