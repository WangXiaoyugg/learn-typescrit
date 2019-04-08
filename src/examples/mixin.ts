/**
 * mixin 混入
 * 对象之间的混入
 * 类之间的混入
 */

// 对象之间的混入
// interface objA {
//     name: string;
// }
// interface objB {
//     age: number;
// }
// let a: objA  = {
//     name: "garen",
// }
// let b: objB = {
//     age: 30,
// }
// // ts 不认识可以使用类型断言不报错
// // let objAB = (Object as any).assign(a, b);
// // let objAB = (<any>Object).assign(a,b);
// // 修改tsconfig compilerOptions lib 属性
// let objAB = Object.assign(a,b);
// let objAB: ObjA & ObjB = Object.assign(a,b);
// console.log(objAB);


// 类之间的混入
// class Disposable {
//     isDisposed: boolean;
//     public dispose() {
//         this.isDisposed = true;
//     }
// }

// class Activatable {
//     isActive: boolean;
//     activate() {
//         this.isActive = true;
//     } 
//     deactivated() {
//         this.isActive = false;
//     }
// }
// implements 把 类当成接口，仅使用类的类型而非实现
// 为将要mixin进来的属性方法创建出占位属性
// class SmartObject implements Disposable, Activatable {
//     isDisposed: boolean = false;
//     isActive: boolean = false;
//     dispose: () => void;
//     activate: () => void;
//     deactivated: () => void;
// }

// function applyMixins(target: any, from: any []) {
//     from.forEach((fromItem) => {
//         Object.getOwnPropertyNames(fromItem.prototype).forEach((name) => {
//             target.prototype[name] = fromItem.prototype[name];
//         })
//     })
//     return;
// }

// applyMixins(SmartObject, [Disposable, Activatable]);
// const smartObj = new SmartObject();
// console.log(smartObj);

// 复习mixin混入类
class Aa {
    public name: string;
    public getName() {};
}

class Bb {
    public age: number;
    public getAge() {};
}

class AB implements Aa, Bb {
    public name: string = "garen";
    public age: number = 20;
    public getName () {};
    public getAge () {};
    constructor(options: any)  {
        this.name = options.name;
        this.age = options.age;
    };
}

const mixin = (base: any, from: any[]): void => {
    from.forEach((fromItem) => {
        Object.getOwnPropertyNames(fromItem.prototype).forEach((name) => {
            base.prototype[name] = fromItem.prototype[name];
        })
    })
}
mixin(AB, [Aa, Bb]);
const ab = new AB({name: "mike", age: 30});
console.log(ab);

// class ClassAa {
//     public isA: boolean
//     public funcA() {}
// }
// class ClassBb {
//     public isB: boolean
//     public funcB() {}
// }
// class ClassAB implements ClassAa, ClassBb {
//     public isA: boolean = false
//     public isB: boolean = false
//     public funcA: () => void
//     public funcB: () => void
//     constructor() {}
// }
// function mixins(base: any, from: any[]) {
//     from.forEach((fromItem) => {
//         Object.getOwnPropertyNames(fromItem.prototype).forEach((key) => {
//             console.log(key)
//             base.prototype[key] = fromItem.prototype[key]
//         })
//     })
// }
// mixins(ClassAB, [ClassAa, ClassBb])
// const ab = new ClassAB()
// console.log(ab)

