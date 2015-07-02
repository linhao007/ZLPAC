<%@ taglib prefix="s" uri="/struts-tags" %>
<%--
  Created by IntelliJ IDEA.
  User: yifan
  Date: 14-11-10
  Time: 下午1:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
<div class="row-fluid users">
    <div class="box-inner">
        <div class="box-header well">
            <span><i class="icon-user"></i>用户中心</span>
        </div>
        <div class="box-content">
            <s:include value="userTable.jsp" />
        </div>
    </div>
</div>
<script src="../js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="../js/bootstrap.min.js" type="text/javascript"></script>
<script src="../js/bootstrap-ie.js" type="text/javascript"></script>
</body>
</html>