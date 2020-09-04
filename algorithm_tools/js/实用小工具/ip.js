const getIp = function(){
    let ipStr = '';
    const infaces=require('os').networkInterfaces();
    let bool=false;
    for(let i in infaces) {
        infaces[i].some(function(x){
            if((x.family=='IPv4')&&(x.internal == false)){
                ipStr=x.address;
                bool=true;
                return true
            }
        })
        if(bool){break}
    }
    return ipStr;
}

console.log(`http://${getIp()}:8080/index.html?#/`);
console.log(`http://${getIp()}:8080/index.html#/login`);
