//비구조화 할당 예제

//객체 비구조화 값 추가
const object = {a:1};
const {a,b = 2} = object;

console.log(a);
console.log(b);

//객체 비구조화 할당 값 변경
const animal = {
    name : '멍멍이',
    type : '개'
};

const {name : nickname} = animal;
console.log(nickname);
console.log(animal);

//배열 비구조화 할당
const array = [1];
const [one,two = 2] = array;

console.log(one);
console.log(two);

//객체에 깊숙한곳에 있는값을 가져오기
const deepObject = {
    state : {
        information : {
            name2 : 'dongwoo',
            languages : ['korean','english','chinese']
        }
    },
    value : 5
}

const {name2 , languages} = deepObject.state.information;
const {value} = deepObject;

const extracted = {
    name2,
    languages,
    value
};

console.log(extracted);