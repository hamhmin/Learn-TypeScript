/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * ->특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
  // key에 T의 모든 프로퍼티가 들어감, ?로 선택적프로퍼티로 변환, T[key]에 프로퍼티의 값이 들어옴
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
  //   key에 T의 모든 프로퍼티를 넣음, -?로 프로퍼티의 값이 필수적으로 필요함을 알려줌, T[key]에 각 프로퍼티의 값이 들어옴
};

const withThumbnailPost: Required<Post> = {
  title: "타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
  //   Post에서 URL은 선택적 프로퍼티이지만 Required를 씀으로서 필수 프로퍼티로 변환됨.
};

/**
 * Readonly<T>
 * -> 읽기전용 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

// 직접 구현
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글",
  tags: [],
  content: "",
};
readonlyPost.content = "";
