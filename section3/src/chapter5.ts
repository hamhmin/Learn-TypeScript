/**
 * 타입 추론
 */

let a = 10;

//함수의 매개변수는 타입추론 못함
function func(param) {}

let b = "hhm";

let c = {
  id: 1,
  name: "함형민",
  profile: {
    nickname: "hamhmin",
  },
  urls: ["https://hamhmin.com"],
};

let { id, name, profile, urls } = c;

let [one, two, three] = [1, "hhm", true];

// 함수는 반환값 기준으로 추론함
// 매개변수는 기본값 기준으로 추론함
function func2(message = "hello") {
  if (Math.random()) {
    return "hello";
  } else {
    return 2;
  }
}

//변수 선언시 값이 없을 때 any 타입의 진화 / 암묵적 any타입 지정
let d;

//number
d = 10;
d.toFixed();

//string
d = "h";
d.toUpperCase();

// 명시적 any타입 지정
let e: any;
//any
e = 10;
e.toFixed();
//any
e = "h";
e.toUpperCase();

// const는 값이 변경되지 않으므로 타입 추론시 리터럴타입으로 지정된다.
const num = 10;
const str = "hhm";

let arr = [1, "string"];
