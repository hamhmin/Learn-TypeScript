/**
 * Unknown 타입
 */

function unknownExam(): void {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  //   다운 캐스팅
  let unknownVar: unknown;
  let num: number = unknownVar;
  let str: string = unknownVar;
  let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  //   업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //다운캐스팅
  let never1: never = 10;
  let never2: never = "string";
  let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  // 업캐스팅
  function voidFunc(): void {
    console.log("no return");
    return undefined;
  }

  //  업캐스팅
  let voidVar: void = undefined;
}

/**
 * any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;
  //다운캐스팅
  // 이지만 any는 자기가 다운캐스팅하는게 가능하다.
  anyVar = unknownVar;

  //다운캐스팅
  // 이지만 any는 자신을 다운캐스팅하는 것도 가능하다.
  undefinedVar = anyVar;

  //다운캐스팅
  // 하지만 never는 any를 다운캐스팅 할 수 없다.
  neverVar = anyVar;

  //업캐스팅은 가능
  anyVar = neverVar;
}
