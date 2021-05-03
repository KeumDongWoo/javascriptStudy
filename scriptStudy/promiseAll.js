// promise All 여러개의 pormise 한번에 처리
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

async function process() {
   const results = await Promise.all([getDog(), getRabbit()]);
   console.log(results);
}

async function process2() {
    const [dog,rabbit] = await Promise.all([getDog(),getRabbit()]);
    console.log(dog);
    console.log(rabbit);
}

// promise all인 경우 하나라도 에러인경우 잡아냄
async function processError() {
    try {
        const first = await Promise.all([getDog(),getRabbit()]);
    }catch(e) {
        console.log(e);
    }
}

process();
process2();