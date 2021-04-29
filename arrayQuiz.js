// 패스트캠퍼스 퀴즈
function countBiggerThanTen(numbers){
    return counts = numbers.reduce((acc,current) => {
        if(current > 10){
            return acc += 1;
        } else {
            return acc;
        } 
    },0);
}

const count = countBiggerThanTen([1,2,3,5,10,20,30,40,50,60]);
console.log(count); //5