function urlController(url) {
    var _url = url.split("?")[1];
    if(!_url){
        return {};
    }
    var windowHref = _url.split("&");
    var obj = {};
    for(var i = 0 ; i < windowHref.length;i++){
        var arr = windowHref[i].split("=");
        obj[arr[0]] = arr[1]
    }
    return obj;
}

// 将url放入其中
let a = urlController(

'aa?fid=${item.F_ID}&status=${item.YDFD2_FLOW_STATUS}&name=${item.NAME_CN}&statusName=${item.statusName}&USER_NO=${item.USER_NO}&HOUSE_ID=${item.HOUSE_ID}&QLC_ID=${item.QLC_ID}'
);
console.log(a);
