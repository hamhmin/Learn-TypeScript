/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기한다.
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다. 출력
function func(value: number | string | Date | null | Person) {
  value;
  value.toUpperCase();
  value.toFixed();

  // 타입 가드 // 이후엔 타입을 자동으로 추론해준다.
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "object") {
    // object로 좁히게 되면 Date와 null의 합집합인 타입을 가진다.
    console.log(value.getTime());
  }
  if (value instanceof Date) {
    //그래서 이렇게 instanceof 를 사용해야함.
    console.log(value.getTime());
  }
  if (value instanceof Person) {
  } // instanceof는 타입 객체엔 활용 불가

  if (typeof value === "number" || typeof value === "string") {
  } else if (value && "age" in value) {
    // value의 타입이 객체인 조건문은
    // 매개변수에 적용된 Person을 제외한 타입들이 모두 아님을 증명 한 뒤
    // 객체에 키가 있는지 확인하는 방식으로 진행되어야하는듯하다.
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
