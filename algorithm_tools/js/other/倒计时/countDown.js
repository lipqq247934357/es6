export const customTime = obj => { // 格式化输入的时间
    let { HH, MM, SS } = obj;
    HH = HH === '0' ? '' : HH + 'h';
    if (MM.length !== 1 && MM.startsWith("0")) {
        MM = MM.slice(1);
    }
    if (HH === '' && MM === '0') {
        return `${SS}秒`
    }
    return `${HH} ${MM}min`;
}

export function countDown(beginTime, getCurrentDay, func) {
    let timer;
    function animation() {
        const now = getCurrentDay();
        const _ms = beginTime.diff(now);
        if (_ms > 0) {
            // 格式化
            let [HH, MM, SS, MS, ms] = formatTime(now, beginTime, _ms);
            clearTimeout(timer);
            timer = setTimeout(animation, ms);
            func({
                HH, MM, SS, MS, countDownZero: _ms <= 0
            }, timer);
        } else {
            func({ countDownZero: _ms <= 0 });
        }
    }
    return animation;
}

export function positiveTime(beginTime, getCurrentDay, func) {
    let timer;
    function animation() {
        const now = getCurrentDay();
        const _ms = now.diff(beginTime);
        if (_ms > 0) {
            // 格式化
            let [HH, MM, SS, MS, ms] = formatTime(beginTime, now, _ms);
            clearTimeout(timer);
            timer = setTimeout(animation, 1000 - ms);
            func({
                HH, MM, SS, MS
            }, timer)
        }
    }
    return animation;
}

// 将时间转换成需要的形式,这个可以改成任意需要的格式
const formatTime = (smallDate, bigDate, _ms) => {
    let _hh = bigDate.diff(smallDate, 'hour');
    let _mm = bigDate.diff(smallDate, 'minute');
    let _ss = bigDate.diff(smallDate, 'second');

    // 转换
    let hh = _hh;
    let mm = _mm - (_hh * 60);
    let ss = _ss - (_mm * 60);
    let ms = _ms - (_ss * 1000);
    return [String(hh).padStart(1, '0'), String(mm).padStart(2, '0'), String(ss).padStart(2, '0'), String(ms).padStart(3, '0'), ms];
}