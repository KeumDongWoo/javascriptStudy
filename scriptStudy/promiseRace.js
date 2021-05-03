//promise Race 예제 (빨리끝난값만 추출)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이'
}

const getRabbit = async () => {
    await sleep(500);
    return '토끼'
}

async function process2() {
    const first = await Promise.race([getDog(),getRabbit()]);
    console.log(first);
}

// promise race인 경우 첫번째값이 에러인경우만 잡아냄
async function processError() {
    try {
        const first = await Promise.race([getDog(),getRabbit()]);
    }catch(e) {
        console.log(e);
    }
}

processError();
process2();