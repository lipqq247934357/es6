# 很多时候我们会发现某些方案是不行的这里总结一下

## 在手机浏览器上用户不操作界面，无法直接播放音频

    这个应该是浏览器厂商的限制，因为在浏览器上自动播放音频可能会出现恶意播放的问题；

## 某个页面window.open1个页面，然后让子页面关闭的时候返回父页面

    没有技术方案支持,因为无法在某个页签关闭的时候调用浏览器去跳到父页签
