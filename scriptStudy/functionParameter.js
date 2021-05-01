// 함수의 기본 파라미터 
function calculateCircleArea(r = 1) { // r = 1 >> r 이존재하지 않을때 기본값
    // const radius = r  || 1; >> r = 1과 같은행위
    return Math.PI  * r * r;
}

const calculateCircleArea2 = (r = 1) => Math.PI  * r * r; // 위함수랑 같은행위

const area = calculateCircleArea();
console.log(area);