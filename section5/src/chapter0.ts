/**
 * 인터페이스
 */

// interface IPerson {
interface Person {
  readonly name: string;
  age?: number;
  //sayHi: () => void;
  sayHi(): void; // 위와 동일함
  sayHi(a: number, b: number): void;
  //   sayHi: (a: number, b: number) => void;
  //인터페이스에서 함수 오버로딩을 사용하기 위해선 위와 같이 함수타입표현식을 쓰면 못알아먹음
  // 메서드의 오버로딩을 구현하고싶다면 호출 시그니처를 사용해야함.
}

type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person = {
  name: "함형민",
  sayHi: function () {
    console.log("hi");
  },
};

person.name = "떙";

person.sayHi();
person.sayHi(1, 2);
