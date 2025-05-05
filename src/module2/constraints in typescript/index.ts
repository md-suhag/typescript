{
  // constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "web development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 122,
    name: "rahim",
    email: "rahim@gmail.com",
    devType: "full stack",
  });
  const student2 = addCourseToStudent({
    id: 44,
    name: "rahim",
    email: "rahim@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
