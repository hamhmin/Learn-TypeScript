//배열
let number: number[] = [1, 2, 3];

let str: string[] = ["hello", "im", , "hyungmin"];

let boolArr: Array<boolean> = [true, false, true];

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr1: (string | number)[] = [1, "str"];
let multiArr2: Array<string | boolean> = [true, "str"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플
// 길이와 타입이 고정된 배열
let tup1: [number, string] = [1, "2"];
// tup1 = [1, true];
let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = [2, "3", 1];

const users: [string, number][] = [
  ["left1", 1],
  ["left2", 2],
  ["left3", 3],
  ["left4", 4],
  [5, "right1"],
];
