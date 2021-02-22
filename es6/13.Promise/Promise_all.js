// promise.all 如何让某个promise返回reject的情况下仍然可以正常返回呢？

// 地址： https://juejin.cn/post/6844903959010738189

// 可以对每个promise的结果都用then包装一下，这样即使reject仍然会返回正确的结果

