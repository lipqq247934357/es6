function getSocketInfo() {
    // 1.获取所有监听的事件
    const eventNames = _socket.eventNames();
    console.log(eventNames);  // 输出所有已注册事件的名称

    eventNames.forEach(item => {
        const listeners = _socket.listeners(item);
        console.log(listeners);  // 输出监听器的数组
    })
    console.log('_socket.subscriptions', _socket.subscriptions);
}