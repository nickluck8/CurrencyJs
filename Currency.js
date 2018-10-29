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


class CurrencyOOP {

    constructor(quantity = 1, ratioWithProto = 1, sign = '$') {
        this._quantity = quantity;
        this._ratioWithProto = ratioWithProto;
        this._sign = sign;
    }

    sum(currency) {
        this.quantity = this.quantity * this.ratioWithProto + currency.quantity * currency.ratioWithProto;
        return this;
    }

    isCurrencyType() {
        return this instanceof Currency;
    }
}

class HryvnaOOP extends CurrencyOOP {
    constructor(quantiry) {
        super(quantiry, 0.65, 'hrn')
    }
}


class DollarOOP extends CurrencyOOP {

    constructor(quantity, ratioWithProto, sign = '$') {
        super(quantity, ratioWithProto, sign);
        DollarOOP.counter++;
        console.log(DollarOOP._counter)
    }

    // static get counter() {
    //     DollarOOP._counter = (DollarOOP._counter || 0) + 1;
    //     return DollarOOP._counter;
    // }

}

DollarOOP.counter = 0; //TODO static var es6 ??????

class CanadiaOOP extends DollarOOP {
    constructor(quantity) {
        super(quantity, 1.2, 'CAD')
    }
}

let pocketMoney1 = new DollarOOP(5);
let pocketMoney11 = new DollarOOP(5);
let pocketMoney2 = new DollarOOP(5);
let pocketMoney3 = new DollarOOP(5);
// console.log(pocketMoney1.counter);
let stash1 = new HryvnaOOP(200);
let total1 = pocketMoney1.sum(stash);
// console.log(total.isCurrencyType(Dollar));
console.log(total);