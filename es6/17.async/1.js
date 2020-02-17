/**
 *
 * async 实现原理
 *  async 实际是一个自动执行器执行generator函数，返回值都被promise包装一下
 *
 */

function fn(args) {
    return spawn(function* () {
        // ...
    });
}

/**
 *
 * @param genF
 * @returns {Promise<any>}
 */

function spawn(genF) {
    return new Promise(function (resolve, reject) {
        const gen = genF();

        function step(nextF) {
            let next;
            try {
                next = nextF(); // 异步操作，操作完成返回结果
            } catch (e) {
                return reject(e);
            }
            if (next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(function (v) {
                step(function () {
                    return gen.next(v);
                });
            }, function (e) {
                step(function () {
                    return gen.throw(e);
                });
            });
        }

        step(function () {
            return gen.next(undefined);
        });
    });
}