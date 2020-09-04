/**
 * 将url的参数解析成key,val的形式
 * @param url
 * @returns {{}}
 */

function urlController(url) {
    let _url = url.split("?")[1];
    if (!_url) {
        return {};
    }
    let windowHref = _url.split("&");
    let obj = {};
    for (let i = 0; i < windowHref.length; i++) {
        let arr = windowHref[i].split("=");
        obj[arr[0]] = arr[1]
    }
    return obj;
}

// 将url放入其中

let arr = [
    'correct?subclazzNumber=5435189459108352&dailyPracticeDate=2020-07-29&counselorNumber=4393293762773504&courseNumber=5435185615487488&courseName=%E3%80%904.7.5%E3%80%91showcase%E7%94%A8%E6%9C%89%E8%80%83%E8%AF%95&lessonName=%E3%80%904.7.5%E3%80%91showcase%E7%94%A8%E6%9C%89%E8%80%83%E8%AF%95%E6%AF%8F%E6%97%A5%E4%B8%80%E7%BB%83&idx=%E6%AF%8F%E6%97%A5%E4%B8%80%E7%BB%83&department=10&localVersion=4.7.0&homeworkVersion=3&isExam=false&clazzNumber=5435189458846208&isDailyPractice=true&time=1596078556469'
];

arr = [
    'https://test-interactive.gaotu100.com/zhomework/index.html#/correct?counselorNumber=4393293762773504&clazzLessonNumber=4439338509495811&courseNumber=4439276764229120&courseName=%E8%9C%A1%E7%AC%94%E5%B0%8F%E6%96%B0&lessonName=%E5%B0%8F%E6%96%B0%E7%9A%84%E7%AC%AC%E4%B8%89%E8%8A%82%E8%AF%BE&idx=2&department=10&localVersion=4.7.0&homeworkVersion=3&isExam=false&clazzNumber=4439338509495808&time=1596078641798'
]

for (let item of arr) {
    let a = urlController(item);
    console.log(a);
}
