// 字体大小工具栏
const fontSize = [12, 14, 16, 18, 20, 24, 28, 36, 50, 80];
fontSize.forEach(item => {
    console.log(`批改页面-工具栏-文字大小-${item}`);
});

let arr = [
    '课节列表页-表情包管理按钮',
    '表情包管理--保存表情',
    '课节列表页-吐个槽',
    '课节列表页-体验批改',
    '课节列表页-在线反馈',
    '课节列表页-开始接题按钮',
    '课节列表页-刷新课节列表',
    '课节列表页-添加考试',
    '课节列表页-查看练习上传列表',
    '课节列表页-布置按钮',
    '课节列表页-批改练习按钮',
    '课节列表页-云批改按钮',
    '课节列表页-学员详情'
    ];
    
    let obj = 
    {
        "eventType": 2,
        "cname": "课节列表页-查看快捷键",
        "groupId": 49,
        "comment": "课节列表页",
        "eventPropertyIds": [],
        "bizType": 7
    };
    for(let i= 0;i<arr.length;i++) {
        obj.cname = arr[i];
        console.log(JSON.stringify(obj));
    }
    


    