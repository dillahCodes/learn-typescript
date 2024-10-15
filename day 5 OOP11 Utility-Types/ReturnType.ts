// Return type constructs a type consisting of the return type of function Type.
const generateUserData = (): { id: number; userName: string; email: string } => {
  return {
    id: 1,
    userName: "abdillah",
    email: "test@gmail",
  };
};

type UserDataType = ReturnType<typeof generateUserData>;
// { id: number; userName: string; email: string }

const user90: UserDataType = {
  id: 1,
  userName: "abdillah123",
  email: "test@gmail123",
};

console.log(user90);
