function setCookie(name,value,iDay){
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie = name + "=" + value + ";expires=" + oDate;
}
function getCookie(name){
    var arr1 = document.cookie.split(";");
    for(var i = 0,len = arr1.length;i<len;i++){
        var arr2 = arr1[i].split("=");
        if(arr2[0] == name){
            return arr2[1];
        }
    }
    return "";
}
function removeCookie(name){
    setCookie(name,1,-1);
}