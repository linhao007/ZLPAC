<%@ taglib prefix="s" uri="/struts-tags" %>
<%--
  Created by IntelliJ IDEA.
  User: think
  Date: 2014/11/9
  Time: 11:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<div class="row-fluid" id="profile">
    <div class="box-inner">
        <div class="box-header well">
            <span><i class="icon-user"></i> 密码中心</span>
        </div>
        <div class="box-content profile">
            <form class="form-horizontal" url="/updatePassword.action">
                <input type="hidden" name="accountVO.id" value="<s:property value='account.id'/>"/>
                <div class="control-group">
                    <label class="control-label">用户名</label>
                    <div class="controls">
                        <span name="account.username"><s:property value="account.username"/> </span>
                        <input type="hidden" name="accountVO.username" value='<s:property value="account.username"/>'/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">原密码</label>
                    <div class="controls">
                        <input id="password" name="accountVO.password" type="password" validate="{required:true,minlength:5,remote:{type:'post',url:'/validatePassword.action',data:{'account.password':function(){return $('#password').val();}}},messages:{remote:'原密码不正确'}}"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">设置新的密码</label>
                    <div class="controls">
                        <input id="newPassword" name="newPassword" type="password"  validate="{required:true,minlength:5}"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">重复新的密码</label>
                    <div class="controls">
                        <input name="repassword" type="password" validate="{equalTo:'#newPassword'}"/>
                    </div>
                </div>

                <div class="control-group">
                    <div class="controls buttons">
                        <button class="btn btn-primary" type="submit">  更 新  </button>
                    </div>
                </div>

            </form>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function(){
        FormComponent.ajaxInit();
    });
</script>