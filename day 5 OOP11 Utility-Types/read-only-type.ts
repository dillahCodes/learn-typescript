interface UserType {
  id: number;
  name: string;
  email: string;
}

const user: Readonly<UserType> = {
  id: 1,
  name: "abdillah",
  email: "test@gmail",
};

// user.email = "test123@gmail"; // error Cannot assign to email because it is a read-only property.
