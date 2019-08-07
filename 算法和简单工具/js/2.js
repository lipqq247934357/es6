let x = `import index from './views/index/index.vue';
import layout from './views/layout/index';
import login from './views/login/login.vue'; // 登陆页面
import loanapproval from './views/loanapproval/index.vue'; //贷款审批列表
import upper from './views/loanapproval/upper.vue'; //上会审议 upper director senior
import director from './views/loanapproval/director.vue'; //主任审批
import senior from './views/loanapproval/senior.vue'; //资深审批
import loanapprovaldetail from './views/loanapproval/loanApprovalDetail.vue'; // 贷款审批
import businfo from './views/businessInfo/businessInfo.vue'; // 业务信息列表
import businessadmin from './views/businessM/index.vue'; //商业伙伴管理
import businessdetail from './views/businessInfo/businessDetail.vue'; // 业务信息查看
import legal from './views/businessM/legal.vue'; //添加商业伙伴
import natural from './views/businessM/natural.vue'; //添加商业伙伴
import error404 from './views/404'; // 404
import loanmoney from './views/loanmoney/index.vue'; // 放款审批列表
import loanmoneyRe from './views/loanmoney/loanMoneyRe.vue'; // 放款审批列表
import download from './views/loanmoney/download.vue'; // 下载放款审批
import loanmoneyconfirm from './views/loanmoney/loanmoneyconfirm.vue'; // 放款确认列表
import loanmoneyconfirmRe from './views/loanmoney/loanmoneyconfirmRe.vue'; // 放款确认列表
import confirmhandle from './views/loanmoney/confirmhandle.vue'; // 放款确认详情
import banner from './views/bannermanagement/bannermanagement.vue'; // banner图管理
import appversion from './views/appversion/appversion.vue'; // app版本管理
import configuration from './views/configuration/configuration.vue'; // 用户权限管理
import tubepeople from './views/configuration/tubepeople.vue'; // 用户权限管理
import importOrder from './views/importOrder/index.vue';  // 订单导入
`


// var reg = /\'(.*?)\'/g;
// var mc = [];
// while (m = reg.exec(x)) mc.push(m[1]);
// console.log(mc)

let y = `
'./views/index/index.vue',
  './views/layout/index',
  './views/login/login.vue',
  './views/loanapproval/index.vue',
  './views/loanapproval/upper.vue',
  './views/loanapproval/director.vue',
  './views/loanapproval/senior.vue',
  './views/loanapproval/loanApprovalDetail.vue',
  './views/businessInfo/businessInfo.vue',
  './views/businessM/index.vue',
  './views/businessInfo/businessDetail.vue',
  './views/businessM/legal.vue',
  './views/businessM/natural.vue',
  './views/404',
  './views/loanmoney/index.vue',
  './views/loanmoney/loanMoneyRe.vue',
  './views/loanmoney/download.vue',
  './views/loanmoney/loanmoneyconfirm.vue',
  './views/loanmoney/loanmoneyconfirmRe.vue',
  './views/loanmoney/confirmhandle.vue',
  './views/bannermanagement/bannermanagement.vue',
  './views/appversion/appversion.vue',
  './views/configuration/configuration.vue',
  './views/configuration/tubepeople.vue',
  './views/importOrder/index.vue'`;

let aa = y.split(',\n');

for (let i = 0; i < aa.length; i++) {
    console.log('() => import('+aa[i]+')')
}


