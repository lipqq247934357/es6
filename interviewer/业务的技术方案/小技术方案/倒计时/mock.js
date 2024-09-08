export const dateInfo = {
    // beginTime: '20240415151000000',
    beginTime: new Date().getTime() + 5000, // 开始上课时间
    // endTime: '20240416130000000',
    endTime: new Date().getTime() + 8000, // 结束上课时间
    timestamps: (new Date().getTime() - 2000) + '' // 系统时间戳
}

const statusMap = {
    1: 'BeforeStart',
    2: 'BeforeEnd',
    3: 'End'
}