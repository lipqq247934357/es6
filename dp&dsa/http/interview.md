# 面试复习内容

## HTTP定义

    HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范  
    HTTP 协议基本工作流程，也就是“请求 - 应答”“一发一收”的模式。 

### 通信双方

    浏览器:HTT请求方，用户代理  
    服务器:HTTP响应方，常见的是apache和nginx  

### 域名&域名解析

    域名:主要是代替ip地址  
    域名解析:通过根域名解析器，等等很多的域名解析器将域名解析成ip地址  

### HTTP协议具体内容（主要是报文的传输内容）

    起始行（start line）：描述请求或响应的基本信息;  
    头部字段集合（header）：使用 key-value 形式更详细地说明报文;  
    消息正文（entity）：实际传输的数据，它不一定是纯文本，可以是图片、视频等二进制数据;  

    起始行+头部字段 也叫请求头

    ```js
    请求头内容
    GET /shooter/js/basicData HTTP/1.1
    HTTP/1.1 200 OK

    Host : www.chrono.com
    Connection: keep-alive
    ```

#### get和post的区别

    1.get从服务器获取资源,参数在url上,有数量限制;
    post主要是用于向服务器发送数据,内容在请求体中，没有长度限制;
    2.由于这个本身是浏览器让服务器做事，具体如何做还是服务器说了算，所以不一定get，post就是大多数时候的使用方式；

#### 请求体字段

|  常用头字段   | 说明   | 其他  |
|    ----     |  ----  | ----  |
| host  | 告诉服务器，由哪个主机来处理 | 请求字段，必须写，否则不对  |
| user-agent  | 浏览器标识 | 请求字段,内容可能和含义不符,导致现在没有什么意义  |
| date  | 报文创建时间 | 通用报文，但是一般出现在响应头里  |
| server  | 响应报文 | 和User-Agent类似，没什么价值  |
| -  | - | -  |
| Accept  | 浏览器支持的数据类型 | Accept: text/html,application/xml,image/webp,image/png  |
| Content-Type  | 服务器返回的数据类型 |  Content-Type: text/html   |
| Accept-Encoding  | 浏览器支持的编码 | Accept-Encoding: gzip, deflate, br  |
| Content-Encoding  | 服务器返回的内容编码 | Content-Encoding: gzip  |
| Accept-Language  | 浏览器支持的语言 | Accept-Language: zh-CN, zh, en  |
| Content-Language  | 服务器返回内容所用语言 | Content-Language: zh-CN  |
| Accept-Charset  | 浏览器支持的字符集 | Accept-Charset: gbk, utf-8  Content-Type: text/html; charset=utf-8 |
| -  | - | -  |
| transfer-Encoding  | 分块传输 | transfer-Encoding: chunked  |
| connection  | 长连接,TCP保持一段时间，可以减少每个请求都重新建立TCP连接的时间 | connection: keep-alive  |
| -  | - | -  |
| Location  | 标记了服务器要求重定向的 URI | 响应头才有,location: /index.html  |
| Cookie  | 在http请求和相应中都会携带 | 请求头，Cookie:'uid=xxx'  |
| Set-Cookie  | 在http请求和相应中都会携带 | 响应头，Set-Cookie:favorite=hamburger;Max-Age=10;Expires=Fri,07-Jun-19 08:19:00 GMT;Domain=www.chrono.com;Path=/;HttpOnly;Samesite=Strict |
| -  | - | -  |
| Cache-Control  | 浏览器缓存控制 | -  |
| Last-modified  | 上次 | 响应报文  |
| if-Modified-Since  | 浏览器缓存控制 | 请求报文  |
| ETag  | 浏览器缓存控制 | 请求报文  |
| If-None-Match  | 浏览器缓存控制 | -  |
| -  | - | -  |

