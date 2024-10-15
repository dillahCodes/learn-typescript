"use strict";
class UserData {
    constructor(userData) {
        this.userData = userData;
    }
    addUserData(data) {
        this.userData.push(data);
    }
    updateUserData(indexToUpdate, dataToUpdate) {
        const user = this.userData[indexToUpdate];
        this.userData[indexToUpdate] = Object.assign(Object.assign({}, user), dataToUpdate);
    }
    deleteUserData(index) {
        this.userData.splice(index, 1);
    }
    displayUserData() {
        console.log(this.userData);
    }
}
const userAccount = [
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
