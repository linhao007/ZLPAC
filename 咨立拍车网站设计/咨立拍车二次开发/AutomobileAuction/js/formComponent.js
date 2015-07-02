/**
 * Created by think on 2014/11/8.
 */
var FormComponent = function(){

    var ajaxSubmitPage = function(){
        var $form = $("form");
        var url = $form.attr("url");
        $.ajax({
            async: false,
            "url": url,
            "type": "post",
            "data": $form.formSerialize(),
            "success": function (response) {
                if (response) {
                    alert("更新成功");
                } else {
                    alert("更新失败");
                }
            }
        });

        return false;
    };
    return {
        init:function(){
            $("form").validate({
                onsubmit:true
            });
        },
        ajaxInit: function () {
            $("form").validate({
                submitHandler : function(){
                    ajaxSubmitPage();
                }
            });
        }
    };
}();