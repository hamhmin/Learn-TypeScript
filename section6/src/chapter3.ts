/**
 * 인터페이스와 클래스
 */
interface CharaterInterface {
  name: string;
  moveSpeed: number;
  mode(): void;
}

class Character implements CharaterInterface {
  // name: string;
  // moveSpeed: number;
  // constructor(private name: string, protected moveSpeed: number) {
  // // implements 사용시 인터페이스에서 정의한 타입들의 접근제어자는 모두 public이여아함.
  // // private나 protected 필요시 클래스에 따로 정의해줘야함
  constructor(
    public name: string,
    public moveSpeed: number,
    private asd: string
  ) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }
  mode(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
