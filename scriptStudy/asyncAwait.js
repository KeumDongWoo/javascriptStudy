// async await 예제
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function process() {
    console.log('안녕!');
    await sleep(1000);
    console.log('바이!');
    return true;
}

process().then(value => {
    console.log(value);
});

// async await Error 예제
async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function process2() {
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}