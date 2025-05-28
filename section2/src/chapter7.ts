// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hamhmin";
}

function func2(): void {
  console.log("hello");
}
func2();

// let a: void;
// a = 1;
// a = "hamhmin";
// a = {};
// a = undefined;
// a = null;

// "strictNullChecks": false 를 하면 예외적으로 null을 넣을 수 있음

//never
//never -> 존재하지 않는
// 불가능한 타입, 모순

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let a: never;
a = 1;
a = {};
a = "";
a = undefined;
a = null;
let anyVar: any;

a = anyVar;
