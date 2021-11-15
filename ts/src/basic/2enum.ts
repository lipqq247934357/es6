/**
 * 枚举是js中没有的数据类型
 * 可以使用key和value都访问到对应的value，key；非常优秀
 * TODO: 还有部分没学，不关键
 */

//数字枚举
console.log("枚举");
enum Role {
  Spring,
  Summer,
  Autumn,
  Winter,
}


console.log(Role);

// 字符枚举

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// 异构枚举
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

// 常量枚举
// 枚举类型
// 枚举类型还可以进行比较

export default {};
