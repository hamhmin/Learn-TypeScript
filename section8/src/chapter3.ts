/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 한명의 유저 정보를 불러오는 기능

function fetchUser(): ReadonlyUser {
  ///... 기능
  return {
    id: 1,
    name: "함형민",
    age: 26,
  };
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
  //키로 id,name,age 일 수 있다.
  //값으로는 id라면 User["id"] -> number, name이면 User["name"] -> string ...
};

type BooleabUser = {
  [key in keyof User]?: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

//한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  //...수정하는 기능
}

updateUser({
  id: 1,
  name: "함형민",
  age: 25,
});

const user = fetchUser();
user.id = 1;
