/**
 * 类型推论
 */

// 1. 基础, 没有明确指出类型，类型推论会提供类型
// 推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时
// let x1 = "x";

//2. 最佳通用类型
//有两种选择： number和null。 计算通用类型算法会考虑所有的候选类型，并给出一个兼容所有候选类型的类型。 
// let y = [0,1,null];


// class Animal {
//     name: "animal";
// }
// class Dog extends Animal {
//    wang():void {
//        console.log("wang wang wang")
//    }
// }
// class Cat extends Animal {
//     miao():void {
//         console.log("miao miao miao")
//     }
// }
// // 如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型
// let zoo = [new Dog(), new Cat()] // (Dog|Cat)[]
// // 想让zoo被推断为Animal[]类型，但是这个数组里没有对象是Animal类型的,强行更正
// let zoo1: Animal[] = [new Dog(), new Cat()]

// 3.上下文类型 类型推论也可能按照相反的方向进行。 这被叫做“按上下文归类”
// TypeScript类型检查器使用Window.onmousedown函数的类型来推断右边函数表达式的类型。
//  因此，就能推断出 mouseEvent参数的类型了
// 如果上下文类型表达式包含了明确的类型信息，上下文的类型被忽略
// window.onmousedown = function(mouseEvent: any) {
//     console.log(mouseEvent.button);
// }

// 4. 上下文归类会在很多情况下使用到。
// 通常包含函数的参数，赋值表达式的右边，类型断言，对象成员和数组字面量和返回值语句。
class Animal {
    kind: "animal";
}
class Dog extends Animal {
   wang():void {
       console.log("wang wang wang")
   }
}
class Cat extends Animal {
    miao():void {
        console.log("miao miao miao")
    }
}
// 最佳通用类型有4个候选者：Animal, Dog, Cat。 当然， Animal会被做为最佳通用类型。
function createZoo(): Animal[] {
    return [new Dog(), new Cat()]
}