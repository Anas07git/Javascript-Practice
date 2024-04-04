const cc= console.log
// *OOPS


// Class is the blueprint/template
// Object is the instance of class

// class Example{
//    constructor(name){
//       this.name=Example.capitalize(name)
//       console.log(`${this.name} is called`)
//    }
//    abc(x){
//       console.log(" abc is running " + x +" times ")
//    }
//   static capitalize(name){
//     return  name.charAt(0).toUpperCase() + name.substr(1,name.length)
//  }
     
// }
// let oi= new Example("anas")
// oi.abc(8)
// class Example2 extends Example{
//    constructor(name){
//       super(name)
//        console.log("This constructor is of ex-1")
//    }
//    abc(x){
//       super.abc(x+1) // Method overriding
//       console.log("Modified")
//    }
// }
// let ex=new Example2("anna")
// ex.abc(999) 

 // getter & setter - Accessor properties

// class Animal {
//    constructor(name){
//       this._name=name
//    }
//    run(){
//       console.log("Running..")
//    }
//    get game(){
//       return this._name
//    }
//    set game(newName){
//       this._name=newName
//    }
// }  
// let a= new Animal("Lion")
// a.run()
// console.log(a.game)// Behaving as a property of class no need of calling
// a.game="Anas"
// console.log(a._name)

// Accessor Descriptors - get(),set(value), enumerable & configurable
let accObj={
  name:"Anas",
  surname:"Karatela"
}
Object.defineProperty(accObj,"fullName",{
  get(){
    return `${this.name} ${this.surname}`
  },
  set(value){
    [this.name,this.surname]=value.split(" ")
  },
  enumerable:true,
})
// for(let keys in accObj) cc(keys)
 accObj.fullName = "Anas Karatela"
 cc(accObj.fullName)

 // Smart Getters/Setters - Wrapper over real property values
 // properties starting with  "_" are internal and should not be touched from outside the object
 let smartObj={
  get name(){
    return this._name
  },
  set name(value){
    if(value.length<4){
      throw new Error("Name is too short.")
    }
    else{
      this._name=value
    }
  }
 }
 smartObj.name="Anas"
 cc(smartObj.name)
// Add two complex numbers

// class Complex{
//     constructor(r,i){
//         this.real=r
//         this.imaginary=i
//     }

//     add(n){
//         this.real= this.real + n.real
//         this.imaginary= this.imaginary + n.imaginary
//     }
// }

// let a= new Complex(4,5)
// let b= new Complex(5,6)

// a.add(b)
// console.log(`${a.real} + ${a.imaginary}i`)



// OBJECTS
const key="middleName"
const value="A."

// const obj={
//    firstName:"Anas",
//    "lastName": "Karatela",
//    [key]:value,
//     0: "hello" // automatically converts into string
// }
// obj.age=28
// obj["age"]=23
// console.log(obj.firstName)
// console.log(obj["lastName"])
// console.log(obj.middleName)
// console.log(obj)
// console.log(obj[0])
// console.log(obj["0"])

// For checking if "key" exists or not -> "key" in obj
// console.log("0" in obj)

// For iterating objects
// for(let key1 in obj){
    // console.log(key1) // Will return keys
//  }

 // * SPREAD & REST OPERATOR

    // { 
    //    let arr=[1,2,3,4]
    //  let[a,b,,d]=arr
    //  console.log(a,b,d)
    
    // }
    
    // {
    //     let arr1=[2,3,4,5]
    //   let[a,b,...rest]=arr1
    //   console.log(a,b,rest)
    // }
    // {
    //    let{a,b}={a:1,b:3}
    //    console.log(a,b)
    // }
    
    // {
    //    // spread
      //  let arr=[1,2,3,4]
      //  let obj={...arr}
      //  console.log(obj)
    
    //    let obj2={
    //       name:"Anas",
    //       age:"22",
    //       add:"abc"
    //    }
    //    console.log({...obj2, age:"23"}) // will override the property
    // }

    // Destructring
//     const obj1={
//         name:"Anas",
//         fullName:{
//         first:"Anas",
//         last :"Karatela",
//      }
//   }
  
//     let {name:Name,fullName:{last}}=obj1
//     // let {fullName:{last}}=obj1
//     cc(Name)
//     cc(last)


// *SHALLOW & DEEP COPY

// Shallow- Obj which holds the reference to another obj
// Deep- Obj clone and used in another variable

//Shallow Copy

// const dev1={name:"Dev1"}
// const dev2=dev1

// dev2.name="Dev2"
// cc(dev2)
// cc(dev2)

// const dev2=Object.assign(dev1)
// dev2.name="Dev2"
// cc(dev1)
// cc(dev1)

