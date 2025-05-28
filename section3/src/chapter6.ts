/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "함형민";
person.age = 26;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "철",
  color: "white",
  breed: "말티즈",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 -> 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입 이어야한다.
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as string;
// 다중 단언시 단언 안되는 단언이 가능해짐. 사용을 지양할 것
let num3Multi = 10 as unknown as string;

/**
 * const 단언
 */

// const로 선언 한 것처럼 된다.
let num4 = 10 as const;
num4 = 1;

// 읽기전용 객체가 된다.
let cat = {
  name: "나비",
  color: "black",
} as const;

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "함형민",
};

// 타입에 ?로 값이 있을수도 없을수도 있다 알렸을때
// 옵셔널체이닝에 ?이 자동으로 추가되고, autor가 없을 수 있으니
const len1: number = post.author?.length;
// undefined 타입을 추가하거나
const len2: number | undefined = post.author?.length;
// author뒤에 !을 넣어준다. !은 값이 무조건 있을거다라고 알려줌
const len3: number = post.author!.length;
