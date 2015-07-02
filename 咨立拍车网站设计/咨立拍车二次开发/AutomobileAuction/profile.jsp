<%@page pageEncoding="UTF-8" %>
<%@taglib prefix="s" uri="/struts-tags" %>

<div class="row-fluid" id="profile">
    <div class="box-inner">
        <div class="box-header well">
            <span><i class="icon-user"></i>账户中心</span>
        </div>
        <div class="box-content profile">
            <form class="form-horizontal" url="/updateProfile.action">
                <input type="hidden" name="profile.id" value="<s:property value='profile.id'/>"/>
                <div class="control-group">
                    <label class="control-label">用户名</label>
                    <div class="controls">
                        <span><s:property value="accountVO.username"/></span>
                        <input type="hidden" name="accountVO.id" value="<s:property value='profile.id'/>"/>
                        <input type="hidden" name="accountVO.username" value="<s:property value='accountVO.username'/>"/>
                        <input type="hidden" name="accountVO.password" value="<s:property value='accountVO.password'/>"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">昵称</label>
                    <div class="controls">
                        <input name="accountVO.nickname" type="text" value='<s:property value="accountVO.nickname"/>' validate="{required:true,minlength:5}"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">真实姓名</label>
                    <div class="controls">
                        <input name="profile.realname" type="text" value='<s:property value="profile.realname"/>' validate="{required:true,minlength:5}"/>
                    </div>
                </div>

                <%--添加性别失败--%>
                <div class="control-group">
                    <label class="control-label">手机号</label>
                    <div class="controls">
                        <input name="accountVO.phoneNumber" type="text" value='<s:property value="accountVO.phoneNumber"/>' validate="{required:true,rangelength:[11,11],digits:true}"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">邮箱地址</label>
                    <div class="controls">
                        <input name="profile.email" type="text" value='<s:property value="profile.email"/>' validate="{email:true}"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">联系地址</label>
                    <div class="controls">
                        <input name="profile.address" type="text" value='<s:property value="profile.address"/>'/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">身份证号</label>
                    <div class="controls">
                        <input name="profile.idCardNumber" type="text" value='<s:property value="profile.idCardNumber"/>' validate="{rangelength:[18,18],messages:{rangelength:'请输入正确的身份证号'}}"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">联系电话</label>
                    <div class="controls">
                        <input name="profile.otherContact" type="text" value='<s:property value="profile.otherContact"/>' validate="{digits:true}"/>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label">个人爱好</label>
                    <div class="controls">
                        <textarea name="profile.hobby"><s:property value="profile.hobby"/></textarea>
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