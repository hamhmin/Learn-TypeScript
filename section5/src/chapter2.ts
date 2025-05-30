/**
 * 선언 합치기
 */

//  타입은 선언 합치기가 불가
type Person = {
  name: string;
};

type Person = {
  age: number;
};

// 인터페이스는 선언 합치기가 불가함.
interface Animal {
  name: string;
}

interface Animal {
  name: number; // 이경우는 충돌
  age: number;
}

const animal: Animal = {
  name: "",
  age: 16,
};

/**
 * 모듈 보강
 */

// 나중에 프로터피 c를 추가하고싶을때 interface를 추가로 작성해 보강이 가능함
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
