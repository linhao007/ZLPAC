$(document).ready(function(){
	$('.carousel').carousel({
      interval: 3000,
      pause:"hover"
    });

    var currentDate = new Date();
    var displayText = currentDate.Format("yyyy年MM月dd日 星期w");
    $(".currentDate").text(displayText);

});