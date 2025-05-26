//타입 별칭
//같은 스코프에서 중복되지 않아야함.

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  type User = {};
}

let user: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "함형민",
  nickname: "햄민",
  birth: "2000.03.02",
  bio: "하이요",
  location: "산호",
};

let user2: User = {
  id: 2,
  name: "누군가",
  nickname: "의별명",
  birth: "1990.01.01",
  bio: "안녕",
  location: "남미",
};

//인덱스 시그니처
type CountryCodes = {
  // Korea:string;
  // UnitedState: string;
  // UnitedKindom: string;
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKindom: "uk",
};

type CountryNumberCodes = {
  // 인덱스 시그니처는 규칙 위반을 비교할 프로퍼티가 없다면 오류라고 명시하지않음.
  [key: string]: number;
  // Korea: string; // 위 규칙과 동시 불가
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  // UnitedState: 840,
  // UnitedKindom: 826,
};

let countryNumberAndStringCodes: CountryCodes = {
  Korea: "ko",
};
