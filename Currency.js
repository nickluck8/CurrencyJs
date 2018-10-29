function Currency(quantity, ratioWithProto, sign) {
    this.quantity = quantity || 1;
    this.ratioWithProto = ratioWithProto || 1;
    this.sign = sign || '$';
    this.sum = function (currency) {
        this.quantity = this.quantity * this.ratioWithProto + currency.quantity * currency.ratioWithProto;
        return this;
    };


    this.isCurrencyType = function () {
        return this instanceof Currency;
    }
}

function Dollar(quantity, ratioWithProto, sign) {
    Dollar.count++;
    Object.setPrototypeOf(this, new Currency(quantity, ratioWithProto));

    this.getCount = function () {
        return Dollar.count;

    };

    this.getQuantity = function () {
        return this.quantity + ' ' + this.sign;
    }
}

function CanadDollar(quantity) {
    Object.setPrototypeOf(this, new Dollar(quantity, 1.2, 'CAD'));
}

function Hryvna(quantity) {
    Object.setPrototypeOf(this, new Currency(quantity, 0.65, 'hrn'));
}

Dollar.count = 0;

let pocketMoney = new Dollar(5);
let stash = new Hryvna(200);
let total = pocketMoney.sum(stash);
console.log(total.getQuantity());
console.log(total.isCurrencyType(Dollar));
console.log(total.getCount());


// class Currency {
//
//     constructor(quantity = 1, ratioWithProto = 1, correlationToGold = 0.5) {
//         this._quantity = quantity;
//         this._ratioWithProto = ratioWithProto;
//         this._correlationToGold = correlationToGold;
//     }
//
//     get quantity() {
//         return this._quantity;
//     quantity, ratiioWithProto
//
//     set quantity(value) {
//         this._quantity = value;
//     }
//
//     get ratioWithproto() {
//         return this._ratioWithProto;
//     }
//
//     set ratioWithproto(value) {
//         this._ratioWithProto = value;
//     }
//
//     get correlationToGold() {
//         return this._correlationToGold;
//     }
//
//     set correlationToGold(value) {
//         this._correlationToGold = value;
//     }
//
//     sum(currency) {
//         //TODO create new object of type this
//         return (this._quantity * this._ratioWithProto) + (currency._quantity * currency._ratioWithProto);
//     }
//
//     isCurrencyType() {
//         return this.isPrototypeOf(Currency);
//     }
// }
//
// class Hryvna extends Currency {
//     constructor(quantiry) {
//         super(quantiry, 0.65)
//     }
// }
//
//
// class Dollar extends Currency {
//     static counter = 0;
//
//     constructor(quantity, ratioWithProto) {
//         super(quantity, ratioWithProto);
//         Dollar.counter++;
//     }
//
// }
//
// class Canadia extends Dollar {
//     constructor(quantity) {
//         super(quantity, 1.2)
//     }
// }
//
// let pocketMoney = new Dollar(5);
// let pocketMoney1 = new Dollar(5);
// let pocketMoney2 = new Dollar(5);
// let pocketMoney3 = new Dollar(5);
// console.log(pocketMoney.counter);
// let stash = new Hryvna(200);
// let total = pocketMoney.sum(stash);
// // console.log(total.isCurrencyType(Dollar));
// console.log(total);