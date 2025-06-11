/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 직접 구현
type Pick<T, K extends keyof T> = {
  // <T, K>로만 하면 K에 어떤것도 들어올 수 있기에 제한을 걸어줘야함.
  // K extends keyof T를 해주면 K에 할당할 수 있는 타입은 무조건 T로 들어오는 객체타입에 키값들을 추출한 유니온타입의 서브타입만 넣을 수 있음.
  [key in K]: T[key];
  // key에 K에 넣은 객체의 프로퍼티가 들어감, T[key]에 그 프로퍼티의 각각의 값이 들어감
  // 즉, T중 K에 들어온 프로퍼티만 사용하겠다는 의미
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// 지정할 타입이 너무 많은 경우 Omit을 써주자
// const noTitlePost: Pick<Post, "content" | "tags" | "thumbnailURL"> = {

//직접 구현
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title",
// Pick<Post, Exclude<keyof Post, "title">>
// Pick<Post, Exclude<"title" | "content" | "tag" | "thumbnailURL" , "title">>
// Pick<Post, "content" | "tag" | "thumbnailURL">

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 */

//직접 구현
type Record<K extends keyof any, V> = {
  // K extends keyof any = 정확히 어떤 타입인진 모르는데,
  // 어떤 객체에서 추출한 유니언 타입 임을 알림
  [key in K]: V;
};

type TunmbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string; size: number }
>;

//동일한 패턴을 가진 객체 타입을 쉽게 정의할 수 있음
