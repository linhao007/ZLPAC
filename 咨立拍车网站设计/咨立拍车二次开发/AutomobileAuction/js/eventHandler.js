// 依赖JS: jquery.js navigateData.js
$(document).ready(function(){

    $("a[url],li[url]").each(function(index,elem){
        renderNavigate(elem,target[$(elem).attr("url")]);
        $(elem).on('click',navigatePage);
    });

    function renderNavigate(elem,data){
        $.each(data,function(key,value){
            $(elem).data(key,value);
        });
    }
    function navigatePage(event){

        var id = "content";
        var frameObj = parent ? parent.$("#" + id) 
                              : $("#" + id);
        var itemId = $(this).attr("paramId");
        var dest = $(this).data("url")+(itemId?itemId:"");

        $(frameObj).attr("src",dest);
        var id = $(this).attr("url");
        var currentItem = target[id];

        $(".rules div.navigate").empty();
        var navigateDiv = $(".rules div.navigate");
        if(currentItem.type == "navigate"){
            var indexObj = target["index"];
            var pageObj  = $("<a/>")
                                .attr({
                                   "href":"#",
                                   "url":"index"
                                })
                                .text("当前位置: 首页 >");
            renderNavigate(pageObj,indexObj);
            pageObj.appendTo(navigateDiv);

            var currentPageLink = $("<a/>").attr({
                                                "href":"#",
                                                "url":id
                                            })
                                           .text(currentItem.text);

            renderNavigate(currentPageLink,currentItem);
            currentPageLink.appendTo(navigateDiv); 

            navigateDiv.find("a").on("click",navigatePage);
        } else {
            //首页.欢迎信息无链接
            $("<a/>").text(currentItem.text)
                     .appendTo(navigateDiv);
        }
        //JQuerey孩子节点选择器从1开始计数.
        updateNavigateBar(currentItem.pos+1);
        updateTopBar(id);
    }

    function updateNavigateBar(index){
        var $navigateMenu = parent ? parent.$("ul.nav-frame")
                                   : $("ul.nav-frame");

        $navigateMenu.find("li.active").removeClass("active");
        $navigateMenu.find("li:nth-child(" + index + ")")
            .addClass("active");

    }

    function updateTopBar(id){
        if(id == "logout"){
            $("ul.nav.right-float li.hidden").removeClass("hidden");
            $(".welcome").addClass("hidden");
            $("ul.nav.right-float li.quit").addClass("hidden");
        }
    }
});