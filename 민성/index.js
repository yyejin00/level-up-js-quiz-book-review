// console.log('1' + 1);
// console.log(1 + '1');
// console.log('1' - 1);

// console.log(Boolean('0'));
// console.log(Boolean(0));

// console.log(typeof []);
// console.log(Array.isArray([]));

// let a;
// let b = null;

// console.log(typeof a);
// console.log(typeof b);

let result = 'hello' + false;
console.log(`${result}, ${typeof result}`);

result = 'hello' + null;
console.log(`${result}, ${typeof result}`);

result = 6 + undefined;
console.log(`${result}, ${typeof result}`);

const number1 = 0.1 + 0.2;
console.log(number1.toFixed(2));

const weather = '맑음';
const temp = 21;
const message = `오늘의 날씨는 ${weather}\n현재 기온은 ${temp}도입니다.`;

console.log(message);

console.log(String.raw`오늘의 날씨는 ${weather}\n현재 기온은 ${temp}도입니다.`);

console.log(String.raw`${message}`);

console.log(9999999999999999);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 2);
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2);
console.log(BigInt(Number.MAX_SAFE_INTEGER) + BigInt(2));
