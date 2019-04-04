// 1. 为函数添加类型
// function add1(x: number, y:number) : number {
//     return x + y;
// }
// let add1 = (x:number, y: number):number  => x + y;
// console.log(add1(1, 2))

// 2. 书写函数类型, 只要参数类型匹配即可，不要求类型匹配
// let myAdd: (x:number, y:number) => number;
// myAdd = function(x:number, y: number):number  {
//     return x + y;
// }

// let myAdd1: (baseValue: number, increment: number) => number =
//     function(x: number, y: number): number { return x + y; };

// 3.推断类型
// let multi: (x:number, y:number) => number;
// multi = (x,y) => x * y;
// multi(1,2);

// 4. 可选参数和默认参数
// let fullName = (firstName: string, lastName: string): string => {
//     return  firstName + " " + lastName
// }
// let result1 = fullName("Bob", 'Adam');

// 4.1 可选参数, 必须跟在必选参数后面，否则要调整位置
// let fullName = (firstName: string, lastName?: string): string => {
//     if(lastName) return firstName + " " + lastName
//     return  firstName 
// }
// let result1 = fullName("Bob");

// 4.2 默认参数
// let fullName = (firstName="Wang", lastName?: string): string => {
//     if(lastName) return firstName + " " + lastName
//     return  firstName 
// }
// let result1 = fullName();
// let result2 = fullName("Abc")
// console.log(result2);

// 4.3 剩余参数
// let fullName = (firstName="Wang", ...restName: string []): string => {
//     if(restName) return firstName + " " + restName.join(" ")
//     return  firstName 
// }
// let res = fullName("1","2", "3", "4")
// console.log(res);

// 5. this
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// 此时this 指向window 不是deck 实例
// 改成jian箭头函数就可以，在函数返回函数；
// let pickedCard = cardPicker();
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// 5.1 this 参数, 提供显示的this参数，this参数是个假的参数，它出现在参数列表的最前面：】
function f(this: void) {}

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return  () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}    
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// 5.2 this参数在回调函数，通过this为参数来避免
interface UIElement {
    // this void does not require a this type;
    addClickListener(onClick: (this: void, e: Event) => void): void;
}

let uiElement = {
    addClickListener(cb: (this: void, e: Event) => void): void{

    }
}
class Handler {
    info: string;
    // 指定了this类型后，你显式声明onClickBad必须在Handler的实例上调用。 
    // 然后TypeScript会检测到 addClickListener要求函数带有this: void。 
    // 改变 this类型来修复这个错误
    // onClickBad(this: void, e: Event) {
    //     console.log('clicked')
    // }

    onClickBad = (e: Event) => { this.info = e.type}
}
let h = new Handler()
uiElement.addClickListener(h.onClickBad);





// 6. 重载，函数根据传入不同的参数返回不同的类型数据是很常见，重载如何做类型检查
// let suits = ["heart", "spades", "clubs", "diamond"];

// function pickCard(x: {suit: string; card: number;}[]):number;
// function pickCard(x: number): {suit: string; card: string};
// function pickCard(x): any {
//     if(typeof x == 'object') {
//         let pickCard = Math.floor(Math.random() * x.length);
//         return pickCard;
//     }

//     else if (typeof x == 'number') {
//         let pickSuit = Math.floor(x / 13);
//         return {suit: suits[pickSuit], card: x % 13};
//     }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);