// *Deep Copy Single Level Objects(Partial Copy)

// 1)Obj.assign({},source)

// const dev1={name:"Dev1"}
// const dev2=Object.assign({},dev1)
// dev2.name="Dev2"
// cc(dev1)
// cc(dev2)

//2) Destructuring/Spread opr {...obj}

// const dev1={name:"Dev1"}
// const dev2={...dev1  }

// dev2.name="Dev2"
// cc(dev1)
// cc(dev2)

// * True Deep Copy (Nested Obj)

//1) JSON.parse(JSON.stringify)

// const dev1={
//    name:"Dev1",
//    fullName:{
//       first:"anas",
//       last:"k"
//    },
//    func:()=>{
//      console.log("Hello")
//    },
//    dDate: new Date()
// }
// const dev2=JSON.parse(JSON.stringify(dev1))

// dev2.name="Dev2"
// dev2.fullName.first="Anas"
// cc(dev1)
// cc(typeof(dev1.dDate))
// cc(dev2)
// cc(typeof(dev2.dDate))

// Limitations
//1) Functions wont be copied 
//2) Type may be changed if created with new keyword
// eg: new Date()  obj-->string


//2) StructuredClone
// const dev1={
//   name:"Dev1",
//   fullName:{
//      first:"anas",
//      last:"k"
//   },
//   // func:()=>{
//   //   console.log("Hello")
//   // },
//   dDate: new Date()
// }
// const dev2=structuredClone(dev1)
// dev2.fullName.last="aa"
// cc(dev2)
// cc(dev1)

// Limitaton
// Function cannot be cloned

// To overcome this we can use lodash library

// Lodash

// const dev1={
//    name:"Dev1",
//    fullName:{
//       first:"anas",
//       last:"k"
//    },
//    func:()=>{
//      console.log("Hello")
//    },
//    dDate: new Date()
// }
// const dev2=_.cloneDeep(dev1)

// dev2.name="Dev2"
// dev2.fullName.first="Anas"
// cc(dev1)
// cc(typeof(dev1.dDate))
// cc(dev2)
// cc(typeof(dev2.dDate))


// * "this" keyword

// let user={
//    name:"Anas",
//    age:23,
//    getArrow(){
//       const  arrow=()=>{
//          cc(this.name)
//       }
//       arrow()
//    },
//    userChild:{
//       last:"K",
//       getName(){
      
//          cc(this.name + " " + this.last)
         
//       }
//    },
   
// }
// user.userChild.getName()
// user.getArrow()

// In Class it will point to what is inside a constructor

//Q:1
// const user={
//    f:"abc",
//    gett(){
//       const f="xyz"
//       return this.f
//    }
// }
// cc(user.gett())

//Q:2
// function user(){
//    return{
//       name:"John",
//       ref(){
//          return this.name
//       }
//    }
// }
// let u=user()
// cc(u.ref())

//Q:3
// const user={
//    name:"Anas",
//    f(){
//       cc(this.name)
//    }
// }
// setTimeout(function(){
//    user.f()
// },1000)

//Q:4 Object Calculator
// const calcu={
//    read(){
//       this.a=+prompt("a =",0)
//       this.b=+prompt("b =",0)
//    },
//    sum(){
//      return this.a+this.b
//    },
//    mul(){
//       return this.a*this.b
//    }
// }
// calcu.read()
// cc(calcu.sum())
// cc(calcu.mul())

//Q:5
// var length=4
// function cb(){
//    cc(this.length)
//    cc(this)
// }

// const objj={
//   length:5,
//   method(fn){
//    fn()
//   },
//   method1(){
//   //  cc(arguments)
//    arguments[0]()
   
//   }
// }
// objj.method(cb)
// objj.method1(cb)

//Q:6 Calc chaining

// const calcu={
//   total:0,
//   add(a){
//      this.total+=a
//      return this
//   },
//   mul(a){
//      this.total*=a
//      return this
//   },
//   sub(a){
//      this.total-=a
//      return this
//   },
  
// }
// const res=calcu.add(10).mul(4).sub(10)
// cc(res.total)



// OBJECTS Qs
 // Q:1
//  const objj={
//     a:"one",
//     b:"two",
//     a:"threee"
//  }
// console.log(objj)

// Q:2 Mutliply *2

// let nums={
//     a:100,
//     b:22,
//     c:"blahblah"
// }
//  function byTwo(obj){
//     for(let key in obj){
//         if(typeof obj[key]==="number"){
//             obj[key]*=2
//         }
//     }
//  }
//  byTwo(nums)
//  console.log(nums)

