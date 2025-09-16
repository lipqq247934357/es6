import { openDefaultBrowser } from './一些常用node操作.js';

/**
 * 将对象转换为URL查询参数字符串
 * @param {Object} obj - 要转换的对象
 * @param {Object} options - 配置选项
 * @param {boolean} options.encode - 是否对参数值进行URL编码，默认true
 * @param {boolean} options.sort - 是否对参数键进行排序，默认false
 * @returns {string} URL查询参数字符串
 */
function objectToUrlParams(obj, options = {}) {
    const { encode = true, sort = false } = options;
    
    if (!obj || typeof obj !== 'object') {
        throw new Error('参数必须是一个对象');
    }
    
    // 获取对象的键值对
    let entries = Object.entries(obj);
    
    // 过滤掉undefined和null值
    entries = entries.filter(([_, value]) => value != null);
    
    // 可选：对键进行排序
    if (sort) {
        entries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
    }
    
    // 转换为查询参数字符串
    const params = entries
        .map(([key, value]) => {
            const encodedValue = encode ? encodeURIComponent(value) : value;
            return `${key}=${encodedValue}`;
        })
        .join('&');
    
    return params;
}

/**
 * 构建完整的URL
 * @param {string} baseUrl - 基础URL
 * @param {Object} params - 查询参数对象
 * @param {Object} options - 转换选项
 * @returns {string} 完整的URL
 */
function buildUrl(baseUrl, params, options = {}) {
    const queryString = objectToUrlParams(params, options);
    const separator = baseUrl.includes('?') ? '&' : '?';
    return queryString ? `${baseUrl}${separator}${queryString}` : baseUrl;
}

// 示例数据
const data = {
    classTypeId: 132508,
    lessonId: 1127647202
};

// 基础URL
const baseUrl = 'https://diy.aixuexi.com/jy-editor/previewpure.html?standalone=1';

// 构建完整URL
const fullUrl = buildUrl(baseUrl, data, { encode: true, sort: false });

console.log('原始数据:', data);
console.log('查询参数:', objectToUrlParams(data));
console.log('完整URL:', fullUrl);

// 打开浏览器
try {
    openDefaultBrowser(fullUrl);
    console.log('浏览器已打开');
} catch (error) {
    console.error('打开浏览器失败:', error.message);
}

// 导出函数供其他模块使用
export { objectToUrlParams, buildUrl };
