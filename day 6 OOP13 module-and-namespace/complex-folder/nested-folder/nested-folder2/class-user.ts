interface Person {
  name: string;
  age: number;
  height: number;
}

class User {
  protected name: string;
  protected age: number;
  protected height: number;
  constructor(data: Person) {
    this.name = data.name;
    this.age = data.age;
    this.height = data.height;
  }

  sayHello() {
    console.log(`Hello my name is ${this.name} and my age is ${this.age} and my height is ${this.height}`);
  }

  updateUserData(data: Partial<Person>) {
    if (data.name) this.name = data.name;
    if (data.age) this.age = data.age;
    if (data.height) this.height = data.height;
  }
}

export default User;
