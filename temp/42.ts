const initParams = ({event_id}) => {

    const params = {
        event_id,
        track_id: setCookie(),
        timestamp: +new Date()
    }

    const userinfo =  getUserInfo();
        if (userinfo) {
            params.user_id = userinfo?.teacherNumber;
            params.department = userinfo?.accountDto?.department;
        }

    return params;
}

const a = {
    clickReport(event_id: number) {
        // 参数文档
        // event_id事件id，在哈勃系统中创建
        // user_id登录用户 id
        // track_id用户的唯一标识，由后端生成写到 cookie 中
        // if (!RegExp(/localhost/).test(location.origin)) {
        // this.setConfig(click);
        
        const params = initParams({event_id});
        habo.click(...params);
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
        habo.click({...defaultParams,...params});
    }
}