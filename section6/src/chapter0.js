/**
 * 클래스
 */

let studentA = {
  name: "함형민",
  grade: "A",
  age: 26,
  study() {
    console.log("공부중");
  },
  introduce() {
    console.log("안녕");
  },
};

class Student {
  //필드
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드
  study() {
    console.log("공부중");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("스시사", "B", 21);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  //필드
  //   name;
  //   grade;
  //   age;
  favoritSkill;

  //생성자
  constructor(name, grade, age, favoritSkill) {
    // this.name = name;
    // this.grade = grade;
    // this.age = age;
    super(name, grade, age);
    this.favoritSkill = favoritSkill;
  }

  programming() {
    console.log(`${this.favoritSkill}로 프로그래밍 함.`);
  }
}

const studentDeveloper = new StudentDeveloper("함형민", "B+", 26, "TS");
console.log(studentDeveloper);
studentDeveloper.programming();
studentDeveloper.study();
