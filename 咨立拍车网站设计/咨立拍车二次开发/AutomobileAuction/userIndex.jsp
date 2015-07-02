<!DOCTYPE html>
<%@page pageEncoding="UTF-8" %>
<%@taglib prefix="s" uri="/struts-tags" %>
<html>
<head lang="zh">
    <meta charset="UTF-8" content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <title>Automobile Auction</title>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap-ie6.min.css" rel="stylesheet" type="text/css" />
    <link href="css/ie.css" rel="stylesheet" type="text/css" />
    <link href="css/common.css" rel="stylesheet" type="text/css" />
    <link href="css/userIndex.css" rel="stylesheet" type="text/css" />
    <link href="css/profile.css" rel="stylesheet" type="text/css"/>
</head>
<body>
	<div class="row-fluid">
		<div class="row-fluid">
			<div class="span3 navigate">
				<div class="row-fluid">
					<div class="box-inner">
			        <div class="box-header well">
			            <span><i class="icon-user"></i> 我的交易</span>
			        </div>
			        <div class="box-content">
			        	<ul>
                            <li title="用户基本信息" url="showSuccessfulBids.action"><a href="#">我的中标交易</a></li>
							<li><a href="#">我的关注车型</a></li>
							<li><a href="#">费用缴纳</a></li>
			        	</ul>
			        </div>
					</div>
				</div>

				<div class="row-fluid">
					<div class="box-inner">
			        <div class="box-header well">
			            <span><i class="icon-user"></i> 账户中心</span>
			        </div>
			        <div class="box-content">
			        	<ul>	
							<li title="用户基本信息" url="profile.action?profile.id=<s:property value='account.id'/>"><a href="#">帐户信息</a></li>
							<li title="密码" url="tryUpdatePassword.action?account.id=<s:property value='account.id'/>"><a href=>帐户安全</a></li>
							<li title="交易信息" url="tokenManage.action?account.id=<s:property value='account.id'/>"><a href=>帐户管理</a></li>
			        	</ul>
			        </div>
					</div>
				</div>
			</div>

			<div class="span9 navigate" id="right"></div>
		</div>
	</div>

<script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/bootstrap-ie.js" type="text/javascript"></script>

<script src="js/jquery.metadata.js" type="text/javascript"></script>
<script src="js/jquery.validate.js" type="text/javascript"></script>
<script src="js/jquery.messages.zh.js" type="text/javascript"></script>
<script src="js/jquery.form.js" type="text/javascript"></script>
<script src="js/formComponent.js" type="text/javascript"></script>
<!--[if lt IE 9]>
<script src="js/respond.min.js" type="text/javascript"></script>
<script src="js/html5shiv.js" type="text/javascript"></script>
<![endif]-->
<script type="text/javascript" src="js/mainFrame.js"></script>
<script type="text/javascript">
    var username = "<s:property value='#request.account.username' />"
</script>
<script src="js/adjustParentFrame.js" type="text/javascript"></script>
<script src="js/topNavigateBar.js" type="text/javascript"></script>
<script src="js/leftSideNavigateBar.js" type="text/javascript"></script>
<script src="js/actionInfo.js" type="text/javascript"></script>

<script src="js/userIndex.js" type="text/javascript"></script>

</body>
</html>