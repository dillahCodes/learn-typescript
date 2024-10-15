type UserLoginEmail = {
  id: number;
  userName: string;
  email: string;
  password: string;
};

const removeCredential = (user: UserLoginEmail): Omit<UserLoginEmail, "password"> => {
  const { password, ...rest } = user;
  return rest;
};

const user1 = removeCredential({
  id: 1,
  userName: "abdillah",
  email: "test@gmail",
  password: "test123",
});

console.log(user1.id);
console.log(user1.userName);
console.log(user1.email);
// console.log(user.password) // error
console.log(user1);
