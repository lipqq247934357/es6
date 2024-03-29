/**
 * 1.返回的是一个对象(module.exports属性）,这个对象之后在运行完代码之后才产生，是运行时加载的；
 *  1.1对于基本数据类型，因为值传递的原因，所以原来的值变化不会改变这个值
 *  1.2对于引用类型，因为传递的是一个指针，指向的是同一个区域，所以原来的值变化也会引起新值的变化
 * 2.重复引用返回的是一个单例对象（js高程第四版）
 * 3.是同步加载；
 * 4.支持动态加载（写到if 里面）
 */

require('./m1.js');