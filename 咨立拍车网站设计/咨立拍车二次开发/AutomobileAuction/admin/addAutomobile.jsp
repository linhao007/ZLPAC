<%--
  Created by IntelliJ IDEA.
  User: yifan
  Date: 14-11-13
  Time: 上午11:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@taglib prefix="s" uri="/struts-tags" %>
<html>
<head>
    <title></title>

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
<%--拍卖车辆、起拍价、棋牌时间--%>

<div class="row-fluid automobiles">
    <div class="box-inner">
        <div class="box-header well">
            <span><i class="icon-user"></i> 添加车辆</span>
        </div>
        <div class="box-content">
            <form class="form-horizontal" action="automobileAdd">
                <input type="hidden" name="automobile.id" value="<s:property value='automobile.id'/>">
                <div class="control-group">
                    <label class="control-label" for="carBrand">车辆型号</label>
                    <div class="controls">
                        <input type="text" id="carBrand" name="automobile.carBrand" placeholder="车辆型号" validate="{required:true}" value="<s:property value='automobile.carBrand'/>">
                        <span class="help-inline">请输入车辆型号</span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="startPrice">起拍价</label>
                    <div class="controls">
                        <input type="text" id="startPrice" name="automobile.startPrice" placeholder="起拍价" validate="{required:true}" value="<s:property value='automobile.startPrice'/>">
                        <span class="help-inline">请输入起拍价</span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="rejectPrice">保留价</label>
                    <div class="controls">
                        <input type="text" id="rejectPrice" name="automobile.rejectPrice" placeholder="保留价" validate="{required:true}" value="<s:property value='automobile.rejectPrice'/>">
                        <span class="help-inline">请输入保留价</span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="parkPos">停车地</label>
                    <div class="controls">
                        <input type="text" id="parkPos" name="automobile.parkPos" placeholder="起拍价" validate="{required:true}" value="<s:property value='automobile.parkPos'/>">
                        <span class="help-inline">请输入停车地</span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="promisePrice">车辆承包金</label>
                    <div class="controls">
                        <input type="text" id="promisePrice" name="automobile.promisePrice" placeholder="起拍价" validate="{required:true}" value="<s:property value='automobile.promisePrice'/>">
                        <span class="help-inline">请输入车辆承包金</span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="transferPrice">过户保证金</label>
                    <div class="controls">
                        <input type="text" id="transferPrice" name="automobile.transferPrice" placeholder="起拍价" validate="{required:true}" value="<s:property value='automobile.transferPrice'/>">
                        <span class="help-inline">请输入过户保证金</span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="startDate">起拍时间</label>
                    <div class="controls input-append date form_datetime today" data-date="1979-09-16T05:25:07Z" data-date-format="yyyy MM dd - p HH:ii" data-link-field="startDate">
                        <input size="16" type="text" value="<s:date name='automobile.startDate' format='yyyy年MM月dd日 HH时mm分'/>" readonly>
                        <span class="add-on"><i class="icon-remove"></i></span>
                        <span class="add-on"><i class="icon-th"></i></span>
                    </div>
                    <input type="hidden" name="automobile.startDate" id="startDate" value="<s:date name='automobile.startDate'/>"/><br/>
                </div>

                <div class="control-group">
                    <label class="control-label" for="endDate">结束时间</label>
                    <div class="controls input-append date form_datetime today" data-date="1979-09-16T05:25:07Z" data-date-format="yyyy MM dd - p HH:ii" data-link-field="endDate">
                        <input size="16" type="text" value="<s:date name='automobile.endDate' format='yyyy年MM月dd日 HH时mm分'/>" readonly>
                        <span class="add-on"><i class="icon-remove"></i></span>
                        <span class="add-on"><i class="icon-th"></i></span>
                    </div>
                    <input type="hidden" name="automobile.endDate" id="endDate" value="<s:date name='automobile.endDate'/>"/><br/>
                </div>

                <div class="control-group">
                    <label class="control-label" for="firstRegisterDate">初次登记日期</label>
                    <div class="controls input-append date form_datetime ago" data-date="1979-09-16T05:25:07Z" data-date-format="yyyy MM dd - p HH:ii" data-link-field="firstRegisterDate">
                        <input size="16" type="text" value="<s:date name='automobile.firstRegisterDate' format='yyyy年MM月dd日 HH时mm分'/>" readonly>
                        <span class="add-on"><i class="icon-remove"></i></span>
                        <span class="add-on"><i class="icon-th"></i></span>
                    </div>
                    <input type="hidden" name="automobile.firstRegisterDate" id="firstRegisterDate" value="<s:date name='automobile.firstRegisterDate'/>"/><br/>
                </div>

                <div class="control-group">
                    <label class="control-label" for="passportDate">发证日期</label>
                    <div class="controls input-append date form_datetime ago" data-date="1979-09-16T05:25:07Z" data-date-format="yyyy MM dd - p HH:ii" data-link-field="passportDate">
                        <input size="16" type="text" value="<s:date name='automobile.passportDate' format='yyyy年MM月dd日 HH时mm分'/>" readonly>
                        <span class="add-on"><i class="icon-remove"></i></span>
                        <span class="add-on"><i class="icon-th"></i></span>
                    </div>
                    <input type="hidden" name="automobile.passportDate" id="passportDate" value="<s:date name='automobile.passportDate'/>"/><br/>
                </div>

                <div class="control-group">
                    <label class="control-label" for="carMall">有无证书</label>
                    <div class="controls">
                        <select id="passport" name="automobile.passport" validate="{required:true}">
                            <s:iterator value="yesNoOptions" id="opt">
                                <option value="<s:property value='#opt.value'/>" <s:if test="automobile.passport==#opt">selected="selected"</s:if>><s:property value="#opt.text"/></option>
                            </s:iterator>
                        </select>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="mortgage">有无抵押</label>
                    <div class="controls">
                        <select id="mortgage" name="automobile.mortgage" validate="{required:true}">
                            <s:iterator value="yesNoOptions" id="opt">
                                <option value="<s:property value='#opt.value'/>" <s:if test="automobile.mortgage==#opt">selected="selected"</s:if>><s:property value="#opt.text"/></option>
                            </s:iterator>
                        </select>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="carDestroy">车架号有无受损</label>
                    <div class="controls">
                        <select id="carDestroy" name="automobile.carDestroy" validate="{required:true}">
                            <s:iterator value="yesNoOptions" id="opt">
                                <option value="<s:property value='#opt.value'/>" <s:if test="automobile.carDestroy==#opt">selected="selected"</s:if>><s:property value="#opt.text"/></option>
                            </s:iterator>
                        </select>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="carMall">有无拆检</label>
                    <div class="controls">
                        <select id="checked" name="automobile.checked" validate="{required:true}">
                            <s:iterator value="yesNoOptions" id="opt">
                                <option value="<s:property value='#opt.value'/>" <s:if test="automobile.checked==#opt">selected="selected"</s:if>><s:property value="#opt.text"/></option>
                            </s:iterator>
                        </select>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="carMall">有无违章</label>
                    <div class="controls">
                        <select id="breakRule" name="automobile.breakRule" validate="{required:true}">
                            <s:iterator value="yesNoOptions" id="opt">
                                <option value="<s:property value='#opt.value'/>" <s:if test="automobile.breakRule==#opt">selected="selected"</s:if>><s:property value="#opt.text"/></option>
                            </s:iterator>
                        </select>
                    </div>
                </div>



                <div class="control-group">
                    <label class="control-label" for="carMall">拍卖大厅</label>
                    <div class="controls">
                        <select id="carMall" name="automobile.carMall" validate="{required:true}">
                            <s:iterator value="carMalls" id="carMall">
                                <option value="<s:property value='#carMall.value'/>" <s:if test="automobile.carMall==#carMall">selected="selected"</s:if>><s:property value="#carMall.text"/></option>
                            </s:iterator>
                        </select>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="auctionFashion">拍卖方式</label>
                    <div class="controls">
                        <select id="auctionFashion" name="automobile.auctionFashion" validate="{required:true}">

                            <s:iterator value="auctionFashions" id="auctionFashion">
                                <option value="<s:property value='#auctionFashion.value'/>" <s:if test="automobile.auctionFashion==#auctionFashion">selected="selected"</s:if>><s:property value="#auctionFashion.text"/></option>
                            </s:iterator>
                        </select>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="salesType">拍卖类型</label>
                    <div class="controls">
                        <input type="text" id="salesType" name="automobile.saleType" placeholder="起拍价" validate="{required:true}" value="<s:property value='automobile.saleType'/>">
                        <span class="help-inline">请输入拍卖类型</span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="personStatus">人伤情况</label>
                    <div class="controls">
                        <input type="text" id="personStatus" name="automobile.personStatus" placeholder="起拍价" validate="{required:true}" value="<s:property value='automobile.personStatus'/>">
                        <span class="help-inline">请输入停车地</span>
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="autoMobileDesc">车辆备注</label>
                    <div class="controls">
                        <textarea type="text" id="autoMobileDesc" name="automobile.autoMobileDesc" placeholder="起拍价" validate="{required:true}"><s:property value='automobile.personStatus'/></textarea>
                        <span class="help-inline">补充信息</span>
                    </div>
                </div>

                <div class="control-group" id="uploadPic">
                    <input type="hidden" id="imagePathes" name="automobile.imagePathes" value="<s:property value='automobile.imagePathes'/>"/>
                    <input type="hidden" id="contentHTML" name="automobile.contentHTML" value="<s:property value='automobile.contentHTML'/>">
                    <script id="container" name="content" type="text/plain"></script>
                </div>

                <div class="control-group">
                    <div class="controls buttons">
                        <a class="btn btn-primary" url="automobileAdd.action" href="#">  提  交  </a>
                    </div>
                </div>

            </form>
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

