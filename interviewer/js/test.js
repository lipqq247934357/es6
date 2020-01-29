function b(func, wait = 500) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments)
        }, wait)
    }
}

(b(function () {
    console.log(1);
}))()