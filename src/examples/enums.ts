/**
 * 枚举 栗子
 * 
 */

// 1.数字枚举, 支持表达式和计算值
// let index = 0;
// const getIndex = () => {
//     return index++;
// }
// enum Status {
//     Pending = getIndex(),
//     Resolve = getIndex(),
//     Reject = getIndex(),
// }
// console.log(Status.Pending);
// console.log(Status.Resolve);
// console.log(Status.Reject);

// 2. 反向映射
// enum Switch {
//     On,
//     Off,
// }
// console.log(Switch.On);
// console.log(Switch[0]);
// console.log(Switch);

// 3. 字符串枚举，不支持表达式和计算值, 不支持反向映射
// enum Member {
//     VIP = "vip",
//     Customer = "customer",
//     SVIP = "super vip",
//     VIP2 = VIP,
// }
// console.log(Member);

// 4. 异构枚举，支持混合字符串和数字，使用场景比较少, 数字的枚举仍然支持反向索引
// enum NumeberAndString {
//     Yes = "YES",
//     No = 0,
// }
// console.log(NumeberAndString);

// 5. 枚举成员满足三种条件, 只能是枚举成员的值
// 1. enum E{X}
// 2. enum E {X = "a"}
// 3. enum E {X = 1}
enum Animal {
    Dog = 1,
    Cat = 2,
}
interface Dog {
    name: Animal.Dog
}
let dog: Dog = {
    name: Animal.Dog,
}

//6. 联合枚举类型
// enum E1 {
//     Foo,
//     Bar,
// }

// function fn(x: E1) {
//     if (x !== E1.Foo || x !== E1.Bar) {
//         //             ~~~~~~~~~~~
//         // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//     }
// }

// 7. 运行时的枚举, 枚举定义的成员是运行时真正存在的对象
// enum Rect {
//     length = 10,
//     width = 5,
// }
// function getRectArea(obj: {length: number, width: number}): number {
//     return obj.length * obj.width;
// }
// console.log(getRectArea(Rect));

// 8. const 枚举，编译代码不生成枚举对象
// const enum Direction {
//     UP,
//     Down,
//     Left,
//     Right    
// }
// let directions = [Direction.UP, Direction.Down, Direction.Left, Direction.Right]
// // 生成的代码 var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */]
// // console.log(directions);

// 9. 外部枚举,描述已经存在的枚举类型形状
// 正常的枚举里，没有初始化方法的成员被当成常数成员。 
// 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的
declare enum Enum {
    A = 1,
    B,
    C = 2,
}