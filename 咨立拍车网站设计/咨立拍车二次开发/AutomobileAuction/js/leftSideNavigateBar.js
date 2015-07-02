/**
 * Created with IntelliJ IDEA.
 * User: yifan
 * Date: 14-11-12
 * Time: 下午5:10
 * To change this template use File | Settings | File Templates.
 */

var LeftSideBarNavigate = function(){

    var init = function(){
        $("li[url]").each(function(index,elem){
            $(elem).on("click",function(e){
                var url = $(elem).attr("url");
                $.ajax({
                    "async":false,
                    "url":url,
                    "type":"post",
                    success: function (response) {
                        $("#right").html(response);
                        AdjustParentFrame.adjustParent();
                    }
                });
                e.preventDefault();
            });
        })
    };

    return {
        initNavigate : init
    };
}();