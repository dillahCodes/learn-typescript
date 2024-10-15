interface Employee {
  name: string;
  age: number;
  position: string;
}

const employee1: Pick<Employee, "name" | "age"> = {
  name: "John",
  age: 30,
};

const employee2: Pick<Employee, "name" | "position"> = {
  name: "Jane",
  position: "Developer",
};
