interface RegisterWithoutUserName {
  email: string;
  password: string;
}

interface RegisterWithUserName {
  userName: string;
}

interface RegisterWithHobby extends RegisterWithUserName, RegisterWithoutUserName {
  hobby: string[];
}

type Register = RegisterWithUserName | RegisterWithoutUserName;

const registerUser = <T>(data: T): T => data;

const user1 = registerUser<Register>({
  email: "test123@gmail.com",
  password: "123456",
});
console.log(user1);

const user2 = registerUser<Register>({
  userName: "dillah",
  email: "test1234@gmail.com",
  password: "1234567",
});
console.log(user2);

const user3 = registerUser<RegisterWithHobby>({
  userName: "Dillah123",
  email: "kamu@gmail.com",
  password: "909302",
  hobby: ["coding", "eat", "sleep"],
});
console.table(user3);
