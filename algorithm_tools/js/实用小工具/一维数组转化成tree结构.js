import { treeUtil } from "../utils.js";

const tree = treeUtil([
    {
        "menuId": "100100",
        "menuLevel": "1",
        "menuName": "资产管理",
        "menuOrder": "1",
        "menuUrl": "",
        "parentMenuId": ""
    },
    {
        "menuId": "100101",
        "menuLevel": "2",
        "menuName": "资产列表",
        "menuOrder": "1",
        "menuUrl": "/assetmanage/assetlist",
        "parentMenuId": "100100"
    },
    {
        "menuId": "100102",
        "menuLevel": "2",
        "menuName": "客户信息列表",
        "menuOrder": "2",
        "menuUrl": "/assetmanage/customerinfolist",
        "parentMenuId": "100100"
    },
    {
        "menuId": "100103",
        "menuLevel": "2",
        "menuName": "授信信息列表",
        "menuOrder": "3",
        "menuUrl": "/assetmanage/authorizationinfolist",
        "parentMenuId": "100100"
    },
    {
        "menuId": "100104",
        "menuLevel": "2",
        "menuName": "资产结清列表",
        "menuOrder": "4",
        "menuUrl": "/assetmanage/payofflist",
        "parentMenuId": "100100"
    },
    {
        "menuId": "100200",
        "menuLevel": "1",
        "menuName": "配置管理",
        "menuOrder": "2",
        "menuUrl": "",
        "parentMenuId": ""
    },
    {
        "menuId": "100201",
        "menuLevel": "2",
        "menuName": "渠道配置",
        "menuOrder": "1",
        "menuUrl": "/configm/channel",
        "parentMenuId": "100200"
    },
    {
        "menuId": "100202",
        "menuLevel": "2",
        "menuName": "资金方配置",
        "menuOrder": "2",
        "menuUrl": "/configm/cashprovider",
        "parentMenuId": "100200"
    },
    {
        "menuId": "100203",
        "menuLevel": "2",
        "menuName": "拆分规则配置",
        "menuOrder": "3",
        "menuUrl": "/configm/splitrules",
        "parentMenuId": "100200"
    },
    {
        "menuId": "100204",
        "menuLevel": "2",
        "menuName": "金融产品配置",
        "menuOrder": "4",
        "menuUrl": "/configm/product",
        "parentMenuId": "100200"
    },
    {
        "menuId": "100206",
        "menuLevel": "2",
        "menuName": "短信配置",
        "menuOrder": "5",
        "menuUrl": "/configm/sms",
        "parentMenuId": "100200"
    },
    {
        "menuId": "100205",
        "menuLevel": "2",
        "menuName": "资产输出配置",
        "menuOrder": "6",
        "menuUrl": "/configm/cashoutput",
        "parentMenuId": "100200"
    },
    {
        "menuId": "100301",
        "menuLevel": "1",
        "menuName": "担保代偿配置",
        "menuOrder": "3",
        "menuUrl": "",
        "parentMenuId": ""
    },
    {
        "menuId": "100302",
        "menuLevel": "2",
        "menuName": "担保代偿列表",
        "menuOrder": "1",
        "menuUrl": "/guaranteeM/list",
        "parentMenuId": "100301"
    },
    {
        "menuId": "100304",
        "menuLevel": "2",
        "menuName": "担保代偿费率",
        "menuOrder": "2",
        "menuUrl": "/guaranteeM/fee",
        "parentMenuId": "100301"
    }
]);

console.log(JSON.stringify(tree));