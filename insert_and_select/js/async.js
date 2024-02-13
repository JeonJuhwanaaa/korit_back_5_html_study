// --동기처리(위에서 아래로 순서대로 실행)--
console.log(1);
console.log(2);
console.log(3);

// --비동기처리(순서에 상관없이 실행)--
// 3초 뒤에 4 실행 후 2초 뒤 5 실행
// setTimeout(() => {
//     console.log(4);
//     setTimeout(() => {console.log(5)
//     }, 2000);
// }, 3000);       

// --promise 형태는 자체가 비동기 이다 (생성이됨과 동시에 실행) resolve, reject 를 받는다--
// resolve가 실행되면 then 이 받게되고 , reject(오류일 때 사용)가 실행되면 catch가 받게된다
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("1번");
//     }, 2000);
//     resolve("3번");
// }).then((result) => {
//     console.log(result);
// });

// console.log("2번");


console.log("프로그램 시작");

const p = new Promise((resolve, reject) => {
    console.log("여기서");
    console.log("여기까지");
    resolve();
});

p.then(() => {
    console.log("3초 뒤에 출력");
});

console.log("여기가 먼저");