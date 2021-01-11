let dayjs = require('dayjs');

function positiveTime(endDate, func, trigger) {
    let timer;
    function animation() {

        const now = dayjs();
        const _ms = now.diff(endDate);
        if(_ms>0){
            let _hh = now.diff(endDate,'hour');
            let _mm = now.diff(endDate,'minute');
            let _ss = now.diff(endDate,'second');

            // 转换
            let hh = _hh;
            let mm = _mm - (_hh*60);
            let ss = _ss - (_mm*60);
            let ms = _ms - (_ss*1000);

            // 格式化
            let HH =  ''+hh;
            HH.length < 1 &&  (HH = '0'+ HH);
            let MM =  ('00'+mm).slice(-2);
            let SS =  ('00'+ss).slice(-2);
            let MS =  ('000'+ms).slice(-3);
            clearTimeout(timer);
            timer = requestAnimationFrameFunc(animation, ms);
            console.log(`${HH},${MM},${SS}`);
            func({
                HH,
                MM,
                SS,
                MS
            }, timer)
        } else { // 触发回调事件
            trigger && trigger();
        }
    }
    return animation;
}
