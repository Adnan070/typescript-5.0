type Keys = "name" | "phone";

type TEmployee = {
  [key in Keys]: string;
};

let empOne: TEmployee = {
  name: "adfa",
  phone: "",
};

type Properties = "propA" | "propB";

type MyMappedType<Properties extends number | string | symbol, TVal> = {
  [key in Properties]: TVal;
};

type NewEmployeeType = MyMappedType<"id" | "phone", string>;

// ======================================================

/**
 * Conditional Types
 */

type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

export {};
