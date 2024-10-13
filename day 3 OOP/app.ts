class Person {
  private name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //   greet method
  greet(): void {
    console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
  }

  //  how get private property
  //   you must define getter method to get property name
  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

const person1 = new Person("Dillah", 19);
person1.greet();
console.log(person1.getName());

person1.setName("Naruto");
person1.age = 20;
person1.greet();
