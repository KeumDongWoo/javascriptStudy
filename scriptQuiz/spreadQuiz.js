// 함수 n 개의 숫자들이 파라미터로 주어졌을때 , 그 중 큰 값을 알아내세요
function max(...rest) {
    return rest.reduce((acc,current) => {
        console.log(`acc ${acc} , current ${current}`);
        if (current > acc) {
            return current;       
        } else {
            return acc;
        }
    } ,rest[0]);
}

const result = max(1,2,3,4,10,5,6,7);
console.log(result);