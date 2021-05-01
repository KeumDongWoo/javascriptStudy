//rest 연산자

//객체안에 값 없애기
const purpleCuteSlime = {
    name : '슬라임',
    attribute : 'cute',
    color : 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);

//배열안에서 rest
const numbers = [0,1,2,3,4,5];
const [one, ...rest2] = numbers;
console.log(one);
console.log(rest2);

//함수파라미터에서 rest
function sum(...rest3) {
    return rest3.reduce((acc ,current) => acc + current, 0);
}
console.log(sum(1,2,3,4,5,6));

//함수인자에서의 spread
function sum2(...rest3) {
    return rest3.reduce((acc2 ,current2) => acc2 + current2, 0);
}
const numbers2 = [1,2,3,4,5,6]
console.log(sum2(...numbers2));