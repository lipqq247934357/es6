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

export function countDown(endDate, getCurrentDay, func) {
    let timer;
    function animation() {
        const now = getCurrentDay();
        const _ms = endDate.diff(now);
        if (_ms > 0) {
            let _hh = endDate.diff(now, 'hour');
            let _mm = endDate.diff(now, 'minute');
            let _ss = endDate.diff(now, 'second');

            // 转换
            let hh = _hh;
            let mm = _mm - (_hh * 60);
            let ss = _ss - (_mm * 60);
            let ms = _ms - (_ss * 1000);

            // 格式化
            let HH = '' + hh;
            HH.length < 1 && (HH = '0' + HH);
            let MM = ('00' + mm).slice(-2);
            let SS = ('00' + ss).slice(-2);
            let MS = ('000' + ms).slice(-3);
            timer = setTimeout(animation, ms);
            func({
                HH,
                MM,
                SS,
                MS,
                countDownZero: _ms <=0
            }, timer);
        } else {
            console.log('1212121')
            func({ countDownZero: _ms <=0 });
        }
    }
    return animation;
}

export function positiveTime(startDate, getCurrentDay, func) {
    let timer;
    function animation() {
        const now = getCurrentDay();
        const _ms = now.diff(startDate);
        if (_ms > 0) {
            let _hh = now.diff(startDate, 'hour');
            let _mm = now.diff(startDate, 'minute');
            let _ss = now.diff(startDate, 'second');

            // 转换
            let hh = _hh;
            let mm = _mm - (_hh * 60);
            let ss = _ss - (_mm * 60);
            let ms = _ms - (_ss * 1000);

            // 格式化
            let HH = '' + hh;
            HH.length < 1 && (HH = '0' + HH);
            let MM = ('00' + mm).slice(-2);
            let SS = ('00' + ss).slice(-2);
            let MS = ('000' + ms).slice(-3);
            clearTimeout(timer);
            timer = setTimeout(animation, 1000 - ms);
            func({
                HH,
                MM,
                SS,
                MS
            }, timer)
        }
    }
    return animation;
}