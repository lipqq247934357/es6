let book = {};
Object.defineProperty(book,"year",{
    get(){
        console.log('get');
    },set(){
        console.log('set');
    }
})


book.year = 4;
console.log(book.year);