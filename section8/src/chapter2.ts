/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

// function getPropertyKey(person:Person, key:"name"|"age") {
// function getPropertyKey(person: Person, key: keyof Person) {
function getPropertyKey(person: Person, key: keyof typeof personTypeOf) {
  return person[key];
}

const person: Person = {
  name: "함형민",
  age: 26,
};

getPropertyKey(person, "name"); // 함형민

// typeof를 타입 정의시 사용하면 typeof 뒤에 오는 곳에서 타입을 뽑아온다.
type PersonTypeOf = typeof personTypeOf;
const personTypeOf = {
  name: "함형민",
  age: 26,
};
