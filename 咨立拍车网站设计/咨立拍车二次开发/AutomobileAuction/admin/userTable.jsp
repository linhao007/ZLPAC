<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="s" uri="/struts-tags" %>

<table id="users" class="table table-striped table-bordered" cellspacing="0" width="100%">
    <thead>
    <tr>
        <th>用户名</th>
        <th>昵称</th>
        <th>账户状态</th>
        <th>账户余额</th>
        <th>注册时间</th>
        <th>操作</th>
    </tr>
    </thead>
    <tbody>

<s:iterator value="users" id="user">
    <tr>
        <td><s:property value="#user.username"/></td>
        <td><s:property value="#user.nickname"/></td>
        <td><s:property value="#user.status"/></td>
        <td><s:property value="#user.leftAmount"/></td>
        <td><s:date name="#user.registerDate" format="yyyy年MM月dd日 hh点mm分"/></td>
        <td>
            <s:if test="#user.status == normal">
                <a class="btn btn-info" ajax="false" href="#" url="/admin/tryUserRecharge.action?managedAccount.id=<s:property value='#user.id'/>">充值</a>
                <a class="btn btn-info" ajax="true" href="#" url="/admin/userLock.action?managedAccount.id=<s:property value='#user.id'/>">锁定</a>
                <a class="btn btn-danger" ajax="true" href="#" url="/admin/userDelete.action?managedAccount.id=<s:property value='#user.id'/>">删除</a>
            </s:if>
            <s:if test="#user.status != normal">
                <a class="btn btn-info" href="#" ajax="true" url="/admin/userUnlock.action?managedAccount.id=<s:property value='#user.id'/>">解锁</a>
            </s:if>
        </td>
    </tr>
</s:iterator>
</tbody>
</table>

<script src="../js/jquery.dataTables.js" type="text/javascript"></script>
<script src="../js/dataTable.zh.js" type="text/javascript"></script>
<script src="../js/dataTables.bootstrap.js" type="text/javascript"></script>
<script src="../js/tableComponent.js" type="text/javascript"></script>
<script src="../js/bindButton.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function(){
        TableComponent.init("users");
        userButton.initClickHandler("users",".btn[url][ajax=true]","usersFind.action");
        $(".btn.btn-info[ajax=false]").on("click",function(e){
            var url = $(this).attr("url");
            $.ajax({
                "type":"post",
                "url":url,
                "success":function(response){
                    $("#right").html(response);
                }
            });
        });
    });
</script>