/*
 *  1.变量 全局
 *  函数 不能有嵌套
 *  2.编程  构造函数/方法
 * */
function Drag(id){
    var _this = this;
    this.disX = 0;
    this.disY = 0;
    this.oDiv = document.getElementById(id);
    this.oDiv.onmousedown = function(ev){
        _this.fnDown(ev);

        return false;//取现默认行为
    };
}
Drag.prototype.fnDown = function(ev){
    var _this = this;
    var oEvent = ev || window.event;
    this.disX = oEvent.clientX - this.oDiv.offsetLeft;
    this.disY = oEvent.clientY - this.oDiv.offsetTop;

    document.onmousemove = function(ev){
        _this.fnMove(ev);
    }
    document.onmouseup = function(ev){
        _this.fnUp();
    };


}
Drag.prototype.fnMove = function (ev){
    var oEvent = ev || window.event;
    var l = oEvent.clientX - this.disX;
    var t = oEvent.clientY - this.disY;
    this.oDiv.style.left = l + "px";
    this.oDiv.style.top = t + "px";

}
Drag.prototype.fnUp = function (){
    document.onmousemove = null;
    document.onmouseup = null;
}