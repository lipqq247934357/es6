/**
 * 泛型约束
 *
 * 泛型可以应用于接口，类，函数
 */

interface length {
    length: number
}

function log<T extends length>(param: T) {
    return param.length;
}


/**
 *
 * 泛型的好处:
 *  1.函数和类可以轻松的支持多种类型，增强程序的扩展性
 *  2.不必写多条函数重载，冗长的联合类型声明，增强代码可读性
 *  3.灵活控制类型之间的约束
 */
