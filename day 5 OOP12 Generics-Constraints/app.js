"use strict";
class UserStore {
    constructor() {
        this.usersData = [];
    }
    addItem(item) {
        this.usersData.push(item);
    }
    getItem(index) {
        return this.usersData[index];
    }
    getAllItems() {
        return this.usersData;
    }
    deleteItems(index) {
        this.usersData.splice(index, 1);
    }
}
const user1 = new UserStore();
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
const user2 = new UserStore();
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
