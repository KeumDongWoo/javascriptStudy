//arrow Function 예제 
const hello = () => {
    console.log('hello');
};

//매개변수가 하나일경우 괄호생략가능
const hello2 = name => {
    console.log('hello2' , name);
}

const hello3 = (name,age) => {
    console.log('hello3',name,age);
}

//함수의 리턴
const hello4 = name => {
    return  `hello4 ${name}`
}

const hello5 = name => `hello5 ${name}`;