main();


function main() {

    new Promise((resolve, reject) => {
        console.log(1);
        console.log(2);

        setTimeout(() => {
            console.log(4);
            resolve();
        },3000);

    }).then(() => {
        console.log("then실행");
    });

    console.log(3);
    
}

// 우선 비동기도 같이 위에서부터 실행이되고 
// resolve가 실행될 때 then 실행
// resolve의 매개변수를 넣으면 then의 매개변수로 받을 수 있다
