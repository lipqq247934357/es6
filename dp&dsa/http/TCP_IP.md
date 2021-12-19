# TCP/IP

## 网络模型

1.链接层  
2.网络层  
    IP  每个路由器都有个ip地址，然后我们访问对方的ip地址，里面包含对方的mac地址，就可以找到对方
3.传输层  
    TCP UDP  
4.应用层  
    向用户提供应用服务时通信的活动，http协议处于该层

## TCP/IP工作方式

协议栈逐层打包再拆包，实现了数据传输

## 1 ![四层协议](https://static001.geekbang.org/resource/image/2b/03/2b8fee82b58cc8da88c74a33f2146703.png)

## [IP地址和MAC地址的区别和联系是什么？](https://www.zhihu.com/question/49335649/answer/1860224576)
    MAC地址:烧录在机器上的一个物理地址，具有全球唯一性
    IP地址:一个逻辑地址，隐含位置信息等，在一个网络里也是唯一的
    ARP协议: 存储IP地址和MAC地址的对应关系
    局域网内：
        MAC地址直接通信
    局域网外：
        MAC地址转化成IP地址，然后在网上传播，然后等匹配到对应的IP之后，再转化成MAC地址广播

    IP地址最终都会转化成MAC地址和主机交流
## TCP 3次握手，四次挥手

问题：
    1.四层协议
    3.tcp的三次握手，四次挥手
    4.cdn工作在哪一层
    5.域名还有哪些门道（ <https://time.geekbang.org/column/article/99665> ）