<script type="text/javascript" src="../js/bootstrap-datetimepicker.min.js" charset="UTF-8"></script>
<script type="text/javascript" src="../js/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
<script src="../js/jquery.metadata.js" type="text/javascript"></script>
<script src="../js/jquery.validate.js" type="text/javascript"></script>
<script src="../js/jquery.messages.zh.js" type="text/javascript"></script>
<script src="../js/jquery.form.js" type="text/javascript"></script>
<script src="../js/formComponent.js" type="text/javascript"></script>

<script src="../js/escapeString.js" type="text/javascript"></script>
<!-- 加载编辑器的容器 -->

<!-- 配置文件 -->
<script type="text/javascript" src="../js/ueditor.config.js"></script>
<!-- 编辑器源码文件 -->
<script type="text/javascript" src="../js/ueditor.all.js"></script>
<!-- 实例化编辑器 -->


<script type="text/javascript">
    $(document).ready(function(){
        var tenYearsAgo = new Date();
        tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 1);

        $('.form_datetime.today').datetimepicker({
            language:  'zh-CN',
            startDate: new Date(),
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1
        });

        $(".form_datetime.ago").datetimepicker({
            language:  'zh-CN',
            startDate: tenYearsAgo,
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1
        });

        var ue = UE.getEditor('container');
        ue.addListener("ready", function () {
            var originalHTML = '<s:property value="automobile.contentHTML"/>';
            originalHTML = escape2Html(originalHTML);
            ue.setContent(originalHTML);
        });


        $(".btn[url]").on('click',function(e){
            var url = $(this).attr("url");
            var $form = $(this).closest("form");
            var $parentContainer = $(this).closest("div.automobiles");
            var imageArray=[];


            $(ue.getContent()).find("img").each(function(index,elem){
                imageArray[index] = $(elem).attr("src");
            });

            $("#imagePathes").val(JSON.stringify(imageArray));
            $("#contentHTML").val(ue.getContent());

            $.ajax({
                "type":"post",
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