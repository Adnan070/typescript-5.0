interface IEmployee {
  empCode: number;
  empName: string;
  getSalary?: (id: number) => number; // arrow function
  getManagerName?(id: number): string;
}

// type TName = "john" | "smith"
// let name:TName =""

/**
 * Interface as Type
 * -----------------
 */

interface KeyPair {
  key: number;
  value: string;
}

let kv1: KeyPair = { key: 1, value: "Steve" }; // OK

let kv2: KeyPair = { key: 1, val: "Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'

let kv3: KeyPair = { key: 1, value: 100 }; // Compiler Error:

/**
 * Interface as Function Type
 * --------------------------
 */

interface KeyValueProcessor {
  (key: number, value: string): void;
}

function addKeyValue(key: number, value: string): void {
  console.log("addKeyValue: key = " + key + ", value = " + value);
}

function updateKeyValue(key: number, value: string): void {
  console.log("updateKeyValue: key = " + key + ", value = " + value);
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, "Bill"); //Output: addKeyValue: key = 1, value = Bill

kvp = updateKeyValue;
kvp(2, "Steve"); //Output: updateKeyValue: key = 2, value = Steve

/**
 * Interface for Array Type
 * ------------------------
 */

interface NumList {
  [index: number]: number;
}

let numArr: NumList = [0, 2, 3];
numArr[0];
numArr[1];
numArr["asd"];

interface IStringList {
  [key: string]: string;
}

let strArr: IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
strArr.a = "as";
strArr.bad = "asd";

/**
 * Optional Property
 * -----------------
 */

let empObj1: IEmployee = {
  // OK
  empCode: 1,
  empName: "Steve",
};

let empObj2: IEmployee = {
  // OK
  empCode: 1,
  empName: "Bill",
  getSalary(num: number) {
    return num;
  },
  getManagerName(id: number) {
    return "";
  },
};

/**
 * Read only Properties
 * --------------------
 */

interface Citizen {
  name: string;
  readonly SSN: number;
}

let personObj: Citizen = { SSN: 110555444, name: "James Bond" };

personObj.name = "Steve Smith"; // OK
personObj.SSN = "333666888"; // Compiler Error

/**
 * Extending Interfaces
 * --------------------
 */

interface IPerson {
  gender: string;
}

interface IBoy {
  age: number;
}

// remove this from here and extend on top
interface IEmployee extends IPerson, IBoy {
  empCode: number;
}

let empObj: IEmployee = {
  empCode: 1,
  empName: "Bill",
  gender: "asdf",
};

/**
 * Implementing an Interface
 * -------------------------
 */

class Employee implements IEmployee {
  empCode: string;
  empName: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.empName = name;
  }

  getSalary(empCode: number): number {
    return 20000;
  }
}

let emp = new Employee(1, "Steve");

export {};
