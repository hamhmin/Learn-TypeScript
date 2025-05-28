/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함.
 * tagged 유니온 타입이라고도 부름
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: string;
};

type User = Admin | Member | Guest;

//Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
//Member -> {name}님 현재까지 {point}}모았습니다.
//Guest -> {name}님 현재까지  {visitCount}번 오셨습니다.
function login(user: User) {
  if ("kickCount" in user) {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    //member 타입
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    //guest 타입
    console.log(`${user.name}님 ${user.visitCount}번 오셨습니다.`);
  }

  // 위 코드를 직관적인 코드로 작성하는 경우
  if (user.tag === "ADMIN") {
  } else if (user.tag === "MEMBER") {
  } else {
  }

  switch (user.tag) {
    case "ADMIN":
    case "MEMBER":
    case "GUEST":
  }
}

/**
 * 복습겸 추가 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;
// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

//로딩 중 - > 콘솔에 로딩중 출력
//실패-> 실패 : 에러메세지 출력
//성공 -> 성공 : 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      task;
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
    }
  }

  // ?이나 !를 써주면 되지만 안전한 코드가 아님.
  // 동시에 여러가지 상태를 표현해야하는 객체의 타입을 정의 해야하는 경우엔 서로소 유니온 타입으로 타입을 분리해야 좋다.
}

const loading: AsyncTask = {
  state: "LOADING",
};
const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터",
  },
};
