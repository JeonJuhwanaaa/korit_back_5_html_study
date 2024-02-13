// 1.Use strict
// added in ES5
// user this for valina Javescript.
'use strict';

// 2.Variable, read/write 가능
// let (added in ES6)
// Block scope - {} 지역변수 전역변수와 비슷한 개념

let globalName = 'golbal name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever user this!)
// var hoisting (move declaration from bottom to top) - 어디에 선언했냐에 상관없이 항상 제일위로 끌어올려주는 것
// 호출을 먼저하고 선언을 나중에 해도 오류없이 사용가능함
// has no block scope 

console.log(age);
{ 
    age = 4;
    var age;
}

// 3.Constants, only read
// use const whenever possible.
// only use let if variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// immutable data types: premitive type, frozen objects
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons :
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive(더이상 작은 단위로 나눠질수없는 한가지 아이템), single item: number, string, boolean, null, undefiedn,symbol
// object(싱글 아이템들을 여러개 묶어서 한 단위로/한 박스로 관리할수있게 해줌), box container
// function, first-class function
const count = 17; //integer
const size = 17.1; //dedcimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, nagativeInfinity, Nan
const infinity = 1 / 0;
const nagativeInfinity = -1 / 0;
const Nan = 'not a number' / 2;
console.log(infinity)
console.log(nagativeInfinity)
console.log(Nan)

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literabls(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log(`value: ` + helloBob + `type: ` + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRed = true;
const test = 3 < 1; //false
console.log(`value: ${canRed}, type: ${typeof canRed}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undifined
let x;
console.log('value: ${x}, type: ${typeof x}');

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // 똑같은지 확인
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // .for 을 붙이면 같다고 나온다
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`) // .description 붙여서 string 타입으로 변환

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;
console.log(ellie)

// 5. Dynamic typing: dynamically typed language
let text = 'hello'; // string 타입
console.log(text.charAt(0))
console.log(`value: ${text}, type: ${typeof text}`); //string 타입으로 나옴
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number 타입으로 나옴
text = '7' + 5; // string + number -> string 으로
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // string / string 하면 number타입으로 
console.log(`value: ${text}, type: ${typeof text}`);