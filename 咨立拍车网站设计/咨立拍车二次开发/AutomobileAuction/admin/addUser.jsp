<%--
  Created by IntelliJ IDEA.
  User: yifan
  Date: 14-11-11
  Time: 下午8:13
  To change this template use File | Settings | File Templates.
--%>
<%@taglib prefix="s" uri="/struts-tags" %>
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
                        <input type="text" id="username" name="managedAccount.username" placeholder="用户名" validate="{required:true,minlength:5,remote:{type:'post',url:'validateUsernameAvailable.action', data:{'managedAccount.username':function(){return $('#username').val();}}},messages:{remote:'用户名已存在'}}">
                        <span class="help-inline">用户名至少5位</span>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="password">密码</label>
                    <div class="controls">
                        <input type="password" id="password" name="managedAccount.password" placeholder="密码" validate="{required:true,minlength:5}">
                        <span class="help-inline">密码长度至少5位</span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="nickname">昵称</label>
                    <div class="controls">
                        <input type="text" id="nickname" name="managedAccount.nickname" placeholder="密码" validate="{required:true,minlength:5}">
                        <span class="help-inline">密码长度至少5位</span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="role">角色</label>
                    <div class="controls">
                        <select id="role" name="managedAccount.role" validate="{required:true}">
                            <s:iterator value="roles" id="role">
                                <option value="<s:property value='#role.value'/>"><s:property value="#role.text"/></option>
                            </s:iterator>
                        </select>
                    </div>
                </div>

                <div class="control-group">
                    <div class="control-group">
                        <div class="controls buttons">
                            <a class="btn btn-primary" url="/admin/userAdd.action" href="#">  添  加  </a>
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
<script src="../js/formComponent.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function(){
        $(".btn[url]").on('click',function(e){
            var url = $(this).attr("url");
            var $form = $(this).closest("form");
            var $parentContainer = $(this).closest("div.users");
            $.ajax({
                "url":url,
                "data":$form.formSerialize(),
                "success":function(response){
                    $parentContainer.empty()
                                    .html(response);
                }
            });

            e.preventDefault();
        });

        FormComponent.init();
    });
</script>
</body>
</html>