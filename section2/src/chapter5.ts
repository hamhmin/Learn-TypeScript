//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 수 지정 하지 않으면 첫 지정수(없다면 첫 지정수는 0)에 +1 된 값을 갖는다.
enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "함형민",
  role: Role.ADMIN, // 0<-관리자
  language: Language.korean,
};

const user2 = {
  user: "허도개",
  role: Role.USER, //1<-일반 유저
};

const user3 = {
  user: "허무장",
  role: Role.GUEST, //2<-게스트
};

console.log(user1, user2, user3);
