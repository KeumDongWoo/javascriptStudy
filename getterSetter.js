const dog = {
    _name : "멍멍이",
    get name () {
        console.log('_name 조회');
        return this._name;
    },
    set name (value) {
        console.log(`이름변경 ${value}`);
        this._name = value;
    }
}

console.log(dog._name);
dog.name = '야옹이';
console.log(dog._name);


const numbers = {
    _a : 1,
    _b : 2,
    sum : 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a () {

    },
    get b () {

    },
    set a (value) {
        this._a = value;
        this.calculate();
    },
    set b (value) {
        this._b = value;
        this.calculate();
    }
}

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;

console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);