type Student = {
  name: string;
  age: number;
  gender: string;
  address: string;
  contactNo?: string;
};

const student1: Student = {
  name: "suhag",
  age: 10,
  gender: "male",
  contactNo: "01700112233",
  address: "dhaka",
};
const student2: Student = {
  name: "sakib",
  age: 13,
  gender: "male",

  address: "dhaka",
};
const student3: Student = {
  name: "shihab",
  age: 9,
  gender: "male",

  address: "sylhet",
};

type IsAdmin = boolean;
const isAdmin: IsAdmin = true;
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;
