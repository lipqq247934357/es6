// async function a() {
//     try {
//         let b = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(11);
//             }, 100);
//         });
//         return b;
//     } catch (e) {
//         console.log(1111);
//         // throw e;
//     }

// }
// let c = a();
// console.log(c);

async function aa () {
    if(true) {
        return await new Promise(() );
    }
}


