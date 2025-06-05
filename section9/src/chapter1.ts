/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 유니온 타입이 들어가면 각각 조건식을 타고 결과가 유니온타입으로 묶인다.
// 그래서 c의 타입은 number | string이다.
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;
//T=number U = string -> number 반대면 never

type A = Exclude<number | string | boolean, string>;
//1단계
//Exclude<number,string>
//Exclude<string,string>
//Exclude<boolean,string>

//2단계
// number
// never
// boolean

// 결과
// number | never | boolean
// union타입에 never타입이 포함되어있으면 never타입은 사라짐
// never=공집합 타입
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
//1단계
//Extract<number, string>
//Extract<string, string>
//Extract<boolean, string>

//2단계
// never
// string
// never

// 결과
// string

//조건부 타입이 분산적으로 처리되지않게 하려면
// type StringNumberSwitch<T> = [T] extends number ? string : number;
// extends 앞 T에 대괄호로 감싸주면 분산적 처리가 방지된다.
