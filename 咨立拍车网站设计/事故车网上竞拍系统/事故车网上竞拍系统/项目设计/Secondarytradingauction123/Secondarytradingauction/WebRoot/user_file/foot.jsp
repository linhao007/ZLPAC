<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>咨立拍车尾部</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  <link type="text/css" href="css/foot.css" rel="stylesheet" />
  </head>
  
  <body>
    	<div id="footer" style="text-align: center; width: 1002px;">
		<div class="footer-container">
			<div class="copyright-info">
				<div class="footer-nav-links-list">
					<ul>
						<li><a href="#">关于咨立拍车</a></li>
						<li>|</li>
						<li><a href="#">竞价流程</a></li>
						<li>|</li>
						<li><a href="#">公司账户</a></li>
						<li>|</li>
						<li><a href="#">网站导航</a></li>
						
					</ul>
				</div>
				版权所有<a href="http://ruanjianxy.jxau.edu.cn/" target="_blank">江西农业大学软件学院
					<img src="img/bluedot.jpg" width="31"> </a><a
					href="http://baike.baidu.com/view/6177001.htm?fr=aladdin">蓝点工作室</a>
				<br> 地址：南昌市昌北区沙井小区23号楼 电话：0791-83963313
			</div>
			<div class="footer-nav-links">
				<div class="footer-nav-links-title">友情链接 | Frends Link</div>
				<div class="footer-nav-links-list">
					<ul>
						<li><a href="http://www.iauto8.com/" target="_blank">
								汽车销量排行</a>
						</li>
						<li><a href="http://www.che168.com/henan/" target="_blank">
								二手车之家</a>
						</li>
						<li><a href="http://www.carschina.com/" target="_blank">
								汽车中国</a>
						</li>
						<li><a href="http://www.autohome.com.cn/" target="_blank">
								汽车之家</a>
						</li>
						<li><a href="http://www.7c8.cc" target="_blank"> 汽车吧</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
  </body>
</html>
