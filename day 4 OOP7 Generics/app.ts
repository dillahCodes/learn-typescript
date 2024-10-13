interface User {
  id: number;
  name: string;
  email: string;
}

class DataStore<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  getAllItems(): T[] {
    return this.items;
  }
}

const numberStore = new DataStore<number>();
numberStore.addItem(90);
numberStore.addItem(80);
numberStore.addItem(70);
numberStore.addItem(20);
numberStore.removeItem(1);
console.log(numberStore.getAllItems());

const userStore = new DataStore<User>();
userStore.addItem({
  id: 46374376,
  name: "dillah",
  email: "test@gmail.com",
});
userStore.addItem({
  id: 3232134,
  name: "Pablo",
  email: "test123@gmail.com",
});
console.table(userStore.getAllItems());

function getData<K, V>(key: K, val1: V, val2: V): V {
  if (key) {
    return val1;
  }

  return val2;
}

const n1 = 2;
const n2 = 3;
console.log(getData<string, number>("test", n1, n2));
