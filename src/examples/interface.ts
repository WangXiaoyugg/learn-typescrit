// 普通接口
interface NameInfo {
    firstName: string;
    readonly lastName: string;
}
const getFullName = ({firstName, lastName}: NameInfo): string => {
    lastName = "abc";
    return `${firstName} ${lastName}`
}

console.log(getFullName({
    firstName: "garen",
    lastName: "Li"
}))

//  接口属性 readonly 和属性检查
interface Vegetable {
    color?: string;
    readonly type: string;
    // [prop: string]: any;
}
const getVegetables = ({color, type}: Vegetable): string => {
    return `A ${color ? (color + " ") : " "} ${type}`
}
const vegetableInfo = {
    color: 'red',
    type: "Tomato",
    size: 2,
}
let vegetableObj: Vegetable = {
    type: "Tomato",
}
// vegetableObj.type = 'carrot'; // 只读属性不能赋值
// console.log(getVegetables(vegetableInfo))

// 数组接口
interface ArrInter {
    0: number,
    readonly 1: string
}
let arr: ArrInter = [1, 'a']
// arr[1] = 2

// 函数接口
// interface addFunc {
//     (n1: number, n2:number): number;
// }
type addFunc = (n1: number, n2: number) => number;
const add: addFunc = (n1, n2) => n1 + n2;
// console.log(add(1, 3))

// 索引签名
interface RoleDic {
    [id: string]: string
}
const role1: RoleDic = {
    1: 'abc',
    a: "super_admin",
}

// 类接口和接口继承
interface Vegetables {
    color: string;
}

interface Tomato extends Vegetables {
    radius: number;
}

interface Carrot extends Vegetables {
    length: number;
}

const tomato: Tomato = {
    radius: 10,
    color: 'red',
}

const carrot: Carrot = {
    length: 2,
    color: "orange",
}

// 混合类型，一个对象可以同时作为函数和对象使用，并带有额外的属性
interface Counter {
    (): void;
    count: number;
}
const getCounter = (): Counter => {
    const c = () => {c.count++};
    c.count = 0;
    return c;
}
const counter: Counter = getCounter();
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)
