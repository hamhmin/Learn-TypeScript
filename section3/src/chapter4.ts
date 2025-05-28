/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number;
a = 1;
a = "1";

a = true;

let arr: (number | string | boolean)[] = [1, "2", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let unino3: Union1 = {
  name: "",
  language: "",
  color: "",
};

// 어디에도 속하지 않은 집합 바깥의 집합이 되어 오류가 발생한다.
let union4: Union1 = {
  name: "",
};

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;

// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

type Intersection = Dog & Person;

// 조건이 모두(Dog과 Person) 포함되어야함.
let intersection1: Intersection = {
  name: "",
  color: "",
  // language: "",
};
let intersection2: Intersection = {
  name: "",
  color: "",
  language: "",
};
