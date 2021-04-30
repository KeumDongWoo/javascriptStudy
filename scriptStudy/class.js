// 클래스 예제
class Animal {
    constructor(type,name,sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say () {
        console.log(this.sound);
    }
}

//상속
class Dog extends Animal {
    constructor(name,sound) {
        super('개',name,sound);
    }
}

class Cat extends Animal {
    constructor(name,sound) {
        super('고양이',name,sound);
    }
}

const dog = new Dog('멍멍이','멍멍');
const cat = new Cat('야옹이','야옹');

dog.say();
cat.say();


class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }

    addBrand(brand) {
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name}을 파는 음식점들 :`);
        console.log(this.brands.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('도미노');
pizza.print();

const chicken = new Food('치킨');
chicken.addBrand('네네치킨');
chicken.print();
