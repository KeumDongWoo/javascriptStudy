function biggerThanThree(numbers) {
    let numberArray = [];
    for(let number in numbers) {
        if(numbers[number] < 4){
            continue;
        }else {
            numberArray.push(numbers[number]);
        }
    }

    return numberArray;
}

const numbers = [2,2,3,4,5,6,7];

console.log(biggerThanThree(numbers)); // [4,5,6,7]