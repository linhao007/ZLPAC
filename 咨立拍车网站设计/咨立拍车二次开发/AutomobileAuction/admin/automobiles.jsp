
<%--
  Created by IntelliJ IDEA.
  User: yifan
  Date: 14-11-10
  Time: 下午1:26
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<div class="row-fluid users">
    <div class="box-inner">
        <div class="box-header well">
            <span><i class="icon-user"></i>车辆中心</span>
        </div>
        <div class="box-content">
            <s:include value="automobileTable.jsp" />
        </div>
    </div>
</div>

<script src="../js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="../js/bootstrap.min.js" type="text/javascript"></script>
<script src="../js/bootstrap-ie.js" type="text/javascript"></script>

<script src="../js/jquery.dataTables.js" type="text/javascript"></script>
<script src="../js/dataTable.zh.js" type="text/javascript"></script>
<script src="../js/dataTables.bootstrap.js" type="text/javascript"></script>
<script src="../js/tableComponent.js" type="text/javascript"></script>
<script src="../js/bindButton.js" type="text/javascript"></script>

<script type="text/javascript">

    $(document).ready(function(){
        TableComponent.init("automobiles");
    });
</script>
</body>
</html>