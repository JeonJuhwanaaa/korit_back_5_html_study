main();

// Promise.all 쓰지말고 [1, 2, 3] 한번에 나오게 하기
// resolve는 매개변수로 무조건 하나만 받을 수 있음

function main() {

    let result = [];

    // promise 실행 - setTimeout실행(비동기) - resolve에 1 넣어주면 then이 num으로 1을 받고 result에 배열로 값 대입
    new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(1)
        },3000);

    }).then(num => {
        result = [...result, num];

        // result에 1만 넣은 상태에서 두번째 promise 실행 - resolve에 2 넣고 then실행 - result에 [1, 2] 쌓임 
        new Promise((resolve, reject) => {
        
            setTimeout(() => {
                resolve(2)
            },2000);
    
        }).then(num => {
            result = [...result, num];
            
            // 마지막으로 result에 3까지 넣기
            new Promise((resolve, reject) => {
        
                setTimeout(() => {
                    resolve(3)
                },1000);
        
            }).then(num => {
                result = [...result, num];
                
                return result;
                // 마지막 then은 all.then 과 같다
            }).then(r => console.log(r));
        });
    });

}
