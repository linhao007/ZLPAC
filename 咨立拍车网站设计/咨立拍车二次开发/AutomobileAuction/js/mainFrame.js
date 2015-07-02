//依赖js: dateUtil.js,jquery.js
var agent = window.navigator.userAgent;
if(/MSIE/g.test(agent)){
    var frameObj = document.getElementById("content");
    frameObj.attachEvent("onload", function(){
        var doc = frameObj.contentWindow.document;
        var height = doc.body.clientHeight;
        frameObj.height = height;
        frameObj.border = 0;
        frameObj.frameborder = 0;
    });
}
$(document).ready(function(){
    if(!$.browser.msie){
        var currentDoc = $(document);
        while(currentDoc.parent){
            extendIFrame($("iframe",currentDoc));
            currentDoc = currentDoc.parent;
        }
    }

    function extendIFrame(elem){
        if(!$.browser.msie){
            $(elem).on("load",function(e){
                var iframe = $(this)[0];
                var doc = iframe.contentDocument;
                var height = doc.body.clientHeight;
                $(this).height(height);
            });
        }
    }
});