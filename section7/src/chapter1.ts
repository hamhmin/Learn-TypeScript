/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}
const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 * */

//그러면 return data[1]이면 여러 타입을 매개변수로 전달하였을 때 이때 반환값을 추론하게 하고싶다면 어떻게 해야할까
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[1];
}

let num = returnFirstValue([0, 1, 2]);
// 0
let str = returnFirstValue(["1", "2", "3"]);
// "1"

let mix = returnFirstValue([1, "2", true]);

/**
 * 세번째 사례
 */

//T 는 number 타입의 length 프로퍼티를 갖고있는 타입이 된다.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}
let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
let var4 = getLength(10);
