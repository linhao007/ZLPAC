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
    <link href="css/detail.css" rel="stylesheet" type="text/css" >
</head>
<body>
	<div class="container detail">
        <input type="hidden" id="automobileId" name="automobileId" value="<s:property value='automobile.id'/>"/>
        <input id="currentRound" type="hidden" value="<s:property value='automobileBidVO.automobileBids.size'/>"/>
		<div class="item">
			<div class="row-fluid">
				<div class="span5 summary">
					<img src="<s:property value='automobile.images[0]'/>" class="span5" />
				</div>
				<div class="span7">
					<div class="row-fluid">
						<span><s:property value='automobile.carBrand'/> </span>
					</div>
					<div class="row-fluid">
						<b class="count-time-tip">距离开始:</b>
                      	<div class="miao-showTime">      
	                        <div class="miao-timeBack"> 
	                            <div class="remainTime">
	                              <span class="endTime"><s:date name="automobile.startDate" format='yyyy/MM/dd HH:mm:ss'/></span>
	                              <span class="day"></span>
	                              <span class="hour"></span>
	                              <span class="min"></span>
	                              <span class="sec"></span>
	                            </div>     
	                        </div>
						</div>
					</div>

					<div class="row-fluid">
						<table><tbody>
							<tr>
								<td>
								<span>
									车辆编号:
								</span>
								<span>
									<s:property value="automobile.id"/>
								</span>
							</td>

							<td>
								<span>
									车辆承保金:
								</span>
								<span>
									<s:property value="automobile.promisePrice"/>元
								</span>
							</td>
							
							</tr>

							<tr>
								<td>
								<span>
									起拍价:
								</span>
								<span>
									<s:property value="automobile.startPrice"/>元
								</span>
							</td>

							<td>
								<span>
									加价幅度:
								</span>
								<span>
									<s:property value="automobile.roundPrice"/> 元
								</span>
							</td>
							</tr>

							<tr>
								<td>
								<span>
									过户保证金:
								</span>
								<span>
									<s:property value="automobile.transferPrice"/>元
								</span>
							</td>

							<td>
								<span>
									保留价:
								</span>
								<span>
									<s:if test="automobile.rejectPrice!=null && automobile.rejectPrice>0"> 有 </s:if>
                                    <s:else>无</s:else>
								</span>
							</td>
							</tr>

							<tr>
								<td>
								<span>
									拍卖大厅:
								</span>
								<span>
									<s:property value="automobile.carMall.text"/>
								</span>
							</td>

							<td>
								<span>
									开拍时间:
								</span>
								<span>
									<s:date name="automobile.startDate" format="yyyy-MM-dd hh:mm:ss"/>
								</span>
							</td>
							</tr>

							<tr>
								<td colspan="2">
								<span>
									温馨提示:
								</span>
								<span>
									过户保证金在车辆过户后给予退回，收取过户保证金的目的是约束双方尽快完成过户，最低5000元，最高30000元
								</span>
							</td>
							</tr>

							<tr>
								<td colspan="2">
								<span>
									参拍资格:
								</span>
								<span>
									<s:if test="qualified">具有拍卖资格</s:if>
                                    <s:else>您尚未参与该拍卖</s:else>
								</span>
							</td>

						</tr>
						</tbody></table>
					</div>
				</div>
			</div>
			<div class="row-fluid margin-top-10">
				<div class="span5 hint">
					<div class="row-fluid">
						<span>
							网站发布的信息，仅供参考，不表明本公司对其所作担保。会员拍卖前查看拍卖车辆，并查点车辆配件是否齐全，及是否有二次事故。请会员谨慎出价，如提车时发现配件缺失及二次事故买受人自行承担，拍卖成交后拒绝一切形式议价。
							即将拍卖
						</span>
					</div>
				</div>

				<div class="span7">
					<div class="apply">
                        <span><s:property value="auctionStatus.text"/></span>
                        <s:if test='!winner && auctionStatus.value=="Finished"'>
                            对不起,您未中标.
                        </s:if>
                        <s:elseif test='winner && auctionStatus.value=="Finished"'>
                           恭喜,您中标了
                        </s:elseif>

                        <s:if test='!qualified && auctionStatus.value!="Finished"'>
                            <button id="applyAuction" class="btn btn-primary">申请拍卖</button>
                        </s:if>
                        <s:elseif test='auctionStatus.value=="OnSale"'>
                            <input type="text" name="automobileBid.offer"/><span> 元 </span><button id="bidAutomobile" class="btn btn-primary">出价</button>
                        </s:elseif>
					</div>
				</div>
			</div>

            <s:if test='qualified && auctionStatus.value=="OnSale"'>
                <div class="row-fluid margin-top-10" id="auctionDisplay">
                    <div class="span4">
                        <ul class="nav">
                            <li>您的拍卖编号为：<span><s:property value="accountBid.bidId"/></span></li>
                            <li>最高出价者: <span id="maxAccount"><s:property value="automobileBidVO.maxOfferBid.accountBid.bidId"/></span></li>
                            <li>最高价为: <span id="maxOffer"><s:property value="automobileBidVO.maxOfferBid.offer"/>元</span></li>
                        </ul>
                    </div>
                    <div class="span8">
                        <table id="bid" class="table table-striped table-hover">
                            <thead>
                                <th>出价人</th>
                                <th>出价</th>
                                <th>出价时间</th>
                            </thead>
                            <tbody>
                                <s:iterator value="automobileBidVO.automobileBids" id="automobileBid">
                                    <tr>
                                        <td><s:property value="#automobileBid.accountBid.bidId"/></td>
                                        <td><s:property value="#automobileBid.offer"/></td>
                                        <td><s:date name="#automobileBid.offerDate" format="yyyy-MM-dd hh:mm:ss"/></td>
                                    </tr>
                                </s:iterator>
                            </tbody>
                        </table>
                    </div>
                </div>
            </s:if>

			<div class="row-fluid flow">
				<img src="img/flow.jpg"/>
			</div>
			<div class="row-fluid description">
				<div class="row-fluid title">
					<h4>车辆详情</h4>
				</div>
				<div class="row-fluid">
					<ul class="clearself">
                        <li>事故车类型:<s:property value="automobile.carType"/></li>
                        <li>拍卖类型:<s:property value="automobile.saleType"/></li>
                        <li>拍卖方式:<s:property value="automobile.auctionFashion.text"/></li>
                        <li>初次登记日期:<s:date name="automobile.firstRegisterDate" format="yyyy-MM-dd"/></li>
                        <li>发证日期:<s:date name="automobile.passportDate" format="yyyy-MM-dd"/></li>
                        <li>登记证书:<s:property value="automobile.passport.text"/></li>
                        <li>车牌归属地:<s:property value="automobile.carBelog"/></li>
                        <li>车辆停放省市:<s:property value="automobile.parkPos"/></li>
                        <li>有无抵押:<s:property value="automobile.mortgage.text"/></li>
                        <li>车架号受损:<s:property value="automobile.carDestroy.text"/></li>
                        <li>是否拆检:<s:property value="automobile.check.text"/></li>
                        <li>违章情况:<s:property value="automobile.breakRule.text"/></li>
                        <li>二次启动:<s:property value="automobile.secondStarted"/></li>
                        <li id="feeMarker">人伤情况:<s:property value="automobile.personStatus"/></li>
                        <li class="last">咨询电话:***-***-**</li>
                        <li class="last">车辆备注:<s:property value="automobile.autoMobileDesc"/></li>
					</ul>

					<div id="automobileContent">
                        <s:property value="automobile.contentHTML"/>
                    </div>

				</div>
			</div>
		</div>
	</div>
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
<script type="text/javascript" src="js/timeCount.js"></script>
<script type="text/javascript" src="js/escapeString.js"></script>

