const moment = require('./moment.js');

moment.locale('zh-cn');
console.log('moment()', moment().format('MMMM Do YYYY, h:mm:ss a'));