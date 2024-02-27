main();

function main() {
    const promises = [
        new Promise((resolve, reject) => setTimeout(() => resolve(1),3000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(2),2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3),1000))
    ];

    Promise.all(promises).then(result => console.log(result));

}

// 실행이 다끝나면 한번에 다같이 실행하고싶다 -> Promise.all
// promise 동작이 다 끝나면 - then 실행해라 - result를 넣어서 promise 배열값들이 서로 끝나는 시간이 달라도 모든
// 배열의 값이 실행이 끝나면 한번에 결과값을 내라