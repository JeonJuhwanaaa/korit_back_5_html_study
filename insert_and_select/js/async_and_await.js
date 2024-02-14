// < async >
// async 를 붙이면 return 값이 promise객체로 기본적용 - return이 resolve 역할
// return이 없어도 기본적으로 resolve로 적용
async function fx1() {
    console.log("fx1 비동기 호출");
    return 10;
    // throw Error로 값을 지정하면 reject로 적용
    // throw new Error();
}

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num + " 출력");
}

async function fx3() {
    let arg = 0;
    // < await > (비동기를 동기로 바꿔주는 함수)- fx1의 return값을 바로 변수에 담아준다
    let fx1Result = await fx1();
    arg = fx1Result;
    fx2(arg);
    // ( await을 쓰면 밑에 코드보다 간략하게 사용가능 )
    // fx1().then((result) => {
    //     arg = result;
    //     console.log(arg);
    //     fx2(arg);
    // });

}

// 그냥 console.log에 fx1을 호출 시 promise 객체로 받음
// then에서 return 값을 받아 처리
function handleSubmitClick2() {
    // console.log(fx1());
    // fx1().then((result) => {
    //    console.log("then 호출");
    //    console.log(result);
    // }).catch(() => {
    //    console.log("오류 생성");
    // });
    //
    // console.log("동기 실행");

    // await은 async 함수 안에서만 쓸수 있다
    fx3();
}

// -----------------------------------------------------------------------

function handleSubmitClick() {
    const p1 = new Promise((resolve, reject) => {
        console.log("p1 프로미스 실행");
        // resolve();
        reject();
    });

    // Promise에서 resolve가 호출이 되야지만 then이 실행
    // return 받은 값을 다음 then 에 전달
    // then은 순서대로 동기처리가 됨
    // then을 이어서 받다가 catch로 받을수도 있다
    p1.then(() => {
        console.log("p1 then 실행")
        return 10;
    }).then((num) => {
        console.log(num);
    }).then(() => {
        console.log("3번째 then")
    }).catch(() => {
        console.log("오류")
    });

    // reject가 호출되야지만 catch 실행 
    p1.catch(() => {
        console.log("오류");
    });
    
    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });

    console.log("동기 실행");
}

