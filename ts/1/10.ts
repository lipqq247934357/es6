/**
 *
 * 泛型：预先定义的，不确定的，运行时确定的类型
 * @param name
 */

function log2<T>(name: T): T {
    return name;
}

log2([1, 2, 3]);

interface Log<T> {
    (value: T): T
}
