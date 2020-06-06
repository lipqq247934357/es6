var getIp=function(){
    var os=require('os'),
         ipStr,
        infaces=os.networkInterfaces(),
         bool=false;
    for(var i in infaces){
        infaces[i].some(function(x){
            if((x.family=='IPv4')&&(x.internal == false)){
                ipStr=x.address;
                bool=true;
                return true
            }
        })
        if(bool){break}
    }
    return ipStr
}

console.log(`http://${getIp()}:8080/index.html?#/`);