<%@page pageEncoding="UTF-8" %>
<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
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
            <span><i class="icon-user"></i> 会员注册</span>
        </div>
        <div class="box-content">
    	    <form class="form-horizontal" action="register.action">
			    <div class="control-group">
				    <label class="control-label" for="username">用户名</label>
				    <div class="controls">
				    <input type="text" id="username" name="account.username" placeholder="用户名" validate="{required:true,minlength:5,remote:{type:'post',url:'validateUsernameAvailable.action', data:{'account.username':function(){return $('#username').val();}}},messages:{remote:'用户名已被注册'}}">
				    <span class="help-inline">请输入用户名</span>
			    </div>
			    </div>
			    <div class="control-group">
				    <label class="control-label" for="password">密码</label>
				    <div class="controls">
					    <input type="password" id="password" name="account.password" placeholder="密码" validate="{required:true,minlength:5}">
					    <span class="help-inline">请输入密码</span>
				    </div>
			    </div>

			    <div class="control-group">
				    <label class="control-label" for="rePassword">确认密码</label>
				    <div class="controls">
					    <input type="password" id="rePassword" placeholder="再次输入密码" validate="{equalTo:'#password'}">
					    <span class="help-inline">输入密码和上行相同</span>
				    </div>
			    </div>
			    
			    <div class="control-group">
				    <label class="control-label" for="nickName">昵称</label>
				    <div class="controls">
					    <input type="text" id="nickName" name="account.nickname" placeholder="请输入昵称" validate="{required:true,minlength:4}">
					    <span class="help-inline">请输入昵称</span>
				    </div>
			    </div>

			    <div class="control-group">
				    <label class="control-label" for="phoneNumber">手机号码</label>
				    <div class="controls">
					    <input type="text" id="phoneNumber" name="account.phoneNumber"placeholder="请输入手机号码" validate="{required:true,rangelength:[11,11],digits:true}">
					    <span class="help-inline">11位手机号</span>
				    </div>
			    </div>

			    <div class="control-group">
				    <label class="control-label" for="captchaCode">验证码</label>
				    <div class="controls">
					    <input type="text" name="captchaCode" id="captchaCode" placeholder="请输入验证码" validate="{remote:{type:'post',url:'validateCaptcha.action', data:{'captchaCode':function(){return $('#captchaCode').val();}}}}">
					    <spam class="help-inline"></spam>
                        <span class="help-inline">
					    	<img class="captchaImg" src="captcha.action"/>看不清楚? <a href="#" class="changeCaptchaLink">换一张</a>
                        </span>
                    </div>
			    </div>
			    <div class="control-group">
				    <div class="controls agreement">
					    <label class="checkbox">
					    	<input type="checkbox" id="agreement" name="agreement" validate="{required:true,messages:{required:'请同意我们的服务条款'}}"> 我已经看过并同意《咨拍车汽车网服务条款》
					    </label>
					    <label class="checkbox">
					    	<a href="#"> 忘记密码 </a>
					    </label>
				    </div>
				</div>

			    <div class="control-group">
                    <div class="controls buttons">
                        <button class="btn btn-primary">  立即注册  </button>
                        <span class="inline-help">已有账号？直接<a href="#" url="user">登录</a></span>
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
<script type="text/javascript" src="js/captcha.js"></script>

</html>