function LimitDrag(id){
    Drag.call(this,id);//继承属性的方法
}
for(var i in Drag.prototype){//继承的是方法
    LimitDrag.prototype[i] = Drag.prototype[i];
}
LimitDrag.prototype.fnMove = function (ev){
    var oEvent = ev || window.event;
    var l = oEvent.clientX - this.disX;
    var t = oEvent.clientY - this.disY;
    if( l < 0){
        l = 0;
    }else if(l> document.documentElement.clientWidth - this.oDiv.offsetWidth){
        l = document.documentElement.clientWidth - this.oDiv.offsetWidth;
    }
    this.oDiv.style.left = l + "px";
    this.oDiv.style.top = t + "px";
}