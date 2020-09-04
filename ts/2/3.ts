/**
 * 类型保护
 *
 * 创建一个区块，在这个区块中保证变量属于某个类型
 */

enum Type {
    Strong,
    Weak
}

class Java {

}

class JavaScript {

}

function getLanguage(type: Type) {
    let val = type === Type.Strong ? new Java() : new JavaScript();

    // instanceof
    if (val instanceof Java) {
        console.log(val);
    }

    // in

    // typeof

    // 类型保护函数

}
