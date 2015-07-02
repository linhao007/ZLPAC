function initTime(container,qualified,auctionStatus,automobileId){
	$(container).each(function(index,elem){
		var time = $(elem).find("span.endTime").text();
		var endTime= new Date(time);
		var nowTime = new Date();
		var gapSec = Math.floor((endTime.getTime() - nowTime.getTime())/1000);

		if(gapSec > 0){
			var day = Math.floor(gapSec/60/60/24);
			var hour= Math.floor(gapSec/60/60%24);
			var min = Math.floor(gapSec/60%60);
			var sec = Math.floor(gapSec%60);
			updateTimeElem(elem,day,hour,min,sec);
		} else {
			updateTimeElem(elem,0,0,0,0);
		}
	});

	var id = setInterval(updateTime,1000);

	function updateTime(){
		var alive = false;
		$(container).each(function(index,elem){
			var day = new Number($(elem).find("span.day").text());
			var hour = new Number($(elem).find("span.hour").text());
			var min = new Number($(elem).find("span.min").text());
			var sec = new Number($(elem).find("span.sec").text());

			var gapSec = (( day * 24 + hour ) * 60 + min ) * 60 + sec;
			if(gapSec > 0){
				gapSec -= 1;
				var updatedDay = Math.floor(gapSec/60/60/24);
				var updatedHour= Math.floor(gapSec/60/60%24);
				var updatedMin = Math.floor(gapSec/60%60);
				var updatedSec = Math.floor(gapSec%60);
				updateTimeElem(elem,updatedDay,updatedHour,
								updatedMin,updatedSec);
				alive = true;
			} else {
                //拍卖开始且在详情页面.
                if(qualified===true || qualified==="true"){
                    if(auctionStatus == 'NotStart'){
                        location.href = "detail.action?automobile.id="+automobileId;
                    }
                    if(auctionStatus == "OnSale"){
                        //重新加载出价
                        nId = setInterval(updateBidRecords,1000);
                    }
                    if(auctionStatus == 'Finished'){
                        //DONothing
                    }
                }
            }
		});

		if(!alive){
			clearInterval(id);
		}
	}

    function updateTimeElem(container,day,hour,min,sec){
        $(container).find("span.day").text(day);
        $(container).find("span.hour").text(hour);
        $(container).find("span.min").text(min);
        $(container).find("span.sec").text(sec);
    }

    function updateBidRecords(){
        $.ajax({
            type:'post',
            url:"syncAutomobileOffer.action",
            dataType:"json",
            data:'automobileId='+ automobileId +'&currentRound='+$("#currentRound").val(),
            success:function(automobileBidVO){

                console.log(automobileBidVO);

                if(automobileBidVO.finished){
                    clearInterval(nId);
                    if(auctionStatus == 'OnSale'){
                        location.href = "detail.action?automobile.id=" + automobileId;
                    }
                } else {
                    $("#currentRound").val(automobileBidVO.automobileBids.length+new Number($("#currentRound").val()));
                    var trs = [];
                    $.each(automobileBidVO.automobileBids,function(index,elem){
                        var $tr = $("<tr/>");

                        $("<td/>").text(elem.accountBid.bidId).appendTo($tr);
                        $("<td/>").text(elem.offer).appendTo($tr);
                        $("<td/>").text(elem.offerDate).appendTo($tr);

                        trs[index] = $tr;
                    });
                    var $tbody = $("#bid tbody");
                    $.each(trs,function(index,elem){
                        $(elem).prependTo($tbody);
                    });
                    $("#maxAccount").text(automobileBidVO.maxOfferBid != null ? automobileBidVO.maxOfferBid.accountBid.bidId : "");
                    $("#maxOffer").text(automobileBidVO.maxOfferBid != null ? automobileBidVO.maxOfferBid.offer : "");
                }
            }
        });
    }
}


