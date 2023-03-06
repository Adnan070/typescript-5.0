// interface MyType {
//     instanceMethod: () => void;
// }

// interface MyTypeStatic {
//     new(): MyType;
//     staticMethod: () => void;
// }

// /* class decorator */
// function staticImplements<T>() {
//     return <U extends T>(constructor: U) => { constructor };
// }

// @staticImplements<MyTypeStatic>()   /* this statement implements both normal interface & static interface */
// class MyTypeClass { /* implements MyType { */ /* so this become optional not required */
//     public static staticMethod() {
//         console.log("hello iam statice....");

//     }
//     instanceMethod() {
//         console.log("hello iam statice....");
//     }
// }

// MyTypeClass.staticMethod()

// let instanceOne = new MyTypeClass()
// instanceOne.instanceMethod()

// ====================================================

interface MyType {
  instanceMethod: () => void;
}

interface MyTypeStatic {
  new (): MyType;
  staticMethod: () => void;
}

var HoldClass: MyTypeStatic;
HoldClass = class MyTypeClass {
  public static staticMethod() {
    console.log("hello iam statice....");
  }
  instanceMethod() {
    console.log("hello iam statice....");
  }
};

HoldClass.staticMethod();

let instanceOne = new HoldClass();
instanceOne.instanceMethod();

// ===============================================
