/**
 * 以使用泛型来创建可重用的组件，
 * 一个组件可以支持多种类型的数据。
 */ 

 // 1. 打印函数只支持数字，
//  function echo<>(arg: T) :T {
//     console.log(arg);
//     return arg;
//  }
// echo(123);
// 变成了any,失去了类型检查的功能
// echo('hello world');
// // 改成泛型就支持了
// echo<string>("hello");
// echo<number>(12343);
// echo(123);

// 2. 泛型变量, 变成数组不会有问题
// function logIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);
//     return arg;
// }

// 3. 泛型类型
// let myIdentity: <U>(arg: U) => U;
// myIdentity = function identity<T>(arg: T): T {
//     return arg;
// }

// interface GenericFn {
//     <T>(arg: T): T;
// }

// interface GenericFn<T> {
//     (arg: T): T;
// }
// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity:GenericFn<number> = identity;


// 4. 泛型类
// class Generic<T> {
//     value: T;
//     add: (x: T, y: T) => T
// }
// let myGen = new Generic<number>()
// myGen.value = 0;
// myGen.add = function(x,y) {return x + y};
// let stringNumeric = new Generic<string>();
// stringNumeric.value = "";
// stringNumeric.add = function(x, y) { return x + y; };
// console.log(stringNumeric.add(stringNumeric.value, "test"));

// 5. 泛型约束
// interface LengthWise {
//     length: number;
// }
// function log <T extends LengthWise>(arg: T): T {
//     console.log(arg.length)
//     return arg;
// }

// // log(3);
// log({length: 10, value: 3})

// 5.1 泛型中使用类型参数
let x = {a:1, b:2, c:3, d:4}
// function getProperty(obj:any, key:any) {
//     return obj[key]
// }
// getProperty(x, 'a');
// getProperty(x, 'e'); // 但是e 属性不存在 x 对象上

// function getProperty<T, K extends keyof T>(obj: T, key: K) : T[K]{
//     return obj[key];
// }
// getProperty(x, 'a');
// getProperty(x, 'e'); 

// 5.2 在泛型中使用类类型
// 工厂函数，需要引用构造函数类类型
function create<T>(c: {new(): T}): T {
    return new c()
}
// 使用原型属性推断并约束构造函数和实例的关系
class A {
    hasMask: boolean;
}
class B {
    name: string;
}
class C {
    age: number
}
class D extends C {
    keeper: A;
}

class E extends C {
    keeper: B;
}

function createInstance < A extends C>(c: new () => A):A {
    return new c();
}

createInstance(E).keeper.name;
createInstance(D).keeper.hasMask;



 