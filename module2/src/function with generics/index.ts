{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = {
    id: number;
    name: string;
  };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 3241,
    name: "suhag",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 333);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "web development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "rahim",
    email: "rahim@gmail.com",
    devType: "full stack",
  });
  const student2 = addCourseToStudent({
    name: "rahim",
    email: "rahim@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
