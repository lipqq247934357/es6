// 课节列表页埋点
let arrClazzList = [{
        "id": 14658,
        "eventId": "5350984000366592",
        "cname": "课节列表页-查看快捷键",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-14 20:31:28",
        "updateTime": "2020-07-14 20:37:21"
    }, {
        "id": 14659,
        "eventId": "5351051413121024",
        "cname": "课节列表页-表情包管理按钮",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-14 20:48:37",
        "updateTime": "2020-07-14 20:48:37"
    }, {
        "id": 14661,
        "eventId": "5351057963509760",
        "cname": "课节列表页-吐个槽",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-14 20:50:17",
        "updateTime": "2020-07-14 20:50:17"
    }, {
        "id": 14662,
        "eventId": "5351058592458752",
        "cname": "课节列表页-体验批改",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-14 20:50:26",
        "updateTime": "2020-07-14 20:50:26"
    }, {
        "id": 14664,
        "eventId": "5351059700541440",
        "cname": "课节列表页-开始接题按钮",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-14 20:50:43",
        "updateTime": "2020-07-14 20:50:43"
    },
    {
        "id": 14666,
        "eventId": "5351060795189248",
        "cname": "课节列表页-添加考试",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-14 20:51:00",
        "updateTime": "2020-07-14 20:51:00"
    },
];


for (let i = 0; i < arrClazzList.length; i++) {
    console.log(`aa:${arrClazzList[i].eventId}, //${arrClazzList[i].cname}`);
}

// 搜索“学员详情页-”找出来,多余5个
// 学员详情页
let homeworkListArr = [{
    "id": 14748,
    "eventId": "5372408744208384",
    "cname": "学员详情页-取消单个导出",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:20:04",
    "updateTime": "2020-07-18 15:24:28"
}, {
    "id": 14745,
    "eventId": "5372406935611392",
    "cname": "学员详情页-单个导出",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:19:36",
    "updateTime": "2020-07-18 15:24:18"
}, {
    "id": 14747,
    "eventId": "5372408166639616",
    "cname": "学员详情页-单个excel考试报告",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:19:55",
    "updateTime": "2020-07-18 15:19:55"
}, {
    "id": 14746,
    "eventId": "5372407622166528",
    "cname": "学员详情页-单个word考试报告",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:19:47",
    "updateTime": "2020-07-18 15:19:47"
}, {
    "id": 14744,
    "eventId": "5372405821892608",
    "cname": "学员详情页-批改考试",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:19:19",
    "updateTime": "2020-07-18 15:19:19"
}, {
    "id": 14743,
    "eventId": "5372405261166592",
    "cname": "学员详情页-查看考试",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:19:11",
    "updateTime": "2020-07-18 15:19:11"
}, {
    "id": 14742,
    "eventId": "5372404701620224",
    "cname": "学员详情页-上传评语",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:19:02",
    "updateTime": "2020-07-18 15:19:02"
}, {
    "id": 14741,
    "eventId": "5372404085254144",
    "cname": "学员详情页-我要上传",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:18:53",
    "updateTime": "2020-07-18 15:18:53"
}, {
    "id": 14740,
    "eventId": "5372403384674304",
    "cname": "学员详情页-取消导出考试报告",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:18:42",
    "updateTime": "2020-07-18 15:18:42"
}, {
    "id": 14739,
    "eventId": "5372402716993536",
    "cname": "学员详情页-excel考试报告",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:18:32",
    "updateTime": "2020-07-18 15:18:32"
}, {
    "id": 14738,
    "eventId": "5372402151548928",
    "cname": "学员详情页-word考试报告",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:18:23",
    "updateTime": "2020-07-18 15:18:23"
}, {
    "id": 14737,
    "eventId": "5372401660028928",
    "cname": "学员详情页-导出考试报告",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:18:16",
    "updateTime": "2020-07-18 15:18:16"
}, {
    "id": 14736,
    "eventId": "5372401038682112",
    "cname": "学员详情页-取消发送",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:18:06",
    "updateTime": "2020-07-18 15:18:06"
}, {
    "id": 14735,
    "eventId": "5372400506071040",
    "cname": "学员详情页-发送短信",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:17:58",
    "updateTime": "2020-07-18 15:17:58"
}, {
    "id": 14734,
    "eventId": "5372400030935040",
    "cname": "学员详情页-选中名单-确认",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:17:51",
    "updateTime": "2020-07-18 15:17:51"
}, {
    "id": 14733,
    "eventId": "5372399239194624",
    "cname": "学员详情页-选中名单-取消",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:17:39",
    "updateTime": "2020-07-18 15:17:39"
}, {
    "id": 14732,
    "eventId": "5372395214694400",
    "cname": "学员详情页-查看选中名单",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:16:37",
    "updateTime": "2020-07-18 15:16:37"
}, {
    "id": 14731,
    "eventId": "5372392319051776",
    "cname": "学员详情页-搜索",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:15:53",
    "updateTime": "2020-07-18 15:15:53"
}]

