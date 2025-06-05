/**
 * infer
 * inference -> 추론하다
 */

type FuncA = () => string;
type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;
type ReturnType<T> = T extends () => infer R ? R : never;

// infer(R)는 <>에 담은타입이 참이되도록 타입을 추론한다

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;

type C = ReturnType<number>; // never , 추론 불가

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; // number

type PromiseB = PromiseUnpack<Promise<string>>; // string
