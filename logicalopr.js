// Falsy Values - 0,-0,0n,null,undefined,NaN,""
// Truthy Values - Any other than falsy 

// Number(undefined) -> NaN
// Number(null) -> 0

// OR(||) Finds first truthy value, if all falsy then will return last one

console.log(1||0) // 1
console.log(null || undefined || 0) // 0
// Usecase - Short Circuit Evaluation
// To execute commands only if the left part is falsy

// AND(&&) Finds first falsy value, if all truthy then will return last one
console.log(1 && 0) // 0
console.log(1 && 5) // 5

// Precedence of AND is higher than OR  &&>||


// Nullish Operator (??) - Returns first arg if not null/undefined otherwise second
// Returns the first defined value
let user
console.log( user ?? "Not user") // Not user
// ?? vs ||
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
// Another feature 'modify in place'
console.log(user)
console.log(user??="a")
console.log(user)

// Optional Chaining (?.) - Its not an operator but a special syntax constuct

// It stops the evaluation if value before(?.) is null/undefined
// returns undefined

// It is the safe way to access nested object properties even if an intermediate 
// property doesnt exist 
// In many cases we would prefer to get "undefined" rather than an "Error" (it blocks the code)



// Problem
let user1={}
// console.log(user1.add.street)  // Error

// Solution
console.log(user1.add ? user1.add.street : undefined)

// Better approach using (?.)
console.log(user1?.add?.street)

// NOTE: The value before ?. must be declared otherwise error
// console.log(admin?.add) // Error

// Other variants of ?.
// ?.() - Used to call a function that may not exist.
let userAdmin = {
    admin() {
      console.log("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.() // nothing happens

  // ?.[] - If we want to access the properties with [] instead of ()

  let key = "firstName";

let user2 = {
  firstName: "John"
};

let user3={}

console.log( user2?.[key] ); // John
console.log( user3?.[key] ); // undefined
