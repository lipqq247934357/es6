# 总结

## 历史

HTTP/0.9 第一版  
HTTP/1.0 确立了大部分技术，但不是正式标准（官方没有约定，但是民间逐步完善的）  
HTTP/1.1 目前使用最广泛，功能也非常完善  
HTTP/2.0 未普及  
HTTP/3.0 未普及  

## HTTP是什么？

1.HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范

## HTTP相关角色

![相关概念和角色](https://static001.geekbang.org/resource/image/51/64/5102fc33d04b59b36971a5e487779864.png)
1.网络世界:互联网的方式有很多种，使用HTTP协议的是万维网
2.浏览器:HTT请求方，用户代理  
3.服务器:HTTP响应方，常见的是apache和nginx  
4.CDN:内容分发网络，使用HTTP协议里的缓存和代理技术，代替源站响应客户端请求

## 相关协议

![相关协议](https://static001.geekbang.org/resource/image/1e/81/1e7533f765d2ede0abfab73cf6b57781.png)

1.TCP/IP  
2.DNS  
3.URL/URI  
4.HTTPS  
5.代理  
    正向代理：靠近客户端，代表客户端向服务器发送请求；  
    反向代理: 靠近服务器端，代表服务器响应客户端的请求；  
    负载均衡，内容缓存，安全防护，数据处理

## 域名

    1.ip地址不方便记忆，使用域名，方便记忆  
    2.域名是一个3层的树状结构
    3.如何保证服务稳定:  
        1.根服务器稳定2.运营商和大公司缓存DNS3.操作系统也会缓存DNS域名4.还有hosts配置文件也可以配置DNS映射  

## HTTP主要内容

    TCP/IP协议负责保证数据传输，HTTP协议主要是负责传输的内容  

## 报文结构

    1.起始行（start line）：描述请求或响应的基本信息；
    2.头部字段集合（header）：使用 key-value 形式更详细地说明报文；
    3.消息正文（entity）：实际传输的数据，它不一定是纯文本，可以是图片、视频等二进制数据。
    起始行和头部字段一般统称为：请求头，响应头
    消息正文一般统称为：实体，body

![结构图](https://static001.geekbang.org/resource/image/62/3c/62e061618977565c22c2cf09930e1d3c.png)

请求行： ![ ](https://static001.geekbang.org/resource/image/36/b9/36108959084392065f36dff3e12967b9.png)

```js
GET /shooter/js/basicData HTTP/1.1
```

状态行： ![ ](https://static001.geekbang.org/resource/image/a1/00/a1477b903cd4d5a69686683c0dbc3300.png)

```js
HTTP/1.1 200 OK
```

头部字段： ![ ](https://static001.geekbang.org/resource/image/1f/ea/1fe4c1121c50abcf571cebd677a8bdea.png)
头部字段： ![ ](https://static001.geekbang.org/resource/image/cb/75/cb0d1d2c56400fe9c9988ee32842b175.png)

## 常用头字段

    1.通用字段：在请求头和响应头里都可以出现；
    2.请求字段：仅能出现在请求头里，进一步说明请求信息或者额外的附加条件；
    3.响应字段：仅能出现在响应头里，补充说明响应报文的信息；
    4.实体字段：它实际上属于通用字段，但专门描述 body 的额外信息。

## 请求方法

    GET：获取资源，可以理解为读取或者下载数据；  
    HEAD：获取资源的元信息；  
    POST：向资源提交数据，相当于写入或上传数据；  
    PUT：类似 POST；  
    DELETE：删除资源；  
    CONNECT：建立特殊的连接隧道；  
    OPTIONS：列出可对资源实行的方法；  
    TRACE：追踪请求 - 响应的传输路径。  

## URI

   uri：![ ](https://static001.geekbang.org/resource/image/46/2a/46581d7e1058558d8e12c1bf37d30d2a.png)

## 特点

    1.灵活可扩展  
    2."可靠"的协议（基于TCP/IP）  
    3.HTTP协议是一个应用层协议  
    4.HTTP协议使用的是请求-应答通信模式  
    5.HTTP协议是无状态的  

## 优缺点

    1.简单，灵活，易于扩展
    2.应用广泛，环境成熟
    3.无状态
    4.明文
    5.不安全
    6.性能一般
