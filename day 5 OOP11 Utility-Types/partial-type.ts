interface UserAccount {
  userName: string;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
}

class UserData {
  private userData: UserAccount[];
  constructor(userData: UserAccount[]) {
    this.userData = userData;
  }

  addUserData(data: UserAccount) {
    this.userData.push(data);
  }

  updateUserData(indexToUpdate: number, dataToUpdate: Partial<UserAccount>) {
    const user = this.userData[indexToUpdate];
    this.userData[indexToUpdate] = {
      ...user,
      ...dataToUpdate,
    };
  }

  deleteUserData(index: number) {
    this.userData.splice(index, 1);
  }

  displayUserData() {
    console.log(this.userData);
  }
}

const userAccount: UserAccount[] = [
  {
    userName: "user1",
    name: {
      firstname: "John",
      lastname: "Doe",
    },
    email: "X0GQd@example.com",
  },
  {
    userName: "user2",
    name: {
      firstname: "Jane",
      lastname: "Doe",
    },
    email: "X0GQd@example.com",
  },
];

const userData = new UserData(userAccount);
userData.addUserData({
  userName: "user3",
  name: {
    firstname: "John",
    lastname: "Doe",
  },
  email: "X0GQd@example.com",
});
userData.updateUserData(0, {
  userName: "user123",
});
userData.deleteUserData(1);
userData.displayUserData();
