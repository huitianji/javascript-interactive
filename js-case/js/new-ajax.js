function ajax(url,oRequest,fnSucc,fnFail){
    //1.创建ajax对象
    var oAjax = null;
    if(window.XMLHttpRequest){//Window.XMLHttpRequest
        oAjax = new XMLHttpRequest();
                //new XMLHttpRequest()

    }else{
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");//ie
                //new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.链接服务器
    oAjax.open(oRequest,url,true);
    //3.发送请求
    oAjax.send();
    //4.接收请求
    oAjax.onreadystatechange = function(){
        if(oAjax.readyState == 4){

            if(oAjax.status == 200){
                fnSucc(oAjax.responseText);
            }else{
                fnFail(oAjax.status);
            }

        }
    }
}
