// spread 연산자

// spread 연산자 (기존 객체 복사)
const slime = {
    name : '슬라임'
};

const cuteSlime = {
    ...slime, // ... >> spread 연산자
    attribute : 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color : 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

// spread 연산자 배열 사용
const animals = ['개','고양이','새'];
const anotherAnimals = [...animals, '참새']; // animals.concat(animals) 와 같음

console.log(animals);
console.log(anotherAnimals);

const numbers = [1,2,3,4,5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);