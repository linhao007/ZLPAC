<%--
  Created by IntelliJ IDEA.
  User: yifan
  Date: 14-11-13
  Time: 下午1:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<table id="automobiles" class="table table-striped table-bordered" cellspacing="0" width="100%">
    <thead>
    <tr>
        <th>车型</th>
        <th>状态</th>
        <th>起拍价</th>
        <th>拍卖大厅</th>
        <th>拍卖方式</th>
        <th>开拍时间</th>
        <th>操作</th>
    </tr>
    </thead>
    <tbody>
        <s:iterator value="automobileVOs" id="automobile">
            <tr>
                <td><s:property value="#automobile.carBrand"/></td>
                <td><s:property value="#automobile.status"/></td>
                <td><s:property value="#automobile.startPrice"/></td>
                <td><s:property value="#automobile.carMall.text"/> </td>
                <td><s:property value="#automobile.auctionFashion.text"/></td>
                <td><s:date name="#automobile.startDate" format="yyyy年MM月dd日 hh点mm分"/></td>
                <td>
                    <a class="btn btn-info" href="#" url="tryUpdateAutomobile.action?automobile.id=<s:property value='#automobile.id'/>">更新</a>
                    <a class="btn btn-danger" href="#" ajax="true" url="automobileDelete.action?automobile.id=<s:property value="#automobile.id"/>">删除</a>
                </td>
            </tr>
        </s:iterator>
    </tbody>
</table>


<script src="../js/bindButton.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function(){
        userButton.initClickHandler("automobiles",".btn[url][ajax]","automobileList.action");
        $(".btn.btn-info").on("click",function(e){
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