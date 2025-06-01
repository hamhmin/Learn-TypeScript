/**
 * 제네릭
 * 포괄적인 일반적인
 */

function func(value: unknown) {
  return value;
}

let num = func(10);
// num.toUpperCase();
// num.toFixed();

if (typeof num === "number") {
  num.toUpperCase();
  num.toFixed();
}
let bool = func(true);
let str = func("string");

//제네릭 함수
// 함수를 호출할 때 매개변수의 타입을 추론
function funcZ<T>(value: T): T {
  return value;
}
let numZ = funcZ(10);
numZ.toUpperCase();
numZ.toFixed();

let boolZ = funcZ(true);
let strZ = funcZ("string");

let arr = funcZ<[number, number, number]>([1, 2, 3]);
