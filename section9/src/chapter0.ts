/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // number
// A는 number가 string을 확장하는 타입이냐, 참string 거짓number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string

let varB: StringNumberSwitch<string>; // number
function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im hamhmin");
result.toUpperCase();
console.log(result);

let result2 = removeSpaces(undefined);
