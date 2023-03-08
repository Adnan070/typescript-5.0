interface DelimitatedDocument {
  separator: string;
}

interface PlainTextDocument {}

type Document = DelimitatedDocument | PlainTextDocument;

const printDelimitatedDocument = (doc: DelimitatedDocument) => {};

const printPlainTextDocument = (doc: PlainTextDocument) => {};

const printDocument = (doc: Document) => {
  if ("separator" in doc) {
    printDelimitatedDocument(doc);
  } else {
    printPlainTextDocument(doc);
  }
};

/**
 * Instance of Guard
 * =================
 */

interface Accessory {
  brand: string;
}
class Necklace implements Accessory {
  kind: string;
  brand: string;
  constructor(brand: string, kind: string) {
    this.brand = brand;
    this.kind = kind;
  }
}
class Bracelet implements Accessory {
  brand: string;
  year: number;
  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }
}
const getRandomAccessory = () => {
  return Math.random() < 0.5
    ? new Bracelet("cartier", 2021)
    : new Necklace("choker", "TASAKI");
};

let Accessory = getRandomAccessory();

if (Accessory instanceof Bracelet) {
  console.log(Accessory.year);
}
if (Accessory instanceof Necklace) {
  console.log(Accessory.brand);
}

/**
 * The typeof type guard
 * =====================
 */

function StudentId(x: string | number) {
  if (typeof x == "string") {
    console.log("Student");
  }
  if (typeof x === "number") {
    console.log("Id");
  }
}
StudentId(`446`); //prints Student
StudentId(446); //prints Id

/**
 * Custom type guard (comment previous)
 * =================
 */

// interface Necklace {
//   kind: string;
//   brand: string;
// }
// interface bracelet {
//   brand: string;
//   year: number;
// }
// type Accessory = Necklace | bracelet;

// const isNecklace = (b: Accessory): b is Necklace => {
//   return (b as Necklace).kind !== undefined;
// };
// const Necklace: Accessory = { kind: "Choker", brand: "TASAKI" };
// const bracelet: Accessory = { brand: "Cartier", year: 2021 };
// console.log(isNecklace(bracelet)); //Logs false
// console.log(isNecklace(Necklace)); //Logs true

export {};
