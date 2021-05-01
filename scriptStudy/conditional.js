//조건문을 더스마트하게 써보기 예제


// 조건문 쓰지않고 isAnimal처럼 처리하는게 깔끔함
function isAnimal(text) {
    const animals = ['개','고양이','뱀','거북이'];
    return animals.includes(text);
}

// isAnimal = isAnimal2 같은행위
const isAnimal2 = text => ['개','고양이','뱀','거북이'].includes(text);

function isAnimal3(text) {
    return (text === '개' || text === '고양이' || text === '뱀' || text === '거북이');
}

console.log(isAnimal('고양이'));



// getSound 보다 getSound2 처럼 처리하는게 깔끔함
function getSound(animal) {
    if(animal === '개') return '멍멍';
    if(animal === '고양이') return '야옹';
    if(animal === '거북이') return '거북거북';
    return '.....?'; 
}

function getSound2(animal) {
    const sounds = {
        개 : '멍멍',
        고양이 : '야옹',
        거북이 : '거북거북'
    }
    return sounds[animal] || '.....?'
}