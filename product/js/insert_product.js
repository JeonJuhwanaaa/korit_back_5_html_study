/**
 *  servlet 프로젝터명: product
 *  group_id: com.study
 *  artifact_id: product
 *  name: product
 *  jdk: 11
 *  dependencies:
 *      1.lombok
 *      2.jsp
 *      3.gson
 *      4.mysql
 *  package:
 *      com.study.product
 *          config  -   DBConfig
 *          dao     -   ProductDao
 *          entity  -   Product
 *          filter  -   CommonFilter
 *          servlet 
 *                  -   InsertProductServlet(/product, POST)
 *                  -   SearchProductServlet(/products, GET)
 *  DB(db_study)
 *  table(product_tb)
 *  product_id, product_name(유니크(중복확인)), product_price, product_size(SS, S, M, L, XL, XXL)
 * 
 */

async function handleAddClick() {
    const productInputs = document.querySelectorAll(".product-inputs");

    const product = {
        name: productInputs[0].value,
        price: productInputs[1].value,
        size: productInputs[2].value
    };

    const jsonProduct = JSON.stringify(product);
    console.log(jsonProduct);

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonProduct
    };

    try {
        const response = await fetch("http://localhost:8080/product/product", option);

        if(!response.ok) {
            throw await response.json();
        }
        console.log(response);

        const json = await response.json();

        console.log(json);
    } catch(error) {
        console.log(error);
        alert(error.errorMessage);
    }
}