// and 연산자 or 연산자 응용

// and 연산자
// 앞에 값이 true 인경우 뒤에값을 return 또한 false 인경우 앞에값을 던짐
console.log(true && 'hello'); 
console.log(false && 'hello');
console.log('hello' && 'bye');
console.log(null && 'hello');
console.log(undefined && 'hello');
console.log('' && 'hello');
console.log(0 && 'hello');
console.log(1 && 'hello');
console.log(1 && 1);


// or 연산자
// 앞에값이 true 인 경우 앞에 값을 또한 앞에 값이 false 인 경우 뒤에 값을 던짐
console.log(false || 'hello');
console.log('' || '이름이없다');
console.log(null || 'NULL 입니다');
console.log(undefined || 'defined 되지 않았다!');
console.log(0 || '제로다');