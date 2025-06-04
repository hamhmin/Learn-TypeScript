/**
 * 제네릭 클래스
 */

class NumberList {
  constructor(private list: number[]) {}
  push(data: number) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.print();
numberList.push(4);
numberList.print();

// 제네릭 클래스
class List<T> {
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const list = new List([1, "2", 3]);
list.pop();
list.print();
list.push("4");
list.print();
