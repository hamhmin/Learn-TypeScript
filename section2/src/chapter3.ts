//object
// let user: object = {
//   id: 1,
//   name: "함형민",
// };
// 객체 리터럴 타입
let user: { id?: number; name: string } = {
  id: 1,
  name: "함형민",
};

user.id;

let dog: {
  name: string;
  color: string;
} = {
  name: "철이",
  color: "white",
};

//타입스크립트는 구조기준으로 하기에 구조적 타입 시스템이라 한다.
//property based type system이라고도 함.

//타 언어가 지원하는 이름기준은 명목적 타입 시스템이라 한다.

user = {
  name: "햄민  ",
  // id?: -> 선택적 프로퍼티 optional property
};

let config: { readonly apiKey: string } = {
  apiKey: "MY API KEY",
};

config.apiKey = "hacked";
// readonly ->> 수정불가능하게함.
