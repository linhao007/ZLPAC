<%--
  Created by IntelliJ IDEA.
  User: yifan
  Date: 14-11-10
  Time: 上午9:49
  To change this template use File | Settings | File Templates.
--%>
<%@taglib prefix="s" uri="/struts-tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head lang="zh">
    <meta charset="UTF-8" content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <title>Automobile Auction</title>
    <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="../css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
    <link href="../css/bootstrap-ie6.min.css" rel="stylesheet" type="text/css" />
    <link href="../css/ie.css" rel="stylesheet" type="text/css" />

    <link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="../css/font-awesome-ie7.min.css" rel="stylesheet" type="text/css" />

    <link href="../css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
    <link href="../css/dataTables.bootstrap.css" rel="stylesheet" type="text/css" />

    <link href="../css/profile.css" rel="stylesheet" type="text/css"/>
    <link href="../css/userIndex.css" rel="stylesheet" type="text/css" />
    <link href="../css/common.css" rel="stylesheet" type="text/css"/>
    <link href="../css/users.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
            <div claas="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="nav-first"><a href="#"><i class="icon-home nav-right"></i>咨立拍汽车拍卖行</a></li>
                    <li><a class="currentDate"></a></li>
                </ul>

                <ul class="nav right-float">
                    <li class="quit" url="logout"><a href="#" class="nav-first user">[ 退出 ]</a></li>
                </ul>

                <span class="welcome">您好，管理员: <span id="user"><s:property value="account.username"/></span></span>

                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</div>

<%--Content start--%>
<div class="container">
<div class="row-fluid" id="directContent">
    <div class="row-fluid">
        <div class="span3 navigate">
            <div class="row-fluid">
                <div class="box-inner">
                    <div class="box-header well">
                        <span><i class="icon-user"></i> 用户管理</span>
                    </div>
                    <div class="box-content">
                        <ul>
                            <li url="/admin/userList.action"><a href="#">账户列表</a></li>
                            <li url="/admin/tryUserAdd.action"><a href="#">添加用户</a></li>
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
                            <li url="/profile.action?profile.id=<s:property value='account.id'/>"><a href="#">帐户信息</a></li>
                            <li url="/tryUpdatePassword.action?account.id=<s:property value='account.id'/>"><a href=>帐户安全</a></li>
                            <li url="/tokenManage.action?account.id=<s:property value='account.id'/>"><a href=>帐户管理</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row-fluid">
                <div class="box-inner">
                    <div class="box-header well">
                        <span><i class="icon-user"></i> 车辆管理</span>
                    </div>
                    <div class="box-content">
                        <ul>
                            <li url="automobiles.action"><a href="#">车辆列表</a></li>
                            <li url="tryAutomobileAdd.action"><a href="#">添加车辆</a></li>
                            <li url="showAllSuccessfulBids.action"><a href="#">中标信息</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="span9 navigate" id="right"></div>
    </div>
</div>
</div>

<script type="text/javascript" src="../js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="../js/bootstrap.min.js"></script>
<script src="../js/bootstrap-ie.js" type="text/javascript"></script>



<!--[if lt IE 9]>
<script src="../js/respond.min.js" type="text/javascript"></script>
<script src="../js/html5shiv.js" type="text/javascript"></script>
<![endif]-->
<script src="../js/leftSideNavigateBar.js" type="text/javascript"></script>
<script src="../js/adjustParentFrame.js" type="text/javascript"></script>
<script type="text/javascript">
    var username = "<s:property value='#session.username'/>";
</script>
<script src="../js/topNavigateBar.js" type="text/javascript"></script>
<script src="../js/jquery.metadata.js" type="text/javascript"></script>
<script src="../js/jquery.validate.js" type="text/javascript"></script>
<script src="../js/jquery.messages.zh.js" type="text/javascript"></script>
<script src="../js/jquery.form.js" type="text/javascript"></script>
<script src="../js/formComponent.js" type="text/javascript"></script>
<script src="../js/adminIndex.js" type="text/javascript"></script>

</body>
</html>