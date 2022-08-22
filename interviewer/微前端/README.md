# 微前端

## 为什么会有微前端

    1.主要是解决巨石项目
        单个项目太大，每次加载所有项目内容太多
    2.不同技术栈的项目在一个域名展示
        iframe也可以，但是不如微前端优秀

## 和iframe有什么区别

[为什么不使用iframe](https://www.yuque.com/kuitos/gky7yw/gesexv)

## single-spa

[官方文档](https://zh-hans.single-spa.js.org/docs/getting-started-overview/)
    路由劫持&应用加载

## qiankun

[官方文档](https://qiankun.umijs.org/zh/guide/getting-started)

    1.实现了沙箱机制
    2.定时器的移除和恢复

## 思路

    1.接入协议，接入子应用
    2.打包子应用为lib，接入父应用

## 问题

    1.子应用的router切换会不会被影响（qiankun不会影响）

## 主应用和子应用样式隔离

    1.约定项目前缀
    2.使用css-modules,打包时生成不冲突的选择器名
    3.Shadow DOM 
    4.css in js

## window上的隔离

    1.如何在应用切换的时候处理window上的属性
        1.快照沙箱
        2.代理proxy沙箱