#### 协议信息

    1××：提示信息，表示目前是协议处理的中间状态，还需要后续的操作；
    2××：成功，报文已经收到并被正确处理；
        200 OK
        204 No Content  和200一样的
        206 Partial Content  分块传递和断点下载的部分传递成功
    3××：重定向，资源位置发生变动，需要客户端重新发送请求；
        301 Moved Permanently 表示此次请求的资源已经不存在了，需要请求新的URI
        302 Found 临时重定向 请求的资源还在，但需要暂时用另一个 URI 来访问
            301 和 302 都会在响应头里使用字段 Location 指明后续要跳转的 URI，
                301适用场景举例: http切换到https
                302适用场景:临时切换页面
        304 Not Modified 表示资源未修改，重定向到缓存区域
    4××：客户端错误，请求报文有误，服务器无法处理；
        400 Bad Request 请求报文有误
        403 Forbidden 禁止访问
        404 Not Found 资源在服务器上未找到
    5××：服务器错误，服务器在处理请求时内部发生了错误。
        500 Internal Server Error 服务器报错，具体原因未知
        501 Not Implemented 请求功能没有实现
        502 Bad Gateway 后端服务器有问题
        503 Service Unavailable 服务器比较忙，暂时无法响应

## 长短连接

    1.短连接
        HTTP 0.9/1.0的时候收到响应报文之后会立即关闭连接，所以称之为短连接，或者叫无连接
    2.长连接
        TCP在一段时间内不关闭连接
        HTTP 1.1默认开启长连接

## 队头（首）阻塞

    1.因为HTTP报文是“一发一收”的模式，这是个串行的队列，然后如果某一个卡住了，其他的都会被卡住
    2.解决方案:
        并发连接:对一个域名发起多个长连接，使用数量解决质量问题，但是这样对服务器的压力就比较大
        域名分片:多个域名指向同一个服务器,但是服务器压力也会上来,没什么区别

## Cookie

    1.一般由服务器设置（set-cookie），浏览器存储（cookie），存储在浏览器，和浏览器绑定
    1.cookie可以设置过期时间，Expires和Max-Age，同时出现优先使用Max-Age的值,单位秒
    3.Domain”和“Path”可以设置cookie所在的域名，一般path就是"/",但是可以区分不同环境
    4.HttpOnly:这个协议只能通过http协议传出，dom等无法操作这个cookie
    5.SameSite=Strict:可以严格限定 Cookie 不能随着跳转链接跨站发送
    6.Secure:表示这个 Cookie 仅能用 HTTPS 协议加密传输，明文的 HTTP 协议会禁止发送

## 缓存控制

    1.Cache-Control
        max-age:标识资源的有效期
        no-store：不允许缓存
        no-cache：可以缓存，但在使用之前必须要去服务器验证是否过期，是否有最新的版本
        must-revalidate:缓存不过期就可以继续使用，但过期了如果还想用就必须去服务器验证
        public: 可以被浏览器,cdn缓存
        private:响应只能作为私有缓存,不能使用cdn缓存
    Cache-Control控制资源是否过期，以及是否校验，具体怎么校验内容是否过期没有做，通过其他的请求头确认
    2.if-Modified-Since&Last-modified
        第一次响应Last-modified，告诉更新时间
        第二次请求的时候if-Modified-Since，如果时间比较之后还在有效期，那么就返回304，否则返回200
    3.If-None-Match&ETag
        第一次响应ETag，告诉文件etag标识
        第二次请求的时候If-None-Match，如果etag比较之后是有效的，那么就返回304，否则返回200

## 代理服务

    1.指服务本身不生产内容，而是处于中间位置转发上下游的请求和响应；
    2.反向代理:
        负载均衡算法:轮询、一致性哈希
    3.好处
        健康检查：使用“心跳”等机制监控后端服务器，发现有故障就及时“踢出”集群，保证服务高可用；
        安全防护：保护被代理的后端服务器，限制 IP 地址或流量，抵御网络攻击和过载；
        加密卸载：对外网使用 SSL/TLS 加密通信认证，而在安全的内网不加密，消除加解密成本；
        数据过滤：拦截上下行的数据，任意指定策略修改请求或者响应；
        内容缓存：暂存、复用服务器响应

## 代理服务缓存
