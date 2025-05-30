/**
 * 함수 타입 호환성
 * 특정  함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업캐스팅
b = a; // 다운캐스팅

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; // 업캐스팅이지만 매개변수의 경우는 호환이 안됨.
d = c; // 다운캐스팅이지만 매개변수의 경우 호환이 됨.

type Animal = {
  name: string; // 조건이 적은 타입이 슈퍼타입
};

type Dog = {
  name: string; // 조건이 많은 타입이 서브타입
  color: string; // 조건이 많은 타입이 서브타입
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc; // 업캐스팅
dogFunc = animalFunc; // 다운캐스팅

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.color); // type Animal 에는 color가 없으니 업캐스팅을 막아주는것이다.
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name); // type Animal 과 Dog 에 모두 name이 있으니 다운캐스팅이 가능한 것이다.
};

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
func2 = func1;
//매개변수 개수가 다를땐 매개변수 개수가 더 적은 쪽으로 담지 못함.
