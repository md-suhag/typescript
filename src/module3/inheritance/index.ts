{
  // inheritance

  class Person {
    name: string;
    age: number;
    sex: string;
    address: string;

    constructor(name: string, age: number, sex: string, address: string) {
      this.name = name;
      this.age = age;
      this.sex = sex;
      this.address = address;
    }

    getSleep(hours: number) {
      console.log(`${this.name} takes ${hours} hours sleep`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, sex: string, address: string) {
      super(name, age, sex, address);
    }
  }
  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      sex: string,
      address: string,
      designation: string
    ) {
      super(name, age, sex, address);
      this.designation = designation;
    }

    takeClass(hours: number) {
      console.log(
        `${this.sex === "male" ? "Mr. " : "Ms/Mrs. "}${
          this.name
        } is a teacher who takes ${hours} hours class per day.`
      );
    }
  }

  const student1 = new Student("suhag", 10, "male", "dhaka");
  console.log(student1.name);
  student1.getSleep(8);

  const teacher1 = new Teacher(
    "Rahim",
    40,
    "male",
    "Sylhet",
    "Assistant Teacher"
  );
  teacher1.takeClass(6);

  ///
}
