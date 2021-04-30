// truthy and falsy
function print(person) {
    if(person === undefined || person === null){ //이렇게 처리하기엔 귀찮음
        return;
    }
    if(!person) { // 이렇게 처리하는게 좋음
        return;
    }
    console.log(person.name);
}

const person = {
    name : 'John'
};

print();


//이아래는 falsy한 값들 이와다른아이들은 전부 truthy
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);

const value = null;
const truthy = !!value; // falsey -> false , truthy -> truthy
console.log(truthy);