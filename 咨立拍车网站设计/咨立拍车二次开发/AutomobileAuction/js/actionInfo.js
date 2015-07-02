/**
 * Created by think on 2014/11/9.
 */

var ActionInfo = function(){

    var generateDivInfo = function(type,title,message){

        var div = $("<div/>").addClass("control-group info")
                    .append(
                        $("<div/>").addClass(type)
                            .append($("<button/>")
                                        .attr({"data-dismiss":type}))
                            .append($("<strong/>").text(title))
                            .append(message)
                    );
        AdjustParentFrame.adjustParent();
        return div;
    }

    return {
        showInfo : function(info,container){
            $(container).empty()
                        .append(generateDivInfo(info.type,info.title,info.message));
        }
    }
}();