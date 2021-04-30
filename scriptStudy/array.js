// array 예제
const animal = ['멍멍이','토끼','고양이'];
const index = animal.indexOf('토끼');   //indexOf
console.log(index);

const todos = [
    {
        id : 1,
        text : '하이',
        done : true
    },
    {
        id : 2,
        text: '멍멍',
        done : false
    },
    {
        id : 3,
        text: '꿀꿀',
        done : true
    }
]

console.log('------------ findIndex ------------');
const index2 = todos.findIndex(todo => todo.id === 3);  // findIndex
console.log(index2);

console.log('------------ find ------------');
const todo = todos.find(todo => todo.done === false);   // find
console.log(todo);

// filter 특정배열에서 특정조건에 부합되는 값 추출
console.log('------------ filter ------------');
const taskNotDone = todos.filter(todo => todo.done);    //filter
console.log(taskNotDone);

//splice 기존의배열을 건드림
console.log('------------ splice ------------');
const numbers = [10,20,30,40,50];
const index3 = numbers.indexOf(30);
const spliced = numbers.splice(index3,1);
console.log(spliced);
console.log(numbers);

//slice 기존의배열을 건드리지않음
console.log('------------ sliced ------------');
const numbers2 = [10,20,30,40,50];
const sliced = numbers2.slice(0,2);
console.log(sliced);

//shift 배열 첫번째부터 하나씩뺌
console.log('------------ shfit ------------');
const numbers3 = [10,20,30,40];
const value3 = numbers3.shift();
console.log(value3);
console.log(numbers3);

//pop 뒤에서 하나씩뺌
console.log('------------ POP ------------');
const numbers4 = [10,20,30,40];
const value4 = numbers4.pop();
numbers4.pop();
console.log(numbers4)
console.log(value4);

//unshift 배열 맨앞에 하나추가
console.log('---------- unshift ---------');
const numbers5 = [10,20,30,40];
numbers5.unshift(5);
console.log(numbers5);

//push 배열에 넣음
console.log('--------- push ---------');
const numbers6 = [10,20,30,40];
numbers6.push(5);
console.log(numbers6);

//concat 배열을 합침
console.log('--------- concat ---------');
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const concated = arr1.concat(arr2);
console.log(concated);

//join 배열을 문자열형태로 바꿈
console.log('-------- join ----------');
const array1 = [1,2,3,4,5];
console.log(array1.join());
console.log(array1.join(' '));
console.log(array1.join(', '));