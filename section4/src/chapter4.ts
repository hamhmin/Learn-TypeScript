/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  // 반환값이 참이면 animal은 Dog이다.
  return (animal as Dog).isBark !== undefined; // (animal as Dog)이라고하면 타입을 Dog이라고 좁혀줌
}
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  // if ("isBark" in animal) {
  if (isDog(animal)) {
    //강아지
    animal;
  } else if (isCat(animal)) {
    //고양이
    animal;
  }
}

i guess just inner strength, not wanting to be a victim. it's not what happens to you it's how you handle what happens to you