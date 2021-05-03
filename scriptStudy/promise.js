//비동기처리 예제
const myPormise = new Promise((resolve,reject) => {
    setTimeout(() => {
            resolve('result');
    }, 1000)
});

myPormise.then(result => {
    console.log(result);
});

// 비동기처리 예제 2
function increaseAndPrint(n) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const value = n + 1;
            if(value === 5) {
                const error = new Error();
                error.name = 'values five error';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        },1000);
    });
}

increaseAndPrint(0).then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch(e => {
        console.error(e);
    });