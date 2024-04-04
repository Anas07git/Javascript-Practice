const cc= console.log
//*PROTOTYPE [[Prototype]]
// Prototype is a special hidden property which refers to other object or null

// __proto__ is historical getter/setter for [[Prototype]]
// Modern js suggests the use of Object.getPrototypeOf/Object.setPrototypeOf instead of _proto_
// __proto__ references cannot go in circles : It will throw an error
// value of __proto__ can be null or object other types are ignored

// let a={
//    name:"Anas",
//    lang: "Javascript",
//    // run:()=>{
//    // console.log("self")
//    // }
// }

// let p={
//    run: ()=>{
//       console.log("run")
//    }
// }
// a.__proto__=p  
// p.__proto__={
//    name2:"Anna"
// }
// console.log(a.name2) 

//  * "this" is not affected by prototypes it is always the object before call in a method
// If we call obj.method(), and the method is taken from the prototype, "this" still references obj.
// So methods always work with the current object even if they are inherited.
// Eg:
let animal = {
    walk() {
      if (!this.isSleeping) {
        cc(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  
  // modifies rabbit.isSleeping
  rabbit.sleep();
  
  cc(rabbit.isSleeping); // true
  cc(animal.isSleeping); // undefined (no such property in the prototype)
  
  
  // * for..in loop iterates over inherited props too
  let animal1 = {
    eats: true
  };
  
  let rabbit1 = {
    jumps: true,
    __proto__: animal1
  };
  
  // Object.keys only returns own keys
  cc(Object.keys(rabbit1)); // jumps
  
  // for..in loops over both own and inherited keys
  for(let prop in rabbit1) cc(prop); // jumps, then eats
  
  
// * F.prototype

  // If F.prototype is an object, then the "new" operator uses it to set [[Prototype]]
  // for the new object
  
  //F.prototype here means a regular property named "prototype" on F
  
  let ani = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = ani; // when new Rabbit is created, assign its [[Prototype]] to ani
  
  let rab = new Rabbit("White Rabbit"); //  rab.__proto__ == ani
  cc( rab.eats ); // true
  
  //* F.prototype constructor property

 // Every function has the "prototype" property even if we don’t supply it and
 // it is an object with the only property "constructor" that points back to the function itself

 function Rat() {}
/* default prototype
Rat.prototype = { constructor: Rat };
*/
cc(Rat.prototype.constructor==Rat)

// if we do nothing, the constructor property is available to all rats through [[Prototype]]
let rat= new Rat()
cc(rat.constructor==Rat)

// We can use "constructor" property to create a new object 
// using the same constructor as the existing one
function Rat1(name) {
    this.name = name;
    cc(name);
  }
  
  let rat1 = new Rat1("White Rat");
  
  let rat12 = new rat1.constructor("Black Rat");

// if we replace the default prototype as a whole, then there will be no "constructor" in it
function Abc(){}
Abc.prototype ={
    eats:true
}
let abc= new Abc()
cc(abc.constructor==Abc) // false
// To overcome
// 1) Abc.prototype.eats = true  // just add the property
// 2) Abc.prototype = {
//     eats: true,
//     constructor: Abc    // recreate it manually
//   };


// * NATIVE PROTOTYPES
let obj = {};

// cc(obj.__proto__)
// cc(Object.prototype)

cc(obj.__proto__ === Object.prototype); // true
cc(obj.toString === obj.__proto__.toString); //true
cc(obj.toString === Object.prototype.toString); //true

// there is no more [[Prototype]] in the chain above Object.prototype:
cc(Object.prototype.__proto__) // null

// All of the built-in prototypes have Object.prototype on the top

// bottom->top    : "->" indicates [[Prototype]]
// [1,2,3]  -> Array.prototype    -> Object.prototype -> null
// func(){} -> Function.prototype -> Object.prototype -> null
// 786      -> Number.prototype   -> Object.prototype -> null

// Lets check prototypes manually
cc([1,2,3].__proto__===Array.prototype) // true
cc([1,2,3].__proto__.__proto__===Object.prototype) // true
cc([1,2,3].__proto__.__proto__.__proto__===null) // true

// null and undefined have no object wrappers


// *POLYFILLS
// There is only one case where modifying native prototypes is approved. That’s polyfilling.
// Polyfilling is a term for making a substitute for method that already exists in JS
// Eg:
if (!String.prototype.repeat) {

  String.prototype.repeat = function(n) {
    return new Array(n+1).join(this);
  };
}
cc( "La".repeat(5) ); // LaLaLa


// *GET/SET PROTOTYPE WITHOUT __PROTO__

// Modern methods to get/set prototype:
// Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

// Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.

let x={
  something:true
}
let y= Object.create(x)  //  Similar to let y={__proto__:x} & Object.setPrototypeOf(y,x)

cc(y.something) // true

cc(Object.getPrototypeOf(y)===x) // true
Object.setPrototypeOf(y,{}) // same as {__proto__:{}}
cc(Object.getPrototypeOf(y)===x) // false

// We can use Object.create to perform an object cloning more powerful than copying properties in for..in
let clone = Object.create(Object.getPrototypeOf(x), Object.getOwnPropertyDescriptors(x));
cc(clone)
// This call makes a truly exact copy of x, including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, and with the right [[Prototype]]


// * "Very plain" object

let obj1 = {};

// let key = prompt("What's the key?", "__proto__");
// obj1[key] = "some value";

// alert(obj1[key]); // [object Object], not "some value"!
// The __proto__ property is special: it must be either an object or null.
// A string can not become a prototype. That’s why an assignment a string to __proto__ is ignored.

// To overcome a little trick

obj1=Object.create(null);
//  key = prompt("What's the key?", "__proto__");
// obj1[key] = "some value";
// alert(obj1[key]) // "some value" : Works fine

// These type of objects are called plain objects / dictionary objects
// Downside: They lack any in-built methods  eg: toString
// alert(obj1) // Error


// Q: Add toString to dictionary(object)

let dictionary = Object.create(null);
Object.defineProperty(dictionary,"toString",{
  value: function(){
    return Object.keys(this).join(",")
    
  }
})

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  cc(key); // "apple", then "__proto__"
}

// your toString in action
// alert(dictionary); // "apple,__proto__"



function Person(f,l){
  this.firstName = f;
  this.lastName = l;
}

const p1= new Person("A","K")
const p2= new Person("a","k")

// p1.fullName= function(){
//   return `${this.firstName} ${this.lastName}`
// }

Person.prototype.fullName = function(){
  return `${this.firstName} ${this.lastName}`
}

// cc(p1.fullName())
// cc(p2.fullName())
function Hero(f,l){
  Person.call(this,f,l)
  this.isHero =true
}
Hero.prototype= Object.create(Person.prototype)
const h1= new Hero("H","1")
Hero.prototype.constructor = Hero

cc(h1.fullName())

// Class are syntactical sugar over prototypal inheritance
class PersonClass{
  constructor(f,l){
    this.firstName = f;
    this.lastName = l;
  }
  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
}
const p1Class= new PersonClass("Anas","K")

cc(p1Class.fullName())
class HeroClass extends PersonClass{
  constructor(f,l){
    super(f,l)
    this.isHero=true

  }

}
const heroclass= new HeroClass("J","K")
cc(heroclass.fullName())