/**
 * Created with IntelliJ IDEA.
 * User: yifan
 * Date: 14-11-11
 * Time: 下午6:05
 * To change this template use File | Settings | File Templates.
 */
var TableComponent = function(){
    return {
        init:function(id){
            if(!$.fn.dataTable.isDataTable("#"+id)){
                $("#"+id).dataTable({
                    "language": {
                        "lengthMenu": '每页显示 <select>'+
                            '<option value="10">10</option>'+
                            '<option value="50">50</option>'+
                            '<option value="100">100</option>'+
                            '<option value="-1">所有</option>'+
                            '</select> 条记录'
                    }
                });
            }
        }
    }
}();