class Dog {
  name: string;
  static instanceCount: number = 0;

  constructor(name: string) {
    Dog.instanceCount++;
    this.name = name;
  }

  static decreaseCount(): void {
    this.instanceCount--;
  }
}

const dog1 = new Dog("Wif"); // 1
console.log(Dog.instanceCount);

const dog2 = new Dog("Dogs"); // 2
console.log(Dog.instanceCount);

Dog.decreaseCount();
console.log(Dog.instanceCount); // 1
