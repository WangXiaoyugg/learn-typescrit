/**
 * ts 中的类使用
 * 面向对象中基于类的继承实现对象，创建可重用的组件
 */

// 1. 基本类的定义
// class Point {
//     public x: number;
//     public y: number;
//     constructor(x:number, y: number) {
//         this.x = x;
//         this.y = y;
//     }

//     getPosition() {
//         return `(${this.x}, ${this.y})`
//     }
// }
// const point = new Point(100, 200);
// console.log(point);

// class Greeter {
//     public greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return `hello, ${this.greeting}`
//     }
// }
// let greeter = new Greeter("world");
// console.log(greeter.greet());

// 2. 类的继承
// class Animal1 {
//     move(distance: number = 0) {
//         console.log(`Animal moved ${distance}`)
//     }
// }
// class Dog extends Animal1 {
//     bark() {
//         console.log("wang wang wang!")
//     }
// }
// let dog1 = new Dog();
// dog1.bark()
// dog1.move(100)
// dog1.bark()

// class Parent {
//     public lastName: string = "wang";
//     public name: string;
//     constructor(firstname: string) {
//         this.name = this.lastName + " " +firstname;
//     }
// }
// class Child extends Parent {
//     constructor(firstname: string) {
//         super(firstname);
//     }
// }
// let p: Parent = new Parent('jike')
// console.log(p);
// let child: Child = new Child("mike")
// console.log(child);

class Animal2 {
    public name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`)
    }
}

class Snake extends Animal2 {
    constructor(name: string) {
        super(name);
    }
    move(distance:number = 5) {
        console.log("Snake moving...")
        super.move(distance);
    }
}

// class Horse extends Animal2 {
//     constructor(name: string) {
//         super(name);
//     }
//     move(distance: number = 45) {
//         console.log("Horse moving...")
//         super.move(distance)
//     } 
// }
// let snake = new Snake("Snake 1")
// let horse: Animal2 = new Horse("Horse 2")

// snake.move()
// horse.move()

// 3. 修饰符，public private protected readonly
// 3.1  在TypeScript里，成员都默认为 public
// class Animal3 {
//     public name: string;
//     public constructor(theName: string) {
//         this.name = theName;
//     }
//     public move(distance: number) {
//         console.log(`${this.name} moved ${distance}m.`)
//     }
// }
// 3.2  当成员被标记成 private时，它就不能在声明它的类的外部访问
// class Animal4 {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     getName():string {
//         return this.name;
//     }
// }
// let a1:Animal4 = new Animal4("garen")
//  console.log(a1.getName());
// class Animal5 {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName
//     }
// }
// class B1 extends Animal5 {
//     constructor() {super("B")}
// }
// class C1 {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// let a1  = new Animal5("dog")
// let b1 = new B1();
// let c1 = new C1("Bob");
// a1 = b1; // 类型兼容，
// a1 = c1; // 类型不兼容

// 3.3 protected成员在派生类中仍然可以访问
// class Person {
//     protected name: string;
//     // 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
//     protected constructor(name: string) {
//         this.name = name;
//     }
// }
// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }
//     public getElevator() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }
// let howard = new Employee("Howard", "Sales")
// console.log(howard.getElevator())
// console.log(howard.name); // 不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问
// let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
// 3.4 readonly readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
// class Octopus {
//     // public readonly name: string;
//     public readonly numberOfLegs: number = 8;
//     // 改成参数属性,创建和初始化 name成员。 我们把声明和赋值合并至一处。
//     constructor(readonly name: string) {
//         this.name = name;
//     }
// }
// let dad = new Octopus("Man");
// console.log(dad);
// dad.name = "Woman";

// 4. 存取器，支持通过getters/setters来截取对对象成员的访问, 只带有 get不带有 set的存取器自动被推断为 readonly
// let password = "123";
// class Employee {
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(name: string) {
//         if(password && password === '123') {
//             this._fullName = name;
//         }else {
//             console.log("Error,unauth employee")
//         }
//     }
// }
// let e1 = new Employee();
// e1.fullName = "Bob Smith";
// if(e1.fullName) {
//     console.log(e1.fullName);
// }

// 5. 静态属性 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。
// class Grid {
//     static origin = {x:0, y:0};
//     constructor(public scale: number) {}
//     calculateDistanceFromOrigin(point: {x:number, y: number;}) {
//         let x = (point.x - Grid.origin.x);
//         let y = (point.y - Grid.origin.y);
//         return Math.sqrt(x * x + y * y) / this.scale;
//     }
// }
// let grid1 = new Grid(1.0)
// let grid2 = new Grid(5.0)
// console.log(grid1.calculateDistanceFromOrigin({x:10, y: 10}))
// console.log(grid2.calculateDistanceFromOrigin({x:10, y: 10}))

// 6. 抽象类 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化
// abstract class Animal6 {
//     abstract bark(): void;
//     move(): void {
//         console.log("roaming the earch")
//     }
// }
// class Dog implements Animal6 {
//     bark() {
//         console.log("wang wang wang")
//     }
//     move() {
//         console.log("dog moving")
//     }
// }
// let d1 = new Dog();
// console.log(d1)
// abstract class Department {
//     constructor(public name: string) {

//     }
//     printName() : void {
//         console.log("Department: " + this.name)
//     }
//     abstract printMeeting(): void;

// }

// class AccountingDepartment extends Department {
//     constructor() {
//         super("Accounting and Auditing")
//     }
//     printMeeting(): void {
//         console.log("The Accounting Department meets each Monday at 10am.")
//     }
//     generateReports(): void {
//         console.log('Generating accounting reports...');
//     }
// }
// let department: Department; // 允许创建一个对抽象类型的引用
// // department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在， 不能调用

// 7. 构造函数
// class Greeter {
//     static standardGreeting = "Hello, there";
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return "Hello, " + this.greeting;
//         }
//         else {
//             return Greeter.standardGreeting;
//         }
//     }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());

// 8. 类当作接口使用
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
let Point3d: Point3d = {x:1, y:2, z: 3}
console.log(Point3d);
class A1 {
    protected name: string
}
interface I extends A1 {}
class B1 extends A1 implements I {
    public name: string
}


