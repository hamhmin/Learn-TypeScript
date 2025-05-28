//any
//특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};
// anyVar.toUpperCase();
// anyVar.toFixed();
let num: number = 10;
num = anyVar;

console.log(num);
//타 타입 변수에 any타입 변수 값을 넣을 수 있다.
// any타입 사용시 런타임 에러가 발생 할 수 있다.

//unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

num = unknownVar;
//타 타입 변수에 unknown타입 변수 값을 넣을 수 없다. 하지만
// 타입 좁히기로 타입 정제를하면 넣을 수 있다.
if (typeof unknownVar === "number") {
  num = unknownVar;
}
