import habo from 'habo';
import cookie from './cookie';

const {view,click} = habo;

// 通用设置
view.setConfig({NAME: 'gt-damai'});
click.setConfig({NAME: 'gt-damai'});
// 由于当前js文件的加载时间肯定早于getAuth接口的的返回时间，所以直接赋值赋不上
// 除非setConfig不需要立即执行,经过实践不ok，或者在getAuth之后再加载文件该文件,未实践
// habo.view.setConfig({user_id: 'xxxx', NAME: 'gt-damai', user_number: 'xxxx'});
// 停留时长设置
if (window.location.href.indexOf('http') > 0) {
    habo.stay.init(3); // 页面停留时长
}

function getUserInfo() {
    const userInfo = localStorage.getItem('userinfo');
    return userInfo !== 'undefined' && JSON.parse(userInfo);
}

const create = () => {
    function s4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return [
        s4() + s4(),
        s4(),
        s4(),
        s4(),
        s4() + s4() + s4()
    ].join('-');
}
const setCookie = () => {
    const key = '_gaotu_track_id_';
    let _guid = cookie.getCookie(key);
    if (!_guid) {
        _guid = create();
        cookie.setCookie(key, _guid, {
            expires: 1 * 24 * 365 * 100,
            domain: '.gaotu100.com'
        });
    }
    return _guid;
}

const initParams = ({event_id}) => {

    const params = {
        event_id,
        track_id: setCookie(),
        timestamp: +new Date(),
        user_id: undefined,
        department: undefined
    }

    const userinfo = getUserInfo();
        if (userinfo) {
            params.user_id = userinfo?.teacherNumber;
            params.department = userinfo?.accountDto?.department;
        }

    return params;
}

export default {

    // 点击事件埋点统计
    clickReport(event_id: number) {
        // 参数文档
        // event_id事件id，在哈勃系统中创建
        // user_id登录用户 id
        // track_id用户的唯一标识，由后端生成写到 cookie 中
        // if (!RegExp(/localhost/).test(location.origin)) {
        // this.setConfig(click);
        
        const params = initParams({event_id});
        click(...params);
    },

    // 点击事件埋点统计
    clickReportWithParams(event_id: number, params={}) {
        // 参数文档
        // event_id事件id，在哈勃系统中创建
        // user_id登录用户 id
        // track_id用户的唯一标识，由后端生成写到 cookie 中
        // if (!RegExp(/localhost/).test(location.origin)) {
        // this.setConfig(click);
        const defaultParams = initParams({event_id});
        click({...defaultParams,...params});
    },
    viewReport(json: any) {
        const defaultParams = initParams({event_id: undefined});
        view(defaultParams);
    }
};
