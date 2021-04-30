//객체 생성자 예제 (객체 생성자의 함수는 대문자로 시작)
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

//prototype 과 같은행위
function Animal2(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function () {
        console.log(this.sound);
    }
}

//객체안에 추가
Animal.prototype.say = function () {
    console.log(this.sound);
}

function Dog(name, sound) {
    Animal.call(this,'개',name,sound);
}

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이','멍멍');
const cat = new Cat('야옹이','야옹');

dog.say();
cat.say();