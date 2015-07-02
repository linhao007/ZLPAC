<!DOCTYPE html>
<%@page pageEncoding="UTF-8" %>
<%@taglib prefix="s" uri="/struts-tags" %>
<html>
<head lang="zh">
    <meta charset="UTF-8" content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <title>Automobile Auction</title>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
	<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" />
	<link href="css/font-awesome-ie7.min.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap-ie6.min.css" rel="stylesheet" type="text/css" />
    <link href="css/ie.css" rel="stylesheet" type="text/css" />
    <link href="css/common.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="row-fluid">
    <div class="box-inner">
        <div class="box-header well">
            <span><i class="icon-user"></i> 会员登录 </span>
        </div>
        <div class="box-content">
    	    <form class="form-horizontal" action="login.action">
                <s:if test="#request.errorMessage!=null">
                    <div class="control-group">
                        <div class="alert">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong>错误</strong> <s:property value='#request.errorMessage' />
                        </div>
                    </div>
                </s:if>
			    <div class="control-group">
				    <label class="control-label" for="username">用户名</label>
				    <div class="controls">
				    <input type="text" id="username" name="account.username" placeholder="用户名" validate="{required:true,minlength:5,remote:{type:'post',url:'validateUsername.action', data:{'captchaCode':function(){return $('#captchaCode').val();}}},messages:{remote:'用户名不存在'}}">
				    <span class="help-inline">用户名至少5位</span>
			    </div>
			    </div>
			    <div class="control-group">
				    <label class="control-label" for="password">密码</label>
				    <div class="controls">
				    <input type="password" id="password" name="account.password" placeholder="密码" validate="{required:true,minlength:5}">
				    <span class="help-inline">密码长度至少5位</span>
			    </div>
			    </div>
			    <div class="control-group">
			    <div class="controls centerAlign">
				    <label class="checkbox">
				    	<input type="checkbox"> 自动登录
				    </label>
				    <label class="checkbox">
				    	<a href="#"> 忘记密码 </a>
				    </label>
				    
			    </div>
			    <div class="control-group">
                    <div class="controls buttons">
                        <button class="btn btn-primary" type="submit">  登  录  </button>
                        还没有账号？<a href="#" url="register">注册</a>
                    </div>
                </div>
                </div>
		    </form>
        </div>
    </div>
</div>

</body>
<script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/bootstrap-ie.js" type="text/javascript"></script>
<script src="js/jquery.metadata.js" type="text/javascript"></script>
<script src="js/jquery.validate.js" type="text/javascript"></script>
<script src="js/jquery.messages.zh.js" type="text/javascript"></script>
<!--[if lt IE 9]>
<script src="js/respond.min.js" type="text/javascript"></script>
<script src="js/html5shiv.js" type="text/javascript"></script>
<![endif]-->
<script type="text/javascript" src="js/navigateData.js"></script>
<script type="text/javascript" src="js/eventHandler.js"></script>
<script type="text/javascript" src="js/validateForm.js"></script>
</html>