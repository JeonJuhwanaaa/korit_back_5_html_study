main();

// P1,2,3 전부 비동기
function main () {

    p1(3, "data1").then(result => console.log(result));

    setTimeout(() => p2("data2").then(result => console.log(result)), 4000);

    p2("data3").then(result => p3(result, 100).then(result => console.log(result)));

    p4("data4");

    console.log("출력");
    
}


function p1(time,data) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        },time * 1000);
    });
}

// async 를 다는 순간 p2 는 promise 이다
async function p2(data) {
    return data;
}

// data가 key값이 되고 value 값
async function p3(data, value) {
    return {
        [data]: value
    }
}

// async 달지않으면 await 쓸 수 없음
// await을 달면 p2의 리턴값을 r1으로 대입
async function p4(data) {
    const r1 = await p2(data);
    const r2 = await p3(r1, 200);

    console.log(r2);
}