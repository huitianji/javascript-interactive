//阻止默认行为
sydint.preDefault = function preDefault(ev){

    var oEvent = ev || event;

    if (oEvent && oEvent.preventDefault){//如果提供了事件对象，则这是一个非IE浏览器

        oEvent.preventDefault();            //阻止默认浏览器动作(W3C)
    }
    else{            //IE中阻止函数器默认动作的方式
        window.event.returnValue = false;
    }
    return false;
};
/*
 封装一个通用函数事件
 */
sydint.myAddEvent = function(obj,sEvent,fn){

    if(obj.attachEvent){
        return obj.attachEvent("on"+sEvent,fn);
    }else{
        return obj.addEventListener(sEvent,fn,false);
    }
}
//