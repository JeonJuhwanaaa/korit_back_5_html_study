async function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");

    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };

    console.log(data);

    // 앞 객체를 json 형태로 변환 - JSON.stringift
    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    // json을 객체 형태로 변환 - JSON.parse
//     const dataObj = JSON.parse(jsonData);
//     console.log(dataObj);


    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/jason"
        },
        body: jsonData
    };

    // await 쓸땐 try/ catch 사용
    try {
        const response = await fetch("http://localhost:8080/insert_and_select/data",option)
        
        if(!response.ok) {
            throw await response.json();
        }

        console.log(response);
    
        const json = await response.json();
    
        console.log(json);
        
        console.log("test");

    } catch(error) {
        console.log(error);
        alert(error.errorMessage);
    }

    // < 위 코드랑 동일한 값 >

    // fetch("http://localhost:8080/insert_and_select/data/addition",option)
    // .then((response) => {
    //     response.json()
    //     .then((json) => {
    //         console.log(json.data);
    //         console.log("test");
    //     });
    // }).catch((error) => {
    //     console.log("프로미스 예외처리");
    //     console.log(error);
    // });

 }