/**
 * 类型兼容性
 * */

 // 1. 基础 x要兼容y，那么y至少具有与x相同的属性
interface Named {
     name: string;
}
let x1: Named;
let y1 = {name: "alice", age: 20};
x1 = y1;


 // 2. 函数兼容性
 // 2.1 函数参数个数 
//  y1有个额外的location属性，但这不会引发错误
function greet(n: Named) {
    console.log("hello, " + n.name);
}
greet(y1);



// 忽略参数在js中很常见
let items = [1,2,3]
items.forEach((item, index, array) => console.log(item))
items.forEach(item => console.log(item))
// 2.2 函数参数类型
//  注意的是参数的名字相同与否无所谓，只看它们的类型
let x2 = (a: number) => 0;
let y2 = (b: number, s:string) => 0;
y2 = x2;
// 因为y有个必需的第二个参数，但是x并没有，所以不允许赋值。
// x2 = y2;



 // 2.3 函数返回值
 let x3 = () => ({name: 'garen'})
 let y3 = () => ({name: 'mary', location:"hefei"})
 x3 = y3;
 // y3 = x3; // 返回值类型必须是目标函数返回值类型的子类型
 
 // 2.4 可选参数和剩余参数 都是兼容的;
let foo = (x:number, y: number) => {};
let bar = (x?: number, y?: number) => {};
let bas = (...args: number[]) => {};
// foo 和bar 在 strictNullChecks 为 false 时兼容
foo = bar = bas;
bas = bar = foo;
bas = foo = bar;

 // 2.5 函数参数双向协变, 支持常见的事件处理方案
 let fnA = (args: number | string):void=> {};
 let fnB = (args: number):void => {};
 fnA = fnB;
 fnB = fnA;

 // 2.6 函数重载

 // 3. 枚举兼容性

 // 4. 类兼容性

 // 5. 泛型兼容性