/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "함형민",
  age: 26,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  //필드

  constructor(
    public name: string,
    public age: number,
    public position: string
  ) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("함형민", 26, "developer");
console.log(employeeB);

// 타입스크립트의 클래스는 타입으로도 사용할 수 있다.
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
