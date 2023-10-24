/*
 * Functions
 */

// // Type alias
// type Guitarist = {
//   name: string;
//   age: number;
//   isAwesome: boolean;
// };

// // Interface
// interface Bassist {
//   name: string;
//   age: number;
//   isAwesome: boolean;
// }

// // Type aliases
// type stringOrNumber = string | number; // Union type

// type stringOrNumberArray = stringOrNumber[];

// type Drummer = {
//   name: string;
//   age: number;
//   album: stringOrNumberArray;
// };

// let drummer: Drummer = {
//   name: "John",
//   age: 20,
//   album: ["Nevermind", "OK Computer"],
// };

// // Literal types
// let myName: "John"; // Type "John" - not very useful on its own - it's like using const

// let username: "John" | "Jane" | "Jack"; // Type 'John' | 'Jane' | 'Jack'
// username = "Jane";

// // Function types
// const subtract = (a: number, b: number): number => a - b;

// type MathFn = (a: number, b: number) => number;

// const add: MathFn = (a: number, b: number) => a + b;

// console.log(add(1, 2));

// const sayHello = (name: string = "John"): void => {
//   console.log(`Hello ${name}`);
// };

// sayHello();
// sayHello("Jane");
// sayHello(add(1, 2).toString());

// const logMsg = (msg: any): void => {
//   console.log(msg);
// };

// interface MathFnInterface {
//   (a: number, b: number): number;
// }

// let multiply: MathFnInterface = function (a, b) {
//   return a * b;
// };

// logMsg(multiply(2, 3));

// // Optional parameters
// const addAll = (a: number, b: number, c?: number): number => {
//   if (c) {
//     return a + b + c;
//   }
//   return a + b;
// };

// logMsg(addAll(1, 2));
// logMsg(addAll(1, 2, 3));

// // Default parameters
// const addAll2 = (a: number, b: number, c: number = 0): number => {
//   return a + b + c;
// };

// logMsg(addAll2(1, 2));
// logMsg(addAll2(1, 2, 3));

// // Rest parameters
// const addAll3 = (...numbers: number[]): number => {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// };

// logMsg(addAll3(1, 2));
// logMsg(addAll3(1, 2, 3));
// logMsg(addAll3(1, 2, 3, 4));

// // Never type
// const throwError = (msg: string): never => {
//   throw new Error(msg);
// };

// // throwError("Something went wrong");

// // Type guards
// // const isNumber = (input: any): boolean => {
// //   return typeof input === "number";
// // };

// const isNumber = (input: any): input is number => {
//   return typeof input === "number";
// };

// const isString = (input: any): boolean => {
//   return typeof input === "string";
// };

// // Use of never type
// const numberOrString = (input: number | string): string => {
//   if (isNumber(input)) {
//     return "number";
//   }
//   if (isString(input)) {
//     return "string";
//   }
//   return throwError("Invalid input"); // Use of never type
// };

// logMsg(numberOrString(1));
// logMsg(numberOrString("1"));
// logMsg(isNumber(23));
// logMsg(isNumber("23"));
// // console.log(numberOrString(true)); // Error

/*
 * Type Assertion
 */

// type One = string;
// type Two = string | number;
// type Three = "hello";

// // Convert to a more specific type
// let a: One = "hello";
// let b = a as Two; // Type assertion - convert to a less specific type
// let c = a as Three; // Type assertion - convert to a more specific type

// let d = <Two>"world";
// let e = <string | number>"world";

// console.log(e);

// const addOrConcat = (
//   a: number,
//   b: number,
//   c: "add" | "concat"
// ): number | string => {
//   if (c === "add") {
//     return a + b;
//   }
//   return "" + a + b;
// };

// console.log(addOrConcat(1, 2, "add"));
// console.log(addOrConcat(1, 2, "concat"));

// let myVal: string = addOrConcat(2, 2, "concat") as string;
// console.log(myVal);
// let myVal2 = <string>addOrConcat(2, 333, "concat");
// console.log(myVal2);
// let myNum: number = addOrConcat(2, 2, "add") as number;
// console.log(myNum);
// let myNum2 = <number>addOrConcat(2, 2, "add");
// console.log(myNum2);

