let a = [{
  "subclazzNumber": "5429263794047488",
  "clazzName": "高一生物2019-2020—每日一练B班高一生物2019-2020—每日一练B班",
  "unfinishedCount": 1
}, {
  "subclazzNumber": "5440807214033408",
  "clazzName": "未释放练习",
  "unfinishedCount": 7
}, {
  "subclazzNumber": "4851848445214720",
  "clazzName": "克瑞斯初三告警",
  "unfinishedCount": 1
}, {
  "subclazzNumber": "4760581199560704",
  "clazzName": "利剑初一英语2",
  "unfinishedCount": 0
}, {
  "subclazzNumber": "4760585596370944",
  "clazzName": "利剑初一数学2",
  "unfinishedCount": 1
}, {
  "subclazzNumber": "4850277697662976",
  "clazzName": "高二语文-克瑞斯",
  "unfinishedCount": 5
}, {
  "subclazzNumber": "5445881002260480",
  "clazzName": "初中V3版作业释放",
  "unfinishedCount": 3
}, {
  "subclazzNumber": "5445929181247488",
  "clazzName": "api请求参数1",
  "unfinishedCount": 0
}, {
  "subclazzNumber": "5446075759065088",
  "clazzName": "每日一练-调班调课",
  "unfinishedCount": 3
}, {
  "subclazzNumber": "5436058372176385",
  "clazzName": "家长会30+正式31——B班",
  "unfinishedCount": 4
}, {
  "subclazzNumber": "5441361789447680",
  "clazzName": "每日一练-B班",
  "unfinishedCount": 4
}, {
  "subclazzNumber": "5435693851965953",
  "clazzName": "家长会30+正式1+结课后2",
  "unfinishedCount": 4
}, {
  "subclazzNumber": "5440746166266368",
  "clazzName": "正式节课+隔天开课的赠送课节",
  "unfinishedCount": 7
}, {
  "subclazzNumber": "5435684569577985",
  "clazzName": "赠送课节30号+正式课节1号+结课后3",
  "unfinishedCount": 4
}, {
  "subclazzNumber": "5435659007130113",
  "clazzName": "赠送课节30号+正式课节31号+结课后1",
  "unfinishedCount": 4
}, {
  "subclazzNumber": "5441594232925696",
  "clazzName": "每日一练英语",
  "unfinishedCount": 0
}, {
  "subclazzNumber": "5429256908900864",
  "clazzName": "初一英语2019-2020—每日一练",
  "unfinishedCount": 416
}, {
  "subclazzNumber": "5429259295787520",
  "clazzName": "高一生物2019-2020—每日一练",
  "unfinishedCount": 2
}, {
  "subclazzNumber": "5117538499335169",
  "clazzName": "课节考试未提交人数test",
  "unfinishedCount": 1
}, {
  "subclazzNumber": "4851828322713600",
  "clazzName": "克瑞斯告警初三英语",
  "unfinishedCount": 0
}, {
  "subclazzNumber": "5259056071387137",
  "clazzName": "直播赠送课节",
  "unfinishedCount": 5
}, {
  "subclazzNumber": "5128631196327937",
  "clazzName": "批改端课节",
  "unfinishedCount": 1
}, {
  "subclazzNumber": "5122318161724928",
  "clazzName": "转辅导班未提交",
  "unfinishedCount": 3
}, {
  "subclazzNumber": "5122303868257793",
  "clazzName": "退款转辅导班未提交",
  "unfinishedCount": 1
}, {
  "subclazzNumber": "5118600845837824",
  "clazzName": "课后练习旧版",
  "unfinishedCount": 0
}, {
  "subclazzNumber": "4997764364155904",
  "clazzName": "初一数学答疑",
  "unfinishedCount": 5
}, {
  "subclazzNumber": "4890904123270656",
  "clazzName": "数据导出-test",
  "unfinishedCount": 12
}, {
  "subclazzNumber": "4585782055908864",
  "clazzName": "RF—考试lhj",
  "unfinishedCount": 2
}, {
  "subclazzNumber": "4666778027548160",
  "clazzName": "【高途精灵】优化率测试",
  "unfinishedCount": 1
}];

a.forEach(item => {
  item.subclazzNumber = Number(item.subclazzNumber);
  delete item.unfinishedCount
  item.subclazzName = item.clazzName;
  delete item.clazzName
});

console.log(JSON.stringify(a));