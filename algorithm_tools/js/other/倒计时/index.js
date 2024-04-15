/**
 * 倒计时组件：
 *  实现原理：
 *      1.将后台的时间戳和后端的时间戳做差
 *          因为我们无法保证前台的时间是正确的
 *      2.然后是用当前时间和差值的计算结果作为当前时间
 * 
 * 1.不能使用setInterval，因为这个间隔是不准的，js是单线程的，间隔1s可能已经间隔1s多了，不断累计，其实时间肯定不准了；
 */

// 开始之前一种展示，开始之后一种展示，结束之后一种展示；
// 距离多长时间开课，开课多长时间了，'--'
import './day.js';
import { customTime, countDown, positiveTime } from './countDown.js';
import { dateInfo } from './mock.js';
// 计算时间差 计算浏览器的本地时间和服务器的时间差，方便计算时间的时候按照服务器的来，更准确
const timeInternetDiff = dayjs().millisecond() - dayjs(dateInfo.timestamps).millisecond();
const getCurrentDay = () => dayjs().subtract(timeInternetDiff, 'millisecond')

// 获取当前开始，结束时间, 当前系统时间
const [beginTime, endTime, current] = [dayjs(dateInfo.beginTime), dayjs(dateInfo.endTime), getCurrentDay()];

if (current < beginTime) { // 未开始，倒计时
    countDown(beginTime, getCurrentDay, (obj, timer) => {
        if (!obj.countDownZero) {
            console.log(customTime(obj), obj);
        } else {
            setTimeout(() => {
                positiveTime(beginTime, getCurrentDay, (obj, timer) => {
                    console.log(customTime(obj), obj);
                    if (!getCurrentDay().isBefore(endTime)) {
                        clearTimeout(timer);
                    }
                })();
            }, 1000)
        }
    })();

} else if (current < endTime) { // 未结束，正计时
    positiveTime(beginTime, getCurrentDay, (obj, timer) => {
        console.log(customTime(obj));
        if (getCurrentDay().diff(endTime) > 0) {
            clearTimeout(timer);
        }
    })();
} else { // 已结束
}