// // ! Be careful with type assertion - TS sees no problem, but it returns a string and not a number
// let myVal3: number = addOrConcat(2, 2, "concat") as number;
// console.log(typeof myVal3); // string

// // The DOM
// const img = document.querySelector("img")!; // '!' is a non-null assertion operator - tells TS that the value is not null
// const img2 = document.getElementById("#img") as HTMLImageElement; // Type assertion to tell TS that the value is an HTMLImageElement
// const img3 = <HTMLImageElement>document.getElementById("#img"); // Type assertion to tell TS that the value is an HTMLImageElement

// img.src;
// img2.src;
// img3.src;

/*
 * Classes
 */

// class Coder {
//   secondLang!: string;

//   constructor(
//     public name: string,
//     public music: string,
//     private age: number,
//     protected lang: string = "TS"
//   ) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }

//   getAge() {
//     return this.age;
//   }

//   getLanguage() {
//     return this.lang;
//   }
// }

// const john = new Coder("John", "Rock", 20);
// console.log(john.name);
// console.log(john.music);
// // console.log(john.age); // Error - private
// console.log(john.getAge());
// // console.log(john.lang); // Error - protected
// console.log(john.getLanguage());
// console.log(john.secondLang);

// class Webdev extends Coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string,
//     age: number
//   ) {
//     super(name, music, age);
//     this.computer = computer;
//   }

//   getLanguage() {
//     return `This webdev language is ${this.lang}`;
//   }
// }

// const jane = new Webdev("Mac", "Jane", "Pop", 30);
// console.log(jane.name);
// console.log(jane.music);
// // console.log(jane.age); // Error - private
// console.log(jane.getAge());
// // console.log(jane.lang); // Error - protected
// console.log(jane.getLanguage());
// console.log(jane.secondLang);
// console.log(jane.computer);

/*
 * Interfaces and classes
 */

// interface Musician {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }

// class Guitarist implements Musician {
//   constructor(public name: string, public instrument: string) {
//     this.name = name;
//     this.instrument = instrument;
//   }

//   play(action: string) {
//     return `${this.name} is playing ${this.instrument} by ${action}`;
//   }
// }

// const johnny = new Guitarist("Johnny", "Guitar");
// console.log(johnny.name);
// console.log(johnny.instrument);
// console.log(johnny.play("The Beatles"));

/*
 * Static properties and methods
 */

// class Peeps {
//   static count: number = 0;

//   static getCount(): number {
//     return Peeps.count;
//   }

//   public id: number;

//   constructor(public name: string) {
//     this.name = name;
//     this.id = ++Peeps.count; // count increments first, then is assigned to id
//   }
// }

// const p1 = new Peeps("John");
// console.log(p1.name);
// console.log(p1.id);
// console.log(Peeps.getCount());

// const p2 = new Peeps("Jane");
// console.log(p2.name);
// console.log(p2.id);
// console.log(Peeps.getCount());

/*
 * Getters and setters
 */

// class Bands {
//   private datastate: string[];

//   constructor() {
//     this.datastate = [];
//   }

//   public get data(): string[] {
//     return this.datastate;
//   }

//   public set data(value: string[]) {
//     if (
//       Array.isArray(value) &&
//       value.every((item) => typeof item === "string")
//     ) {
//       this.datastate = value;
//       return;
//     } else throw Error("Invalid data");
//   }
// }

// const myBands = new Bands();

// myBands.data = ["The Beatles", "The Rolling Stones"];
// console.log(myBands.data);
// // myBands.data = ["The Beatles", 1]; // Error
// myBands.data = [...myBands.data, "The Who"];
// console.log(myBands.data);

/*
 * Index signatures and keyof assertions
 */

// Index signatures

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// } // This doesn't work when accessing the object with a variable

// interface TransactionObj {
//   readonly [key: string]: number; // Index signature - key is a string, value is a number
// }

// interface TransactionObj {
//   readonly [key: string]: number; // This allows us to add new properties to the object
//   Pizza: number; // But this property is mandatory
//   Books: number; // But this property is mandatory
//   Job: number; // But this property is mandatory
// }

// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -20,
//   Job: 100,
//   Ricardo: 100, // This is allowed because of the index signature
// };

// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions["Pizza"]);

// let prop: string = "Pizza";
// console.log(todaysTransactions[prop]);

