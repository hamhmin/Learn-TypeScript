/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}
function getPropertyKey1(person: Person, key: "name" | "age") {}
function getPropertyKey2(person: Person, key: keyof Person) {}
// keyof Person은 "name"|"age" 로 변경된다, 문자열 리터럴 타입의 유니온 타입으로 변경됨
function getPropertyKey3(person: Person, key: keyof typeof personTypeOf) {
  return person[key];
}

const person: Person = {
  name: "함형민",
  age: 26,
};

getPropertyKey3(person, "name"); // 함형민

// typeof를 타입 정의시 사용하면 typeof 뒤에 오는 곳에서 타입을 뽑아온다.
type PersonTypeOf = typeof personTypeOf;
const personTypeOf = {
  name: "함형민",
  age: 26,
};
