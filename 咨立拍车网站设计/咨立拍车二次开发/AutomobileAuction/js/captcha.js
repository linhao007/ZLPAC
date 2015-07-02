/**
 * Created by think on 2014/11/7.
 */

$(document).ready(function(){
    var url = "captcha.action";

    $(".captchaImg").on("click",function(e){
       changeCaptcha(this);
    });

    $(".changeCaptchaLink").on("click",function(){
        var $img = $(this).parent().find("img");
        changeCaptcha($img);
    });

    function changeCaptcha(elem){
        $(elem).attr("src",url+"?now="+new Date().getTime());
    }
});