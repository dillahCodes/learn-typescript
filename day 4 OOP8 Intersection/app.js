"use strict";
const registerUser = (data) => data;
const user1 = registerUser({
    email: "test123@gmail.com",
    password: "123456",
});
console.log(user1);
const user2 = registerUser({
    userName: "dillah",
    email: "test1234@gmail.com",
    password: "1234567",
});
console.log(user2);
const user3 = registerUser({
    userName: "Dillah123",
    email: "kamu@gmail.com",
    password: "909302",
    hobby: ["coding", "eat", "sleep"],
});
console.table(user3);
