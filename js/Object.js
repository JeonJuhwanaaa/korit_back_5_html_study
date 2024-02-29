const menu1 = {
    path: "/test/menu",
    params: {
        page: 1,
        searchValue: "테스트"
    }
}

const result = "/test/menu?page=1&seachValue=테스트";

// /test/menu? 까지 나타내기
const result2 = menu1.path + "?"
console.log(result2);

// 배열안에 키값들만 가져오기
const keys = Object.keys(menu1.params);
console.log(keys);

// value값들만 가져오기
const values = Object.values(menu1.params);
console.log(values);

// 배열안에 [key,value] 들이 있는 배열을 가져오기
// const entries = Object.entries(menu1.params);
// console.log(entries);

// const entries = Object.entries(menu1.params);
// console.log(entries.map(entry => entry[0] + "=" + entry[1]));

// 비구조할당 사용
// page=1&searchValue=테스트 값 만들기
const entries = Object.entries(menu1.params);
console.log(entries.map(([key , value]) => key + "=" + value).join("&"));

const names = ["김준일", "김준이", "김준삼"];
const name2 = names.join("&");
console.log(name2);