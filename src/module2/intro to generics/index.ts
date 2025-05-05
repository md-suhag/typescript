{
  // generic type
  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 4, 6];
  const rollNumbers: GenericArray<number> = [3, 4, 6];

  //   const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  //   const boolArray: boolean[] = [true, false, true, true];
  const boolArray: GenericArray<boolean> = [true, false, true, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "karim",
      age: 1000,
    },
    {
      name: "jamal",

      age: 110,
    },
  ];

  type GenericTuple<X, Y> = [X, Y];
  const people: GenericTuple<string, string> = ["Mr. X", "Miss. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    {
      name: "suhag",
      email: "a@gmail.com",
    },
  ];
}
