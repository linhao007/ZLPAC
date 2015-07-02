<%@page pageEncoding="UTF-8" language="java" %>
<%@taglib prefix="s" uri="/struts-tags" %>
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
    <link href="css/sales.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="container sales">

       <s:iterator value="automobiles" id="automobile">
           <div class="row-fluid record">
               <div class="span4">
                   <a href="#" url="detail" href="#" paramId="?automobile.id=<s:property value='#automobile.id'/>" title="<s:property value='#auto.carBrand'/>">
                       <img src="<s:property value="#automobile.images[0]"/>"/>
                   </a>
               </div>
               <div class="span8">
                   <div class="row-fluid">
                       <div class="span2">
                           <a href="#" url="detail" href="#" paramId="?automobile.id=<s:property value='#automobile.id'/>" title="<s:property value='#auto.carBrand'/>">
                               <s:property value="#automobile.carBrand"/>
                           </a>
                       </div>
                       <div class="span6">
                           <span>开拍时间：</span>
                           <span><s:date name="#automobile.startDate" format="yyyy年MM月dd日 hh:mm:ss"/></span>
                       </div>
                   </div>
                   <div class="row-fluid">
                       <div class="span12 img-nav">
                           <ul class="nav navbar" id="i<s:property value='#automobile.id'/>">
                               <s:iterator value="#automobile.images" id="image">
                                   <li id="test"><img src="<s:property value="#image"/>"/></li>
                               </s:iterator>
                           </ul>
                       </div>
                   </div>

                   <div class="row-fluid">
                       <b class="count-time-tip">距拍卖开始时间</b>
                       <div class="miao-showTime">
                           <div class="miao-timeBack">
                               <div class="remainTime">
                              <span class="endTime"><s:date name="#automobile.startDate" format='yyyy/MM/dd HH:mm:ss'/></span>
                                   <span class="day"></span>
                                   <span class="hour"></span>
                                   <span class="min"></span>
                                   <span class="sec"></span>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div class="row-fluid">
                       <div class="span12">
                           <table><tbody>
                           <tr>
                               <td>
								<span>
									起拍价：
								</span>
								<span>
									<s:property value="#automobile.startPrice"/> 元
								</span>
                               </td>

                               <td>
								<span>
									车辆承包金：
								</span>
								<span>
									<s:property value="#automobile.promisePrice"/>元
								</span>
                               </td>
                           </tr>
                           <tr>
                               <td>
								<span>
									保留价：
								</span>
								<span>
									<s:if test="#automobile.rejectPrice!=null && #automobile.rejectPrice > 0">有</s:if>
                                    <s:else>无</s:else>
								</span>
                               </td>
                               <td>
								<span>
									过户保证金：
								</span>
								<span>
                                    <s:property value="#automobile.transferPrice"/>
								</span>
                               </td>
                           </tr>
                           <tr>
                               <td>
									<span>
										拍卖方式：
									</span>
									<span>
										<s:property value="#automobile.auctionFashion.text"/>
									</span>
                               </td>
                               <td>
									<span>
										拍卖大厅：
									</span>
									<span>
										<s:property value="#automobile.carMall.text"/>
									</span>
                               </td>
                           </tr>
                           </tbody></table>
                       </div>
                   </div>
               </div>
           </div>
       </s:iterator>

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
<script type="text/javascript" src="js/mainFrame.js"></script>
<script type="text/javascript" src="js/navigateData.js"></script>
<script type="text/javascript" src="js/eventHandler.js"></script>
<script type="text/javascript" src="js/timeCount.js"></script>

<script type="text/javascript">
	$(document).ready(function(){
		$(".span12.img-nav ul li img").on("hover",function(e){
			var bigImg = $(this).closest(".record")
								.find("div img").first();
			$(bigImg).attr("src",$(this).attr("src"));
		});

		initTime(".remainTime");
	});
</script>
</html>