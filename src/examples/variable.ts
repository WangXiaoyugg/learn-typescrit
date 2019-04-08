/**
 * 变量声明
 * let & const
 */

 // 1. 作用域规则
 // 1.1 var 多次声明同一个变量不会报错
//  function f(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//         var x = 10;
//     }

//     return x; // 没定义却返回undefined,不报错
// }

// f(true);  // returns '10'
// f(false); // returns 'undefined'

// 里层的for循环会覆盖变量i，因为所有i都引用相同的函数作用域内的变量。
function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
console.log(sumMatrix([[1,2],[1,1]])) // 是3不是5

//  捕获变量怪异之处， 打印10个10
// 传给setTimeout的每一个函数表达式实际上都引用了相同作用域里的同一个i
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }
// 是使用立即执行的函数表达式（IIFE）来捕获每次迭代时i的值
// for (var i = 0; i < 10; i++) {
//     (function(i){
//         setTimeout(function() { console.log(i); }, 100 * i);
//     })(i)
// }

// 2. let 块级作用域
function f1(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        // b的作用域是if语句块里
        return b;
    }

    // Error: 'b' doesn't exist here
    // return b;
}
// catch 语句也有作用域
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}
// Error: 'e' doesn't exist here
// console.log(e);

// 3. let tdd 暂时性死区， 它们不能在被声明之前读或写。
// a++; // illegal to use 'a' before it's declared;
// let a;
// function foo() {
//     // okay to capture 'a'
//     return a;
// }

// // 不能在'a'被声明前调用'foo'
// // 运行时应该抛出错误
// foo();

// let a;

// 4. let 不能多次重定义
// let x = 10;
// let x = 20; // 错误，不能在1个作用域里多次声明`x`

// function f(x) {
//     let x = 100; // error: interferes with parameter declaration
// }

// function g() {
//     let x = 100;
//     var x = 100; // error: can't have both declarations of 'x'
// }

// 并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明。
function f2(condition:any, x:any) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f2(false, 0); // returns 0
f2(true, 0);  // returns 100

// 在一个嵌套作用域里引入一个新名字的行为称做屏蔽
// function sumMatrix1(matrix: number[][]) {
//     let sum = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (let i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }

//     return sum;
// }
// console.log(sumMatrix1([[1,2], [1,1]]))

// 针对 每次迭代都会创建这样一个新作用域
// for (let i = 0; i < 10 ; i++) {
//     setTimeout(function() {console.log(i); }, 100 * i);
// }

// 4. const 声明， 它们被赋值后不能再改变。
// 实际上const变量的内部状态是可修改的。 幸运的是，TypeScript允许你将对象的成员设置成只读的
// const numLivesForCat = 9;
// const kitty = {
//     name: "Aurora",
//     numLives: numLivesForCat,
// }

// Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };

// all "okay"
// kitty.name = "Rory";
// kitty.name = "Kitty";
// kitty.name = "Cat";
// kitty.numLives--;

// 5. let vs const
// 使用最小特权原则，所有变量除了你计划去修改的都应该使用const

// 6. 块级作用域变量的获取
// function theCityThatAlwaysSleeps() {
//     let getCity;
//     // ，每次进入一个作用域时，它创建了一个变量的 环境。 
//     // 就算作用域内代码已经执行完毕，这个环境与其捕获的变量依然存在。
//     // if 执行完，city环境和其补获变量依旧存在
//     if (true) {
//         let city = "Seattle";
//         getCity = function() {
//             return city;
//         }
//     }

//     return getCity();
// }

// // 6. 解构
// let input = [1, 2];
// let [first, second] = input;
// console.log(first); // outputs 1
// console.log(second); // outputs 2
// function f3([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// f3([1,2]);
// let [first1, ...rest] = [1, 2, 3, 4];
// console.log(first1); // outputs 1
// console.log(rest); // outputs [ 2, 3, 4 ]
// let o = {
//     a: "foo",
//     b: 12,
//     c: "bar"
// };
// // let { a, b } = o;
// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;

// function keepWholeObject(wholeObject: { a: string, b?: number }) {
//     let { a, b = 1001 } = wholeObject;
// }

// type C1 = { a: string, b?: number }
// function f4({ a, b }: C1): void {
//     // ...
// }
// function f5({ a="", b=0 } = {}): void {
//     // ...
// }
// f5();

// function f6({ a, b = 0 } = { a: "" }): void {
//     // ...
// }

// 7. 展开

let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
// 出现在展开对象后面的属性会覆盖前面的属性
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
// 它仅包含对象 自身的可枚举属性， 你展开一个对象实例时，你会丢失其方法
class C2 {
    p = 12;
    m() {
    }
  }
let c = new C2();
let clone = { ...c };
console.log(clone);
clone.p; // ok
// clone.m(); // error!

// TypeScript编译器不允许展开泛型函数上的类型参数。