<script type="text/javascript">
    $(document).ready(function(){
        var contentHTML = '<s:property value="automobile.contentHTML"/>';
        var applyCost   = '<s:property value="automobile.carMall.cost"/>';
        var automobileId = '<s:property value="automobile.id"/>';
        var auctionStatus = '<s:property value="auctionStatus.value"/>';
        var qualified = '<s:property value="qualified"/>';

        initTime(".remainTime",qualified,auctionStatus,automobileId);
        contentHTML = escape2Html(contentHTML);
        $("#automobileContent").html(contentHTML);

        //申请拍卖.
        $("#applyAuction").on("click",function(e){
            if(confirm("确定申请拍卖？","将从您余额中扣除 " + applyCost)){
                $.ajax({
                    url:"applyBidAutomobile.action",
                    data:"automobileId="+automobileId,
                    success:function(result){
                        if(result){
                            location.href = "detail.action?automobile.id="+automobileId;
                        } else {
                            alert("请登陆、或充值");
                        }
                    }
                });
            }
        });

        //出价申请.
        $("#bidAutomobile").on("click",function(e){
            var automobileId = $("input[name='automobileId']").val();
            var offer = $("input[name='automobileBid.offer']").val();

            $.ajax({
                url:"bidAutomobile.action",
                data:{
                    "automobileId":automobileId,
                    "automobileBid.offer":offer
                },
                success:function(data){
                }
            });
        });
    });
</script>
</body>
</html>