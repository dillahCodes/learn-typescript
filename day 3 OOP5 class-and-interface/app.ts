interface Animal {
  speak(): void;
  makeSound(times: number): void;
}

class Cat implements Animal {
  private name: string;
  private color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  speak(): void {
    console.log(`my name is ${this.name} and color is ${this.color}`);
  }

  makeSound(times: number): void {
    const res = Array.from({ length: times }).fill("Miaw..").join(" ");
    console.log(res);
  }

  test() {
    return 1;
  }
}

const cat1: Animal = new Cat("Fuzi", "white");
cat1.makeSound(4);
cat1.speak();
cat1.makeSound(5);
// cat1.test(); // property 'test' does nor exits on type Animal
