// let code: unknown = 102;

// let employeeCode: number = code;

// =====================================

interface Employee {
  name: string;
}

let emp = /* Remove <Employee> */ <Employee>{
  // Compiler will provide autocomplete properties,
  // but will not give an error if you forgot to add the properties
};

// emp.name = "Adnan";

console.log("name: ", emp.name);
