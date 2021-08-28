function errorObj() {
    throw {name:'111', content:'22'};
}

try {
    errorObj();
} catch (e) {
    console.log(e);
} finally {
    console.log(1);
}
