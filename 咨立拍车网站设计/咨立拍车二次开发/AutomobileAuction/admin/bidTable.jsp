<%--
  Created by IntelliJ IDEA.
  User: yifan
  Date: 14-11-13
  Time: 下午1:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<table id="bids" class="table table-striped table-bordered" cellspacing="0" width="100%">
    <thead>
    <tr>
        <th>车型</th>
        <th>中标人</th>
        <th>中标金额</th>
        <th>中标时间</th>
    </tr>
    </thead>
    <tbody>
        <s:iterator value="records" id="record">
            <tr>
                <td><s:property value="#record.automobile.carBrand"/></td>
                <td><s:property value="#record.account.username"/></td>
                <td><s:property value="#record.offer"/> </td>
                <td><s:date name="#record.offerDate" format="yyyy年MM月dd日 hh点mm分"/></td>
            </tr>
        </s:iterator>
    </tbody>
</table>


<script src="js/bindButton.js" type="text/javascript"></script>