for (let i = 0; i < homeworkListArr.length; i++) {
    console.log(`aa:${homeworkListArr[i].eventId}, //${homeworkListArr[i].cname}`);
}

// 云批改，一共两个
let cloudCorrectListArr = [{
    "id": 14750,
    "eventId": "5372458013255680",
    "cname": "云批改-保存云批改",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:32:36",
    "updateTime": "2020-07-18 15:32:36"
}, {
    "id": 14749,
    "eventId": "5372457242814464",
    "cname": "云批改-退出云批改",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 15:32:24",
    "updateTime": "2020-07-18 15:32:24"
}]

for (let i = 0; i < cloudCorrectListArr.length; i++) {
    console.log(`aa:${cloudCorrectListArr[i].eventId}, //${cloudCorrectListArr[i].cname}`);
}

// 批改作业页面
let homeworkCorrectListArr = [{
        "id": 14686,
        "eventId": "5351320592541696",
        "cname": "批改页面-工具栏-上传图片",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-14 21:57:04",
        "updateTime": "2020-07-14 21:57:04"
    }, {
        "id": 14685,
        "eventId": "5351320040728576",
        "cname": "批改页面-工具栏-刷新加载更多",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-14 21:56:56",
        "updateTime": "2020-07-14 21:56:56"
    }, {
        "id": 14684,
        "eventId": "5351319502874624",
        "cname": "批改页面-工具栏-上传表情包",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-14 21:56:48",
        "updateTime": "2020-07-14 21:56:48"
    },
    {
        "id": 14759,
        "eventId": "5372583074031616",
        "cname": "批改页面-总评录音下载",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-18 16:04:24",
        "updateTime": "2020-07-18 16:04:24"
    }, {
        "id": 14758,
        "eventId": "5372582510225408",
        "cname": "批改页面-总评录音上传",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-18 16:04:15",
        "updateTime": "2020-07-18 16:04:15"
    }, {
        "id": 14757,
        "eventId": "5372581943207936",
        "cname": "批改页面-总评录音清空",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-18 16:04:07",
        "updateTime": "2020-07-18 16:04:07"
    }, {
        "id": 14756,
        "eventId": "5372581374289920",
        "cname": "批改页面-总评文字清空",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-18 16:03:58",
        "updateTime": "2020-07-18 16:03:58"
    }, {
        "id": 14755,
        "eventId": "5372580679018496",
        "cname": "批改页面-下一题",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-18 16:03:47",
        "updateTime": "2020-07-18 16:03:47"
    }, {
        "id": 14754,
        "eventId": "5372580096010240",
        "cname": "批改页面-当前录音下载",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-18 16:03:38",
        "updateTime": "2020-07-18 16:03:38"
    }, {
        "id": 14753,
        "eventId": "5372579634898944",
        "cname": "批改页面-当前录音上传",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-18 16:03:31",
        "updateTime": "2020-07-18 16:03:31"
    }, {
        "id": 14752,
        "eventId": "5372579175491584",
        "cname": "批改页面-当前录音删除",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-18 16:03:24",
        "updateTime": "2020-07-18 16:03:24"
    }, {
        "id": 14751,
        "eventId": "5372578656774144",
        "cname": "批改页面-当前文字清空",
        "eventType": 2,
        "status": 0,
        "editable": true,
        "groupId": 49,
        "groupName": "批改端",
        "creator": "qinjian01",
        "owner": "qinjian01",
        "createTime": "2020-07-18 16:03:16",
        "updateTime": "2020-07-18 16:03:16"
    }
];


for (let i = 0; i < homeworkCorrectListArr.length; i++) {
    console.log(`aa:${homeworkCorrectListArr[i].eventId}, //${homeworkCorrectListArr[i].cname}`);
}

// 布置页面

let arrangementListArr = [{
    "id": 14760,
    "eventId": "5372728217593856",
    "cname": "布置页面-进入云批改",
    "eventType": 2,
    "status": 0,
    "editable": true,
    "groupId": 49,
    "groupName": "批改端",
    "creator": "qinjian01",
    "owner": "qinjian01",
    "createTime": "2020-07-18 16:41:19",
    "updateTime": "2020-07-18 16:41:19"
}]

for (let i = 0; i < arrangementListArr.length; i++) {
    console.log(`aa:${arrangementListArr[i].eventId}, //${arrangementListArr[i].cname}`);
}