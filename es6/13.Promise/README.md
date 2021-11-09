# Promise源码分析

## Promise函数

    1.Promise是一个函数或者一个类
    2.接收一个函数作为参数，这个函数在主作用域中，可以访问主流程的数据和变量
    3.接收的函数接收resolve,reject作为参数，用来更新prmoise的状态
    4.new Promise()之后返回表示这个异步状态的对象
    5.参考流程图: 
[流程图](https://www.processon.com/diagraming/618890b0e0b34d766810a5a8)

## then的实现

    1.then给promise对象添加回调 onFulfilled, onRejected
    2.返回一个新Promise,作为新的容器来承载后面的then
    2.then根据promise的状态执行操作
        1.1如果是pending状态，将回调函数放入回调队列中
        1.2如果是fulfilled状态，直接执行成功回调
        1.3如果是reject状态，直接执行失败回调
    3.then作为一个容器，具有对回调返回值的类型判断
        3.1如果返回值是promise,那就等这个promise执行完毕再执行回调函数
        3.2如果返回值是基本数据类型，执行then的promise的对应的状态回调

## resolvePromise

    1.resolvePromise是对promise进行处理的函数
    2.主要是同步 返回值是Promise 的问题
    3.主要功能是将then的promise的resolve，reject的控制权交给返回值的Promise.then,包括数据和内容
