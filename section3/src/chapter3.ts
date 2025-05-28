/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

// 조건이 더 적은 타입이 슈퍼타입이 된다.
type Animal = {
  name: string;
  color: string;
};

// 조건이 더 많은 타입이 서브타입이 된다.
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "처리",
  color: "white",
  breed: "말티즈",
};

//슈퍼타입 = 서브타입 -> 업캐스팅
animal = dog;

// 서브타입 = 슈퍼타입 -> 다운캐스팅
dog = animal;

type Book = {
  name: string;
  price: number;
};
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "리액트 대마왕",
  price: 16800,
  skill: "reactjs",
};

book = programmingBook; // 업캐스팅
programmingBook = book; // 다운캐스팅

/**
 * 초과 프로터피 검사
 */

// type Book = {
//   name: string;
//   price: number;
// };
let book2: Book = {
  name: "리액트 대마왕",
  price: 16800,
  skill: "reactjs",
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "리액트 대마왕",
  price: 16800,
  skill: "reactjs",
});
func(programmingBook);