// Q:3

// const a={}
// const b={key:"b"}
// const c={key:"c"}
// a[b]=123 //[[Object object]]
// a[c]=222 //[[Object object]]
// console.log(a[b])


// console.log([..."ndfkdnf"])

// const user={name:"abc",age:21}
// const user2={admin:11,...user}
// console.log(user2)

//Q:4 

// cc({x:1}=={x:1})
// cc({x:1}==={x:1})
// Both are pointing in different memory space

//Q:5

// let person={name:"abc"}
// let member=person
// person=null
// console.log(person)
// console.log(member)
// person.name=null

// Q:6

// const val={number:10}
// const byTwo=(x={...val})=>{// ...val will clone the object
//   console.log((x.number*=2))
// }
// byTwo()
// byTwo()
// byTwo(val)
// byTwo(val)

// Q:7

// function change(person){
//    person.age=23
//    person={
//       name:"anas",
//       age:33
//    }// Since re-assigning it wont affect the ref
//    return person
// }
// const p1={
//    name:"Anas",
//    age:21
// }
// console.log(p1)   
// console.log(change(p1))
// console.log(p1)   
// const p2=change(p1)
// console.log(p2)   


// Object.values,keys,entries - Returns real array not iterable like Map/Set
// For plain objects, the following methods are available:

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs
// Eg: Looping over properties
let user = {
  name: "John",
  age: 30
};

// loop over values
for (let value of Object.values(user)) {
  console.log(value); // John, then 30
}

// Tranforming Object
let prices={
  a:1,
  b:2,
  c:3
}
let doublePrice= Object.fromEntries(
  Object.entries(prices).map(e=> [e[0], e[1]*2])
)
console.log(doublePrice)

// Q
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function summ(salary){
  let sum=0
  for(let s of Object.values(salary)){
    sum+=s
  }
  return sum
}
console.log(summ(salaries))
// OR One Liner
let rSum=(s)=> Object.values(s).reduce((a,b)=> a+b,0)

// Q : Count no. of properties in Object
function count(c){
  return Object.keys(c).length
}
console.log(count(salaries))

// Q: Return name of top paid person
let salary = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function topSalary(s){
  return Object.keys(s).reduce((prev,curr)=> s[prev]> s[curr]? prev : curr)
}
topSalary(salary)

// Property Flags & Descriptors

// * Property Flags
// Object properties, besides a value, have three special attributes (so-called “flags”)

// writable – if true, the value can be changed, otherwise it’s read-only.
// enumerable – if true, then listed in loops, otherwise not listed.
// configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
// By default all the three attributes/flags are true

// Object.getOwnPropertyDescriptor(obj,propertyName) - allows to query the full information about a property.

let user1={
  name:"Anas"
}
let descriptor=Object.getOwnPropertyDescriptor(user1,"name")
cc(descriptor)

// Object.defineProperty(obj,propertyname,descriptor) - To change flags

// Non-writable
Object.defineProperty(user1,"name",{
  writable:false
})
user1.name= "Annas" // wont override and wont show error bcoz used in non-strict mode
cc(user1.name)



// If property is made from defineProperty and not provided flags by default they will be
// false

let user3 = {};

Object.defineProperty(user3, "name", {
  value: "John"
});

let descript = Object.getOwnPropertyDescriptor(user3, 'name')
cc(descript)

// Non-enumerable 
// Properties are enumerable and can be listed by default
let en={
  name:"a",
  toString(){
    return this.name
  }
}
for(let key in en){
  cc(key)  // name,toString
}
// But if enumerable is false
Object.defineProperty(en,"toString",{
  enumerable:false
})
for(let key in en){
  cc(key)  // name
}


// Non-configurable
// A non-configurable property can’t be deleted, its attributes/flags can’t be modified.

let con={
  name:"c",
  age:"22"
}
delete con.age
cc(con)
Object.defineProperty(con,"name",{
  configurable:false
})
// Now we cannot change the flags or can edit or delete
  delete con.name
  cc(con)

  Object.defineProperty(con,"name",{
    enumerable:false
  })      // Error

  // One Expection if writable is true it can be changed to false
  Object.defineProperty(con,"name",{
    writable:false
  })      // No Error

  // To define multiple properties:

  // Object.defineProperties(user, {
  //   name: { value: "John", writable: false },
  //   surname: { value: "Smith", writable: false },
  //   // ...
  // });


// Flags aware cloning
// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));


  // Others

 // Object.seal(obj)  configurable:false
// Forbids adding/removing of properties

 // Object.freeze(obj)  configurable:false, writable:false
//Forbids adding/removing/changing of existing properties

  
  