// const todaysNet = (transactions: TransactionObj): number => {
//   let total = 0;
//   for (const t in transactions) {
//     total += transactions[t];
//   }
//   return total;
// };

// console.log(todaysNet(todaysTransactions));
// console.log(todaysTransactions["John"]); // !TS doesn't complain but it returns undefined

/////////////////////////////////////////
// interface Student {
//   [key: string]: string | number | number[] | undefined; // Index signature that allows us to add new properties to the object - the value can be a string, number, number array or undefined because of the optional property
//   name: string;
//   GPA: number;
//   classes?: number[]; // Optional property
// }

// const student: Student = {
//   name: "John",
//   GPA: 3.0,
//   classes: [1, 2, 3],
// };

// console.log(student.name);
// console.log(student.GPA);
// console.log(student.classes);
// console.log(student.test); // ! It doesn't exist, but TS doesn't complain because of the index signature

// for (const key in student) {
//   console.log(`${key}: ${student[key]}`); // Only possible because of the index signature
// }

/////////////////////////////////////////
// keyof assertions

// interface Student {
//   name: string;
//   GPA: number;
//   classes?: number[];
// }

// const student: Student = {
//   name: "John",
//   GPA: 3.0,
//   classes: [1, 2, 3],
// };

// // looping through the object without the index signature
// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`);
// }

// // looping through the object without the index signature
// Object.keys(student).map((key) => {
//   console.log(student[key as keyof typeof student]);
// });

// const logStudentKey = (student: Student, key: keyof Student): void => {
//   console.log(`Student ${key}: ${student[key]}`);
// };

// logStudentKey(student, "name");
// logStudentKey(student, "GPA");
// logStudentKey(student, "classes");

/////////////////////////////////////////

// interface Incomes {
//   [key: string]: number;
// }

// How to provide a literal type to an index signature
// type Streams = "salary" | "bonus" | "dividends";
// type Incomes = Record<Streams, number>;

// const monthlyIncomes: Incomes = {
//   salary: 1000,
//   bonus: 500,
//   dividends: 200,
// };

// for (const revenue in monthlyIncomes) {
//   console.log(`${revenue}: ${monthlyIncomes[revenue as keyof Incomes]}`);
// }

/*
 * Generics
 */

// You can use <T> as a generic type in a function or class to make it more flexible and accept different types of data

// Using a generic on a function parameters
// const echo = <T>(arg: T): T => arg;

// const isObj = <T>(arg: T): boolean => {
//   return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
// };

// console.log(isObj({}));
// console.log(isObj([]));
// console.log(isObj(null));
// console.log(isObj(1));
// console.log(isObj("1"));
// console.log(isObj(true));
// console.log(isObj({ name: "John" }));

// const myIsTrue = <T>(arg: T): { arg: T; is: boolean } => {
//   return {
//     arg,
//     is: typeof arg === "object" && !Array.isArray(arg) && arg !== null,
//   };
// };

// console.log(myIsTrue({}));
// console.log(myIsTrue([]));
// console.log(myIsTrue(null));
// console.log(myIsTrue(1));
// console.log(myIsTrue("1"));
// console.log(myIsTrue(true));
// console.log(myIsTrue({ name: "John" }));

// console.log("-----------");

// // Using a generic on a function and on the return type
// const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
//   // Is an array and is empty
//   if (Array.isArray(arg) && !arg.length) {
//     return {
//       arg,
//       is: false,
//     };
//   }
//   // Is an object and has no keys
//   if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//     return {
//       arg,
//       is: false,
//     };
//   }
//   return {
//     arg,
//     is: true,
//   };
// };

// console.log(isTrue({}));
// console.log(isTrue([]));
// console.log(isTrue(null));
// console.log(isTrue(1));
// console.log(isTrue("1"));
// console.log(isTrue(true));
// console.log(isTrue({ name: "John" }));

// console.log("-----------");

// // Using a generic on an interface
// interface BoolCheck<T> {
//   value: T;
//   is: boolean;
// }

// const isAgainTrue = <T>(arg: T): BoolCheck<T> => {
//   // Is an array and is empty
//   if (Array.isArray(arg) && !arg.length) {
//     return {
//       value: arg,
//       is: false,
//     };
//   }
//   // Is an object and has no keys
//   if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//     return {
//       value: arg,
//       is: false,
//     };
//   }
//   return {
//     value: arg,
//     is: true,
//   };
// };

