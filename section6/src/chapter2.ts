/**
 * 접근 제어자
 * access modifier
 * => public private proteced
 */

class Employee {
  //필드

  constructor(
    private name: string, // 외부접근 불가, 파생클래스에도 사용 불가
    protected age: number, // 외부접근 불가, 파생클래스에는 사용 가능
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
  setName(params: string) {
    this.name = params;
  }
}

const employee = new Employee("함형민", 26, "developer");
// employee.name = "아무개";
// employee.setName("아무개");
employee.age = 15;
employee.position = "바리스타";

console.log(employee);

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

  //메서드
  func() {
    this.name;
    this.age;
  }
}
