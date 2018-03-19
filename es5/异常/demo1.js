function errorObj() {
    throw 2;
}

try {
    errorObj();
} catch (e) {
    console.log(e);
} finally {
    console.log(1);
}
