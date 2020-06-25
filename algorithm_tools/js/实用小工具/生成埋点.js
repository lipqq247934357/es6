let utils = require('../utils');
/**
 *
 * @type {string}
 */

let correctBox =
    `课节列表页-班级筛选-已结束 点击
    5201383607199744
    课节列表页-班级筛选-未开始 点击
    5201379097602048
    课节列表页-班级筛选-行课中 点击
    5201376575383552
    课节列表页-班级筛选-全部 点击
    5201374192101376
    个人云批改排序-确认保存排序的次数
    5201488630016000
    10号铅笔点击
    5201583228676096
    12号铅笔点击
    5201584438994944
    14号铅笔点击
    5201585427736576
    18号铅笔点击
    5201586448001024
    批改详情页-学生提交列表-全部
    5201595464640512
    批改详情页-学生提交列表-待批改
    5201596709627904
    批改详情页-学生提交列表-待订正
    5201598511409152
    批改详情页-学生提交列表-已订正
    5201599574468608`;

correctBox = correctBox.split('\n');
let code = utils.getArrByIndex(correctBox, 2, 1); 
let name = utils.getArrByIndex(correctBox, 2, 0);

for(let i=0;i<code.length;i++) {
    console.log(`aa:${code[i]}, //${name[i]}`);
}

let data = {
    CLAZZLIST_FILTER_OVER:'5201383607199744', // 课节列表页-班级筛选-已结束 点击
    CLAZZLIST_FILTER_NOT_START:'5201379097602048', // 课节列表页-班级筛选-未开始 点击
    CLAZZLIST_FILTER_PROCESS:'5201376575383552', // 课节列表页-班级筛选-行课中 点击
    CLAZZLIST_FILTER_ALL:'5201374192101376', // 课节列表页-班级筛选-全部 点击
    CLOUD_CORRECT_SORT_CONFIRM:'5201488630016000', // 个人云批改排序-确认保存排序的次数
    CORRECT_PENCEL_10:'5201583228676096', // 10号铅笔点击
    CORRECT_PENCEL_12:'5201584438994944', // 12号铅笔点击
    CORRECT_PENCEL_14:'5201585427736576', // 14号铅笔点击
    CORRECT_PENCEL_18:'5201586448001024', // 18号铅笔点击
    CORRECT_LIST_ALL:'5201595464640512', // 批改详情页-学生提交列表-全部
    CORRECT_LIST_WAIT_CORRECT:'5201596709627904', // 批改详情页-学生提交列表-待批改
    CORRECT_LIST_WAIT_UPDATE:'5201598511409152', // 批改详情页-学生提交列表-待订正
    CORRECT_LIST_HAVE_UPDATE:'5201599574468608', // 批改详情页-学生提交列表-已订正
};

for(let name in data) {
    let temp1 = `v-clickReport="$Api.POINT.${name}"`;
    let temp2 = `this.$clickReport({ event_id: this.$Api.POINT.${name} });`;
    console.log(temp1);
    setTimeout(()=>{
        console.log(temp2);
    });
}