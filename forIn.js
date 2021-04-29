// for in 예제

const doggy = {
    name : '멍멍이' ,
    sound : '멍멍' ,
    age : 2
}

for (let key in doggy) {
    console.log(`${key} : ${doggy[key]}`);
}