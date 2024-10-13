class Person {
  constructor(protected name: string, protected age: number) {
    this.name = name;
    this.age = age;
  }

  protected sayHello(): void {
    console.log(`hello my name is ${this.name}`);
  }
}

const person1 = new Person("Dillah", 20);
// person1.sayHello(); // Property 'sayHello' is protected and only accessible within class 'Person' and its subclasses.

class Employee extends Person {
  constructor(employeeName: string, employeeAge: number, private position: string) {
    super(employeeName, employeeAge);
    this.position = position;
  }

  employeeSayHello(): void {
    this.sayHello();
    console.log(`and my position is ${this.position}`);
  }

  public set employeeSetPosition(position: string) {
    this.position = position;
  }

  public set employeeName(name: string) {
    this.name = name;
  }
}

const person2 = new Employee("Naruto", 20, "Hokage");
person2.employeeSayHello();
person2.employeeName = "Sikamaru";
person2.employeeSayHello();
