{
  const friends1: string[] = ["suhag", "suhan", "shihab", "sourob"];
  const friends2: string[] = ["abdul", "rahim", "karim", "josim"];

  const allFriends: string[] = [...friends1, ...friends2];
  console.log(allFriends);

  const greetUser = (...userNames: string[]) => {
    userNames.forEach((userName) => console.log(`hi ${userName}`));
  };

  greetUser("fahim", "sharif", "mahbub", "josim");
}
