class Person {
  constructor(
    protected name: string,
    protected age: number,
    protected height: number,
    protected address: string,
    protected email: string
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.height = height;
    this.email = email;
  }

  public sayHello(): void {
    console.log(`hello my name is ${this.name}`);
  }

  // set keyword must only have 1 parameter
  public set setName(name: string) {
    this.name = name;
  }

  //  get keyword can't have parameter but should return some value
  public get getName(): string {
    return this.name;
  }
}

const person1 = new Person("Dillah", 19, 180, "Rajeg", "test@gmail.com");
person1.sayHello();
person1.setName = "Naruto";
person1.sayHello();
console.log(person1.getName);
