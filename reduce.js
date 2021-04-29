//reduce 예제 상당히 유용함
const numbers = [1,2,3,4,5];

let sum = 0
numbers.forEach(n => {
    sum += n;
});

console.log(sum);


// 위에서 하는행위랑 같음
const sum2 = numbers.reduce((accumulator , current) => accumulator + current, 0);
console.log(sum2);

// 배열의 평균
const sum3 = numbers.reduce((accumulator , current , index , array) => {
    if(index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);
console.log(sum3);

// 누적값
const alphabets = ['a','a','a','b','c','c','d','e'];
const counts2 = alphabets.reduce((acc, current) => {
    if(acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
},{});
console.log(counts2);
