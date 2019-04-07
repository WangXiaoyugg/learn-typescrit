/**
 * “声明合并”是指编译器将针对同一个名字的两个独立声明合并为单一声明。
 * 合并后的声明同时拥有原先两个声明的特性
 * TypeScript中的声明会创建以下三种实体之一：命名空间，类型或值。
 */

// 1. 接口合并
// interface Rect {
//     width: number;
//     getArea(w:number, height: number):number;
// }
// interface Rect {
//     height: number;
//     getArea(w:string, height: string): string;
//     // width: string;
// }
// let rect: Rect = {
//     width: 10,
//     height: 10,
//     getArea: (x:any, y:any):any  => {
//         if(typeof x === 'string') {
//             return x + " "+ y
//         } else {
//             return x *y
//         }
//     }
// }
// console.log(rect.getArea(1,2));
// console.log(rect.getArea("hello", "world"));

// 2. 命名空间合并
// namespace Validation {
//     export const numberReg = /^1\d{10}/
//     export const checkNumber = () => {};
// }
// namespace Validation {
//     console.log(numberReg);
//     export const checkEmail = () => {};
// }

// 3. 命名空间和类合并
// class Validation {
//     public version: string;
//     public static: () => {}; 
//     public checkNumber: () => {};
// }
// namespace Validation {
//     export const numberReg = /^1\d{10}$/;
// }
// console.dir(Validation);

// 4. 命明空间和函数合并
// function buildName(name: string): string {
//     return buildName.prefix + name;
// }
// namespace buildName {
//     export const prefix = " Wang ";
// }
// console.log(buildName("Garen"))

// 5. 命名空间和枚举合并, 合并的命名空间没有反向映射
enum Color {
    red,
    blue,
    green,
}

namespace Color {
    export const yellow = 4;
}
console.log(Color);

// 6. 非法合并，类不能与其它类或变量合并。 想要了解如何模仿类的合并，


