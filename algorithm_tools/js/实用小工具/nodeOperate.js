import os from 'os';
import exec from 'child_process';
const execFunc = exec.exec;
// 打开默认浏览器
export const openDefaultBrowser = function (url) {
  console.log(process.platform)
  switch (process.platform) {
    case "darwin":
      execFunc('open ' + url);
      break;
    case "win32":
      execFunc('start ' + url);
      break;
    default:
      execFunc('xdg-open', [url]);
  }
}

// 获取当前局域网ip
export const getIp = function(){
    let ipStr = '';
    const infaces= os.networkInterfaces();
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
