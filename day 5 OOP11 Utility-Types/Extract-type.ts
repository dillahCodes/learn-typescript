type UserDatatype = { name: number; email: string; role: "admin" } | { name: number; email: string; role: "user" };
type AdminUser = Extract<UserDatatype, { role: "admin" }>;
type NormalUser = Extract<UserDatatype, { role: "user" }>;

const userAdmin: AdminUser = {
  name: 1,
  email: "example.com",
  role: "admin",
};

const userNormal: NormalUser = {
  name: 1,
  email: "example123.com",
  role: "user",
};

console.log({ userAdmin, userNormal });
