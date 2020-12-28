// 1.统计埋点,设置埋点的名字（写在xmind）


// 2.使用下面的工具生成postman的body  （postman的命令自己创建的时候copy as curl  然后 import 到postman）
let arr = [
    '批改页面-工具栏-上传表情包',
    '批改页面-工具栏-刷新加载更多',
    '批改页面-工具栏-上传图片'
    ];
    
    let obj = 
    {
        "eventType": 2,
        "cname": "xxxxx",
        "groupId": 49,
        "comment": "课节列表页",
        "eventPropertyIds": [],
        "bizType": 7
    };
    for(let i= 0;i<arr.length;i++) {
        obj.cname = arr[i];
        console.log(JSON.stringify(obj));
    }