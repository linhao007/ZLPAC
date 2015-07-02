/**
 * Created by think on 2014/11/9.
 */
var AdjustParentFrame = function(){
    return {
        adjustParent : function(){
            var documentHeight = $("body").height();
            var parentFrame = parent.$("iframe");
            $(parentFrame).height(documentHeight);
        }
    }
}();