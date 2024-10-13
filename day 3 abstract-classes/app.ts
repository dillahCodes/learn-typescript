/*
| Aspek                     | Metode Abstrak                        | Metode Konkrit                          |
|---------------------------|---------------------------------------|-----------------------------------------|
| Implementasi              | Tidak ada implementasi dalam kelas    | Memiliki implementasi                   |
| Instansiasi               | Tidak dapat dipanggil langsung        | Dapat dipanggil langsung dari instans   |
| Tujuan                    | Mendefinisikan kontrak untuk subclass | Menyediakan fungsionalitas umum         |
| Penggunaan                | Harus diimplementasikan oleh subclass | Dapat langsung digunakan                |
*/

abstract class Animal {
  constructor(protected name: string) {
    this.name = name;
  }

  // abstract method
  abstract makeSound(): void;

  //   concret method
  public get getAnimalName() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): void {
    console.log(`${this.name} Woof Woof!`);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): void {
    console.log(`${this.name} Miaw Miaw!`);
  }
}
const animal1 = new Dog("jira");
animal1.makeSound();
const animal2 = new Cat("Moci");
animal2.makeSound();
