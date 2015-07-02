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
</head>
<body>
<div class="wrapper">
    <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container">
                <div claas="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="nav-first"><a href="#"><i class="icon-home nav-right"></i>咨立拍汽车拍卖行</a></li>
                        <li><a class="currentDate"></a></li>
                    </ul>

                    <ul class="nav right-float">

                        <li <s:if test="#session.account==null">class="nav-first"</s:if> <s:else>class="nav-first hidden"</s:else>url="user"><a href="#" class="nav-first user">[ 登录 ]</a></li>
                        <li <s:if test="#session.account==null">class="nav-first"</s:if> <s:else>class="nav-first hidden"</s:else>url="register"><a href="#" class="user">[ 注册 ]</a></li>
                        <li <s:if test="#session.account==null">class="quit hidden"</s:if> <s:else>class="quit"</s:else> url="logout"><a href="#" class="nav-first user">[ 退出 ]</a></li>
                        <li class="nav-first"><a href="#">设为首页</a></li>
                        <li class="nav-first"><a href="#">收藏本站</a></li>
                    </ul>

                    <span <s:if test="#session.account!=null">class="welcome"</s:if> <s:else>class="welcome hidden"</s:else>> 您好，<span id="user"><s:property value="#session.account.username"/></span>欢迎您光临咨拍车汽车网</span>


                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="container content">
        <div class="row-fluid float-feft height-90">
            <div class="span8">
                <a href="#"><img src="img/company/zili.png" class="height-90"></a>
            </div>
            <div class="span4 brower fill-parent">
                <ul class="nav">
                    <li>
                        <a href="#"><img src="img/Opera.gif"/><br/>Opera</a>
                    </li>
                    <li>
                        <a href="#"><img src="img/Ie.gif"/><br/>IE7+</a>
                    </li>
                    <li>
                        <a href="#"><img src="img/Firefox.gif"/><br/>Firefox</a>
                    </li>
                    <li>
                        <a href="#"><img src="img/Chrome.gif"/><br/>Opera</a>
                    </li>
                    <li>
                        <a href="#"><img src="img/Safari.gif"/><br/>Safari</a>
                    </li>
                </ul>
                <div class="clearfix"></div>
                <p>建议您使用图示浏览器</p>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>

    <div class="row-fluid">
        <div class="container">
            <ul class="nav nav-tabs nav-frame">
                <li class="active" url="index"><a href="#" data-toggle="tab">首  页</a></li>
                <li url="sales"><a href="#" data-toggle="tab">网络拍卖</a></li>
                <li url="user"><a href="#" data-toggle="tab">会员中心</a></li>
                <li url="auction"><a href="#" data-toggle="tab">拍卖预告</a></li>
                <li url="help"><a href="#" data-toggle="tab">帮助中心</a></li>
                <li url="latest"><a href="#" data-toggle="tab">业界风向</a></li>
            </ul>
        </div>
    </div>

    <div class="container">
        <div class="row-fluid rules">
            <div class="navigate">
                <a>欢迎光临咨立拍汽车拍卖</a>
            </div>
            <ul class="nav">
                <li><a href="#">拍品查看提示</a></li>
                <li><a href="#">免责声明</a></li>
                <li><a href="#">法律声明</a></li>
                <li><a href="#">注册流程</a></li>
                <li><a href="#">竞价指南</a></li>
                <li><a href="#">拍卖规则</a></li>
            </ul>
        </div>
    </div>

    <div class="container">
        <iframe id="content" src="first.action" width="100%" border="0" scrolling="no" frameborder="0"></iframe>
    </div>

    <div class="row-fluid footer-page">
        <div class="container">
            <div class="middle">
                <ul class="nav">
                    <li><a href="#">| 关于咨立拍 </a></li>
                    <li><a href="#">| 招贤纳士 </a></li>
                    <li><a href="#">| 违章查询 </a></li>
                    <li><a href="#">| 免责声明 </a></li>
                    <li><a href="#">| 公司帐号 </a></li>
                    <li><a href="#">| 联系咨立拍 </a></li>
                </ul>
            </div>
            <div class="clearfix"></div>

            <div class="middle">
                <p>南昌咨立拍汽车网络科技服务有限公司 版权所有 赣ICP备08039494号-1</p>
            </div>
        </div>
    </div>
</div>
<script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/bootstrap-ie.js" type="text/javascript"></script>
<!--[if lt IE 9]>
<script src="js/html5shiv.js" type="text/javascript"></script>
<![endif]-->
<script type="text/javascript" src="js/dateUtil.js"></script>
<script type="text/javascript" src="js/navigateData.js"></script>
<script type="text/javascript" src="js/mainFrame.js"></script>
<script type="text/javascript" src="js/eventHandler.js"></script>

</body>
</html>