/**
 * for…in 遍历元素,item为元素的下标,主要是遍历对象方便,item为对象的key
 * for…of 遍历拥有iterator结构的数据，遍历 Array,map,set,arguments,字符串等
 */

```md
| 属性    | 遍历方法                           | 其他 |
| ------- | ---------------------------------- | ---- |
| object  | for...in；Object.keys(obj).forEach |      |
| array   | for...of；  [].forEach();          |      |
| set,map | for...of                           |      |
| 字符串  | for...of                           |      |
```