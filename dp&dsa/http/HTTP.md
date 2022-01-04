# 总结

## 历史

HTTP/0.9 第一版  
HTTP/1.0 确立了大部分技术，但不是正式标准（官方没有约定，但是民间逐步完善的）  
HTTP/1.1 目前使用最广泛，功能也非常完善  
HTTP/2.0 未普及  
HTTP/3.0 未普及  

## HTTP是什么？

1.HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范

## 各种角色

![相关概念和角色](https://static001.geekbang.org/resource/image/51/64/5102fc33d04b59b36971a5e487779864.png)
1.浏览器:HTT请求方，用户代理  
2.服务器:HTTP响应方，常见的是apache和nginx  
3.CDN:浏览器和服务器之间，加速缓存的功能  

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
    3.可以实现负载均衡

## DNS解析服务

将域名转换成ip地址的服务器

## HTTP主要内容

    TCP/IP协议负责保证数据传输，HTTP协议主要是负责传输的内容

## 报文结构

    1.起始行（start line）：描述请求或响应的基本信息；
    2.头部字段集合（header）：使用 key-value 形式更详细地说明报文；
    3.消息正文（entity）：实际传输的数据，它不一定是纯文本，可以是图片、视频等二进制数据。
    起始行和头部字段一般统称为：请求头，响应头
    消息正文一般统称为：实体，body

![结构图](https://static001.geekbang.org/resource/image/62/3c/62e061618977565c22c2cf09930e1d3c.png)

请求行： ![](https://static001.geekbang.org/resource/image/36/b9/36108959084392065f36dff3e12967b9.png)

```js
GET / HTTP/1.1
```
