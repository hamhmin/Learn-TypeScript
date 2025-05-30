/**
 * 인터페이스의 확장
 */

// 유연한 확장이 가능하며 객체타입을 유용하게 사용 가능. 타입별칭보다 이점이 있다.

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // 상속하는 Animal이 원본 프로퍼티의 타입은 수퍼타입이 된다.
  // Dog의 프로퍼티 타입을 재정의 하고자 한다면
  // Dog의 재정의 타입이 Animal 원본프로퍼티 타입의 서브타입이어야함.
  // name: "iron"; // string <- string 리터럴 o / string리터럴 <- string x
  // age: number;
  isBark: boolean;
}

const dog: Dog = {
  name: "iron",
  age: 2,
  isBark: true,
};

interface Cat extends Animal {
  // name: string;
  // age: number;
  isScratch: boolean;
}

interface DogCat extends Dog, Cat {} // 다중확장도 가능.

const dogCat: DogCat = {
  name: "",
  age: 16,
  isBark: false,
  isScratch: true,
};

interface Chicken extends Animal {
  // name: string;
  // age: number;
  isFly: boolean;
}
