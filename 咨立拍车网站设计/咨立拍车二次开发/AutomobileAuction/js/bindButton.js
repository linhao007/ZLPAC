/**
 * Created with IntelliJ IDEA.
 * User: yifan
 * Date: 14-11-11
 * Time: 下午5:58
 * To change this template use File | Settings | File Templates.
 */
var userButton = function(){

    var clickHandler = function(obj,id,targetURL){
        var btn = $(obj);
        $.ajax({
            async:false,
            url:$(obj).attr("url"),
            success:function(response){
                $.ajax({
                    async:false,
                    url:targetURL,
                    success:function(response){
                        var $tableWrapper = $(btn).closest(".box-content");
                        $tableWrapper.empty()
                                     .html(response);
                        TableComponent.init(id);
                    }
                });
            }
        });
    };

    var ulButtonBind = function(id,source,targetURL){
        $(source).on('click',function(e){
            clickHandler($(this),id,targetURL);
        });
    };

    return {
        initClickHandler : function(id,source,targetURL){
            ulButtonBind(id,source,targetURL);
        }
    }

}();