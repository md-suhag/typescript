// union types

// type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

type User = {
  name: string;
  email?: string;
  gender: "male" | "female";
  bloodGroup: "O+" | "A+" | "AB+";
};

type FrontendDeveloper = {
  skills: string[];
  designation1: "Frontend Developer";
};
type BackendDeveloper = {
  skills: string[];
  designation2: "Backend Developer";
};

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper: FullStackDeveloper = {
  skills: [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "EXPRESSJS",
    "MONGODB",
    "REACT",
    "TYPESCRIPT",
  ],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};
