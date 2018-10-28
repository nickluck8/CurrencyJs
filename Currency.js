class Currency {

    constructor(quantity = 1, ratioWithProto = 1, correlationToGold = 0.5) {
        this._quantity = quantity;
        this._ratioWithProto = ratioWithProto;
        this._correlationToGold = correlationToGold;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get ratioWithproto() {
        return this._ratioWithProto;
    }

    set ratioWithproto(value) {
        this._ratioWithProto = value;
    }

    get correlationToGold() {
        return this._correlationToGold;
    }

    set correlationToGold(value) {
        this._correlationToGold = value;
    }

    sum(currency) {
        //TODO create new object of type this
        return (this._quantity * this._ratioWithProto) + (currency._quantity * currency._ratioWithProto);
    }

    isCurrencyType() {
        return this.isPrototypeOf(Currency);
    }
}

class Hryvna extends Currency {
    constructor(quantiry) {
        super(quantiry, 0.65)
    }
}


class Dollar extends Currency {

    constructor(quantity, ratioWithProto) {
        super(quantity, ratioWithProto);
    }
}

class Canadia extends Dollar {
    constructor(quantity) {
        super(quantity, 1.2)
    }
}

let pocketMoney = new Dollar(5);
let stash = new Hryvna(200);
let total = pocketMoney.sum(stash);
// console.log(total.isCurrencyType(Dollar));
console.log(total);