// 1. String concatenation
console.log('my' + 'cat'); //문자열 + 문자열 -> 새로운 문자열
console.log('1' + 2); // 문자열 + 숫자 -> 숫자가 문자열로 변환돼서 합쳐짐
console.log(`string literals: 1 + 2 = ${1 + 2}`); // 변수값을 계산해서 String으로 포함해서 문자열로 만든다

// 2.Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators / ++, --
let counter = 2;
const preIncrement = ++counter; // 3
// counter = counter + 1; --> counter에 1을 더하고 그 값을 counter에 대입하는거랑 같음
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter --> 먼저 counter 값을 postIncrement 에 넣고 +1
// counter = counter +1
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators - 할당
let x = 3;
let y = 6;
x += y; // x = x+y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators - 비교
console.log(10 < 6) // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6) // greater than
console.log(10 <= 6) // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value - 처음으로 true가 나오면 뒤에껀 실행 안하고 거기서 멈춘다
console.log(`or: ${value1 || value2 || check()}`);

// && (and), 전부가 참이어야 true로 리턴, 처음부터 false 이면 뒤에껀 실행 xx

console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i ++) {
        //wasting time
        console.log('aa');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equlity, with type conversion - 타입을 변경해서 검사 string 이나 number 나 같다고 나옴
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equlity, no type conversion - 타입을 신경써서 검사하기때문에 다른 타입이면 다르다고 나옴
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equlity by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // 각각 서로 다른 방(레퍼런스)이니깐 false
console.log(ellie1 === ellie2); // 타입이 같든 다르든 레퍼런스가 달라서 false
console.log(ellie1 === ellie3);
// equality - puzzler
console.log(0 == false); //0,null,undefined 은 false 로 간주될수있어서 true
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null === undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if(name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ? - 삼항연산자
// condition ? value1 : value2; - 간단할 때만 사용
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for muliple if checks
// use for enum-like value check
// use for muliple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('lover you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11.Loops
// while loop, while the condition is truthy,
// body code is executed.

// do while loop,

// for loop,