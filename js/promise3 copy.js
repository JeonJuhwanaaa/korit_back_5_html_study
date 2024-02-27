main();

// Promise.all 쓰지말고 [1, 2, 3] 한번에 나오게 하기
// resolve는 매개변수로 무조건 하나만 받을 수 있음 -> 배열형태로
// 비구조할당

function main() {


    new Promise((resolve, reject) => {
        let result = [];
        setTimeout(() => {
            resolve([result, 1])
        },3000);

    }).then(([result, num]) => {
        result.push(num);

        new Promise((resolve, reject) => {
        
            setTimeout(() => {
                resolve([result, 2])
            },2000);
    
        }).then(([result, num]) => {
            result.push(num);
   
            new Promise((resolve, reject) => {
        
                setTimeout(() => {
                    resolve([result, 3])
                },1000);
        
            }).then(([result, num]) => {
                result.push(num);

                return result;
                
            }).then(r => console.log(r));
        });
    });

}
