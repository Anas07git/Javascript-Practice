// Difference between let,var and const
/*
// 1.let and const are block scoped & var is global/function scoped
// eg:
 var a=100
{
    var a=10
    let b=20
    const c=30
    console.log(a)   // 10
    console.log(b)   // 20
    console.log(c)   // 30
}
     console.log(a) // 10 (shadowing overrides the value bcoz they pointing to the same location)
    console.log(b)  // reference error not defined
    console.log(c)

// 2. var can be re-declared but not in case of let and const
// Possible
var a=10 
var a=20
a=30

let b
b=10

// Not possible
let b=10   // Syntax error: b already declared
let b=11
if in same block

const c
c=12 // Syntax error: missing intializer in const declaration
const c=12
c=13   // Type error: Assignment to constant variable

3. var can be accessed before intialization but not let & const
// Possible
 console.log(a)
 var a=10    // undefined

 // Not possible
 console.log(b)
 let/const  b=10  // Reference error : cant access before initialization

4. Hoisting is done in var with default value of undefined & let and const are also 
hoisted but they donot have any default value they are in temporal dead zone
 "Temporal Dead Zone exists until a variable is declared and assigned a value"
-> function exp and class exp are not hoisted

*/

// Types of Error
/*
1) Syntax error:
const b
// caught SyntaxError: Missing initializer in const declaration
2) Type error
const a=10
a=11
//caught TypeError: Assignment to constant variable.
3) Reference error
console.log(c)
const c=9
// caught ReferenceError: b is not defined
  

// NaN - Not a Number, its a computional error
 // eg : if we divide a string by a number
  console.log("ndn"/2)
  
  // One execption
  console.log(NaN**0) // 1

  typeof(NaN) // number
  

  */