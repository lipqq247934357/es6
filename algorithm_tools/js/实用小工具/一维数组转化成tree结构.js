import { treeUtil } from "../utils.js";

/**
 * 需求：
 *  1.根据数据将一维数组转化成tree结构
 *  2.数据特点：
 *      1.menuLevel表示层级
 *      2.parentMenuId表示上级节点的id
 *      3.将非一级节点的数据通过父id，放到它的children里
 * 
 *  本质的解决方案：
 *      就是将每个节点放到它父节点的children里
 *      在遍历所有节点之后，所有的节点都放在了它父节点的children里
 *      这样就形成了tree结构
 * 
 */

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