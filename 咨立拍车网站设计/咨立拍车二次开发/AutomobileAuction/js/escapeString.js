/**
 * Created with IntelliJ IDEA.
 * User: yifan
 * Date: 14-11-14
 * Time: 下午9:17
 * To change this template use File | Settings | File Templates.
 */
function escape2Html(str) {
    var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
}