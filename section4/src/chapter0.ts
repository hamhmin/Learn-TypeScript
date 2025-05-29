/**
 * 함수 타입 정의
 */

//함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

// ?로 선택적 매개변수로 지정, 선택적매개변수 쓰려면 필수 매개변수를 좌항에 놓기
function introduce(name = "함형민", tall?: number, age: number) {
  console.log(`name: ${name}`);
  console.log(`tall: ${tall + 10}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}
introduce(1, "te");
introduce("함형민");
introduce("함형민", "");

// function getSum(...rest: number[]) { // 배열
function getSum(...rest: [number, number, number, number, number]) {
  //튜플
  let sum = 0;
  rest.forEach((item) => (sum += item));
  return sum;
}

getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); //15
