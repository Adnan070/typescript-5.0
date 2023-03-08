/**
 * Pick Utility
 * ============
 * The Pick utility type creates a new type by
 * picking the set of properties Keys, which can
 *  be a string literal or union of string
 * literals, from Type. The value of Keys has
 * to be the keys of Type, otherwise TypeScript
 * compiler will complain. This utility type is
 * especially useful when you want to create
 * lighter objects by picking certain properties
 * from objects with a lot of properties.
 */

type User = {
  name: string;
  age: number;
  address: string;
  occupation: string;
};

type BasicUser = Pick<User, "name" | "age">;

let user: BasicUser = {
  age: 32,
  name: "AK",
};

// Equal to this
// -------------
// type BasicUser = {
//   name: string;
//   age: number;
// }

/**
 * Omit Utility
 * ============
 * The Omit utility type is the opposite of Pick.
 *  Instead of stating what properties to keep,
 *  Keys refers to the set of properties keys to
 * be omitted. It is more useful when you only
 * want to get rid of certain properties from an
 * object and keep the others.
 */

type User = {
  name: string;
  age: number;
  address: string;
  occupation: string;
};

type BasicUser = Omit<User, "address" | "occupation">;

// Equal to this
// -------------
// type BasicUser = {
//   name: string;
//   age: number;
// }

/**
 * Partial Utility
 * ===============
 * The Partial utility type constructs a type with
 * all properties of Type set to optional. It can
 * be very useful when we are writing the update
 * logic of an object.
 */

type User = {
  name: string;
  age: number;
  address: string;
  occupation: string;
};

type PartialUser = Partial<User>;

// type PartialUser = {
//   name?: string;
//   age?: number;
//   address?: string;
//   occupation?: string;
// }

/**
 * Required Utility
 * ================
 * The Required utility type does the opposite of Partial.
 * It constructs a type with all properties of Type
 * set to required. It can be used to ensure that no
 * optional properties appear in a type.
 */

type PartialUser = {
  name: string;
  age: number;
  address?: string;
  occupation?: string;
};

type User = Required<PartialUser>;

// type User = {
//   name: string;
//   age: number;
//   address: string;
//   occupation: string;
// }

/**
 * Readonly Utility
 * ================
 */

type User = {
  name: string;
  age: number;
  address: string;
  occupation: string;
};

type ReadOnlyUser = Readonly<User>;

const userRead: ReadOnlyUser = {
  name: "Peter",
  age: 24,
  address: "Toronto",
  occupation: "software_engineer",
};

// userRead.name = "Tom";
// Cannot assign to 'name' because it is a read-only property.

/**
 * Record Utility
 * ==============
 */

type User = {
  name: string;
  age: number;
  address: string;
  occupation: string;
};

type Team = Record<"player1" | "player2", User>;

// type Team = {
//   player1: User;
//   player2: User;
// }
