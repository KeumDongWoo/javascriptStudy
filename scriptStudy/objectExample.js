//비구조화 할당
const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
}

const captionAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
}

function print(hero){
    const {name , actor , alias} = hero; // 비구조화 할당
    const text = `${alias} (${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

//비구조할당 2
function print2({name , actor , alias}){ 
    const text = `${alias} (${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captionAmerica);