// console.log(isAgainTrue({}));
// console.log(isAgainTrue([]));
// console.log(isAgainTrue(null));
// console.log(isAgainTrue(1));
// console.log(isAgainTrue("1"));
// console.log(isAgainTrue(true));
// console.log(isAgainTrue({ name: "John" }));

// console.log("-----------");

// // Using an interface to narrow down the type of a generic
// interface HasID {
//   id: number;
// }

// const processUser = <T extends HasID>(user: T): T => {
//   console.log(user.id);
//   return user;
// };

// const john = {
//   id: 1,
//   name: "John",
// };

// const jane = {
//   name: "Jane",
// };

// processUser(john);
// // processUser(jane); // ! Throws an error because jane doesn't have an id

// console.log("-----------");

// // Extending generics without the need to define keyof T inside map function
// const getUsersProperty = <T extends HasID, K extends keyof T>(
//   user: T[],
//   key: K
// ): T[K][] => {
//   return user.map((item) => item[key]);
// };

// const users = [
//   {
//     id: 1,
//     name: "John",
//   },
//   {
//     id: 2,
//     name: "Jane",
//   },
// ];

// console.log(getUsersProperty(users, "id"));
// console.log(getUsersProperty(users, "name"));
// // console.log(getUsersProperty(users, "age")); // ! Throws an error because age doesn't exist

// console.log("-----------");

// // Using generics on classes
// class StateObj<T> {
//   private data: T;

//   constructor(value: T) {
//     this.data = value;
//   }

//   get state(): T {
//     return this.data;
//   }

//   set state(value: T) {
//     this.data = value;
//   }
// }

// // Type is infered from the constructor argument
// const store = new StateObj("Hello");
// console.log(store.state);
// store.state = "World";
// console.log(store.state);
// // store.state = 89; // ! Throws an error because the type is a string infered from the constructor argument

// // We can specify the type when creating the instance
// const myState = new StateObj<(number | string | boolean)[]>([1, "2", true]);
// console.log(myState.state);
// myState.state = [1, "2", false];
// console.log(myState.state);

/*
 * Utility types
 */

// Partial
interface Assignment {
  studentID: number;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return {
    ...assign,
    ...propsToUpdate,
  };
};

const assign1: Assignment = {
  studentID: 1,
  title: "Assignment 1",
  grade: 0,
};

const assignGrade: Assignment = updateAssignment(assign1, {
  grade: 90,
});
console.log(assignGrade);

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGrade,
  verified: true,
};

console.log(recordAssignment({ ...assignGrade, verified: true }));

// Record
const hexColorMap: Record<string, string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

type Student = "Sara" | "Tina" | "John";
type LetterGrades = "A" | "B" | "C" | "D" | "F";

const finalGrades: Record<Student, LetterGrades> = {
  Sara: "A",
  Tina: "B",
  John: "C",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Student, Grades> = {
  Sara: { assign1: 100, assign2: 100 },
  Tina: { assign1: 90, assign2: 80 },
  John: { assign1: 70, assign2: 60 },
};

// Pick and Omit
type AssignResult = Pick<Assignment, "studentID" | "grade">;
const score: AssignResult = {
  studentID: 1,
  grade: 90,
  // verified: true, // ! Throws an error because verified is not picked from the Assignment type
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
  studentID: 1,
  title: "Assignment 1",
  // verified: true, // ! Throws an error because verified is omitted from the Assignment type
};

// Exclude and Extract
type AjustedGrade = Exclude<LetterGrades, "A" | "B" | "C">;
type HighGrades = Extract<LetterGrades, "A" | "B">;

// NonNullable
type AllPossibleGrades = LetterGrades | null | undefined;
type NonNullableGrades = NonNullable<AllPossibleGrades>;

// ReturnType
//type NewAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number, grade: string) => {
  return {
    title,
    points,
    grade,
  };
};

// Since the type of NewAssign is infered from the return type of createNewAssign, we can modify the function and the return type will be updated automatically
type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("TS Assignment", 100, "A");
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Generics", 90, "B"];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited
// Helps us with the return type of a promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

// Using the Awaited utility type gives us the data and not the promise
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((data) => {
  console.log(data);
});
