// 基本类型的定义

// 布尔类型
let bool: boolean;
bool = false;
// bool = 123;

// 数字类型
let num:number;
num = 123;
// num = '123';

// 字符串类型
let str: string = 'hello'
str = 'good'
// str = 123;

// 数组类型
// 写法1
let arr1: number[];
arr1 = [1,2,3,4]
// arr1 = ['1', 2,3]
// 写法2
let arr2: Array<number>;
arr2 = [1,3,4,5];
let arr3: (number | string)[];
arr3 = [1,'2', 3,]

// 元组类型
let tuple:[string, number, boolean];
tuple = ['abc', 123, false]

// 枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN = 5,
    USER,
}
// console.log(Roles[0]);
// console.log(Roles.ADMIN);
// console.log(Roles.USER);

// any 类型 不希望编译器对值进行检查
let val:any;
val = 1;
val = '2';
val = false;
let list: any[] = [1, true, "free"];

// void 类型, 可以赋值为undefined 和 null
let v:void;
v = undefined;
v = null;
function warnUser(): void {
    console.log("warnging message")
}

// Null 和undefined, 是所有类型的子类型
let u: undefined = undefined;
let n: null = null;
num = u;

// Never 类型，表示永不存在的值的类型，也是任何类型的子类型
// 1. 总会刨除异常没有返回值
function error(message:string):never {
    throw new Error(message);
}
// 2. 推断返回值是never
function fail() {
    return error("something failed")
}
// 3. 返回never 函数必须存在无法到达的终点
function infiniteLoop():never {
    while(true) {}
}

// Object 类型
function setObj(o: object):void {
    console.log(o)
}
console.log(setObj({a:1,b:2}))


// 类型断言，告诉typescript 不进行特殊的数据检查和解构
const getMsgLength = (msg: (string|number)):number => {
    if((<string>msg).length || (msg as string).length === 0) {
        return (msg as string).length;
    } else {
        return msg.toString().length;
    }
}
console.log(getMsgLength('abc'))



