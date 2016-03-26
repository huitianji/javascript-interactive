function getByClass(oParent,sClass){
    var aEle = document.getElementsByTagName("*");
    var aResult = [];
    for(var i = 0,len = aEle.length;i<len;i++){
        if(aEle[i].className == sClass){
            aResult[i] = aEle[i];
        }
    }
    return aResult;
}
//模板1
function startMove(obj,attr,iTarget,fnEnd){
    clearInterval(obj.timer);

    obj.timer = setInterval(function(){
        var cur = 0;
        if(attr == "opacity"){
            cur = Math.round(parseFloat(getStyle(obj, attr))*100);
        }else{
            cur = parseInt(getStyle(obj,attr));
        }
        var speed = (iTarget - cur)/8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if(cur == iTarget){
            clearInterval(obj.timer);
            if(fnEnd){
                fnEnd();
            }
        }else{
            if(attr == "opacity"){
                obj.style.filter = "alpha(opacity="+ (cur + speed) +")";
                obj.style.opacity = (cur + speed)/100;
            }else{
                obj.style[attr] = cur + speed + "px";
            }

        }
    },30);
}
function getStyle(obj,name){
    if(obj.currentStyle){//ie
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }
}
//运动框架模板2
function startMove2(obj,json,fnEnd){
    clearInterval(obj.timer);

    obj.timer = setInterval(function(){
        var bStop = true;
        for(var attr in json){
            var cur = 0;
            if(attr == "opacity"){
                cur = Math.round(parseFloat(getStyle(obj, attr))*100);
            }else{
                cur = parseInt(getStyle(obj,attr));
            }
            var speed = (json[attr] - cur)/8;//iTarget
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if(cur != json[attr]){
                bStop = false;
            }

            if(attr == "opacity"){
                obj.style.filter = "alpha(opacity="+ (cur + speed) +")";
                obj.style.opacity = (cur + speed)/100;
            }else{
                obj.style[attr] = cur + speed + "px";
            }


        }
        if(bStop){
            clearInterval(obj.timer);
            if(fnEnd){
                fnEnd();
            }
        }
    },30);
}
//getPos   ===   scrollTop
function getPos(ev){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    return {x:ev.clientX + scrollLeft,y:ev.clientY + scrollTop};
}