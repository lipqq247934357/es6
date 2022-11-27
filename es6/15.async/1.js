const a = async () => {
    let res;
    if (1 > 100) {
        res = await a()
    } else {
        res = await b()
    }
    console.log('res', res)
}