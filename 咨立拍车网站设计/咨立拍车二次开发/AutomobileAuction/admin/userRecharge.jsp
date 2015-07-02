<%@ taglib prefix="s" uri="/struts-tags" %>
<%--
  Created by IntelliJ IDEA.
  User: yifan
  Date: 14-11-15
  Time: 上午8:58
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
            <form class="form-horizontal">
                <input type="hidden" name="managedAccount.id" value="<s:property value="managedAccount.id"/>">
                <s:if test="#request.errorMessage!=null">
                    <div class="control-group">
                        <div class="alert">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong>错误</strong> <s:property value='#request.errorMessage' />
                        </div>
                    </div>
                </s:if>
                <div class="control-group">
                    <label class="control-label">用户名</label>
                    <div class="controls">
                        <span><s:property value="managedAccount.username"/></span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">当前账户余额</label>
                    <div class="controls">
                        <span>
                            <s:if test="managedAccount.leftAmount==null">0</s:if>
                            <s:else><s:property value="managedAccount.leftAmount"/></s:else>
                        </span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="rechargeCost">充值金额</label>
                    <div class="controls">
                        <input type="text" id="rechargeCost" name="rechargeCost" placeholder="充值金额" validate="{required:true,minlength:5}">
                        <span class="help-inline">请输入正数</span>
                    </div>
                </div>

                <div class="control-group">
                    <div class="control-group">
                        <div class="controls buttons">
                            <a class="btn btn-primary" url="/admin/userRecharge.action" href="#">  充  值  </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<script src="../js/jquery.metadata.js" type="text/javascript"></script>
<script src="../js/jquery.validate.js" type="text/javascript"></script>
<script src="../js/jquery.messages.zh.js" type="text/javascript"></script>
<script src="../js/jquery.form.js" type="text/javascript"></script>
<script>
    $(document).ready(function(){
        $(".btn[url]").on('click',function(e){
            var url = $(this).attr("url");
            var $form = $(this).closest("form");

            $.ajax({
                "type":"post",
                "url":url,
                "data":$form.formSerialize(),
                "success":function(response){
                    $("#right").empty()
                            .html(response);
                }
            });

            e.preventDefault();
        });
    })
</script>

</body>
</html>