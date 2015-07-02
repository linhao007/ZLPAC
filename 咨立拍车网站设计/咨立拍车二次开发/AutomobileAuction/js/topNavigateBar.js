/**
 * Created by think on 2014/11/9.
 */
var TopNavigateBar = function(){

    var updateWelcomeInfo = function(username){
        if(username){
            var self = window;
            while(self != top){
                self = self.parent;
            }
            if(self){
                self.$("#user").text(username);
                self.$(".welcome").removeClass("hidden");

                var $ul = self.$("ul.nav.right-float");
                $li = $ul.find("li.quit").removeClass("hidden");
                $ul.find("li:lt(2)").addClass("hidden");
            }
        }
    }


    return {

        update: function (username) {
            updateWelcomeInfo(username);
        }
    }
}();
