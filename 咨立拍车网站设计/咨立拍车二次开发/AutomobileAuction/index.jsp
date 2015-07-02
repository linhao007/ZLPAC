<%@ taglib prefix="s" uri="/struts-tags" %>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="zh">
    <meta charset="UTF-8" content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <title>Automobile Auction</title>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap-ie6.min.css" rel="stylesheet" type="text/css" />
    <link href="css/ie.css" rel="stylesheet" type="text/css" />
    <link href="css/common.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="row-fluid">
    <div class="row-fluid">
        <div class="span6">
            <div id="myCarousel" class="carousel slide">
                <div class="carousel-inner">
                  <div class="item">
                    <img src="img/a.jpg" alt="">
                  </div>
                  <div class="item">
                    <img src="img/b.jpg" alt="">
                  </div>
                  <div class="item active">
                    <img src="img/c.jpg" alt="">
                  </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
              </div>
        </div>
        <div class="span6">

            <ul id="sale" class="nav nav-tabs">
                <s:iterator value="auctionAutomobilesByTime.keySet()" id="key" status="status">
                    <li <s:if test="#status.index==0">class="active"</s:if>><a href="#f<s:date name='key' format='MMdd'/>" data-toggle="tab"><s:date name="#key" format="MM月dd日"/></a></li>
                </s:iterator>
            </ul>
            <div id="saleContent" class="tab-content">

              <s:iterator value="auctionAutomobilesByTime" id="entry" status="status">
                <div class="tab-pane fade <s:if test='#status.index==0'>active</s:if> in" id="f<s:date name='#entry.key' format='MMdd'/>">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <td>拍卖车辆</td>
                                <td>起拍价</td>
                                <td>起拍时间</td>
                            </tr>
                        </thead>
                        <tbody>
                            <s:iterator value="#entry.value" id="auto">
                                <tr>
                                    <td><a href="#" url="detail" href="#" paramId="?automobile.id=<s:property value='#auto.id'/>" title="<s:property value='#auto.carBrand'/>"><s:property value="#auto.carBrand"/></a></td>
                                    <td><s:property value="#auto.startPrice"/> </td>
                                    <td><s:date name="#auto.startDate" format="hh:mm:ss"/></td>
                                </tr>
                            </s:iterator>
                        </tbody>
                    </table>
                </div>
              </s:iterator>
            </div>
        </div>
    </div>

    <div class="row-fluid">
        <ul id="myTab" class="nav nav-tabs">
            <s:iterator value="auctionAutomobilesByType.keySet()" id="key" status="status">
                <li <s:if test="#status.index==0">class="active"</s:if>><a href="#f<s:property value='#key.value'/>" data-toggle="tab"><s:property value="#key.text"/></a></li>
            </s:iterator>
        </ul>
        <div id="auction" class="tab-content">

            <s:iterator value="auctionAutomobilesByType" id="entry" status="status">
                <div class="tab-pane fade <s:if test='#status.index==0'>active</s:if> in" id="f<s:property value='#entry.key.value'/>">
                    <table class="pmlisttd">
                      <tbody>
                        <s:iterator value="#entry.value" id="auto">
                            <tr>
                              <td class="imglink">
                                <a url="detail" href="#" paramId="?automobile.id=<s:property value='#auto.id'/>"><img id="i<s:property value='#auto.id'/>" src="<s:property value="#auto.images[0]"/>"/></a>
                              </td>
                              <td width="230">
                                <div class="chexing"><b>车&#12288;型</b>：<a url="detail" href="#" paramId="?automobile.id=<s:property value='#auto.id'/>" title="<s:property value='#auto.carBrand'/>"><s:property value="#auto.carBrand"/></a></div>
                                  <b>停车地</b>：<s:property value="#auto.parkPos"/> <br>
                                  <b>起拍价</b>：<s:property value="#auto.startPrice"/><br>
                                  <b>保留价</b>：<s:if test="#auto.rejectPrice!=null && #auto.rejectPrice>0">有 </s:if><s:else>无</s:else>
                              </td>
                              <td width="200" align="center" class="z_times">
                                <b>距拍卖开始时间</b>
                                  <div class="miao-showTime">
                                    <div class="miao-timeBack">
                                        <div class="remainTime">
                                          <span class="endTime">
                                            <s:date name="#auto.startDate" format='yyyy/MM/dd HH:mm:ss'/>
                                          </span>
                                          <span class="day"></span>
                                          <span class="hour"></span>
                                          <span class="min"></span>
                                          <span class="sec"></span>
                                        </div>
                                    </div>
                                    <s:if test='#auto.auctionStatus.value=="Finished"'><div class="message">拍卖已结束</div></s:if>
                                  </div>
                              </td>
                            </tr>
                        </s:iterator>
                      </tbody>
                    </table>
                </div>
            </s:iterator>
        </div>
    </div>
<div class="clearfix"></div>
</div>

</body>
<script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/bootstrap-ie.js" type="text/javascript"></script>
<!--[if lt IE 9]>
<script src="js/respond.min.js" type="text/javascript"></script>
<script src="js/html5shiv.js" type="text/javascript"></script>
<![endif]-->
<script type="text/javascript" src="js/dateUtil.js"></script>
<script type="text/javascript" src="js/app.js"></script>
<script type="text/javascript" src="js/navigateData.js"></script>
<script type="text/javascript" src="js/eventHandler.js"></script>
<script type="text/javascript" src="js/timeCount.js"></script>
<script type="text/javascript">
$(document).ready(function(){
    initTime(".miao-showTime",false);
});
</script>
</html>