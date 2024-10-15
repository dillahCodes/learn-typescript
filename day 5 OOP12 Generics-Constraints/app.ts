interface User {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
}

class UserStore<T extends User> {
  private usersData: T[] = [];

  addItem(item: T) {
    this.usersData.push(item);
  }

  getItem(index: number): T {
    return this.usersData[index];
  }

  getAllItems(): T[] {
    return this.usersData;
  }

  deleteItems(index: number) {
    this.usersData.splice(index, 1);
  }
}

interface UserLoginEmail extends User {
  email: string;
  password: string;
}
const user1 = new UserStore<UserLoginEmail>();
user1.addItem({
  id: 1,
  name: {
    firstName: "dillah",
    lastName: "khan",
  },
  email: "test@gmail",
  password: "test123",
});
user1.addItem({
  id: 2,
  name: {
    firstName: "dillah",
    lastName: "khan",
  },
  email: "test@gmail",
  password: "test123",
});
console.log("User Login With Email: \n", user1.getAllItems());

interface UserLoginUsername extends User {
  username: string;
  password: string;
}
const user2 = new UserStore<UserLoginUsername>();
user2.addItem({
  id: 1,
  name: {
    firstName: "dillah",
    lastName: "khan",
  },
  username: "test123",
  password: "test123",
});
user2.addItem({
  id: 2,
  name: {
    firstName: "dillah",
    lastName: "khan",
  },
  username: "test123",
  password: "test123",
});
console.log("User Login With Username: \n", user2.getAllItems());
