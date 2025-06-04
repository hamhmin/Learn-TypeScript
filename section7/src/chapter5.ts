/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject): void => {
  setTimeout(() => {
    resolve(20);
    reject("~~때문에 실패");
  }, 2000);
});

promise.then((response) => {
  console.log(response * 10); // 20
});

promise.catch((err) => {
  // catch는 인수가 any로 타입이 추론된다. 그래서 타입 좁히기로 써야함
  console.log(err);
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

// 두 방법 모두 가능하다
// 함수에 선언 부분에 하는 것이 협업 부분에 있어 가독성이 좋다.
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    // function fetchPost() {
    //   return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
