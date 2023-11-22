const cc=console.log


 /*
// CLOSURES
Function bundled along with its lexical scope

 function x(){
    var a=4
    function y(){
        console.log(a)
    }
    y()
    // return y
 }
 x()
 x()() // if (return y) same as var z=x(); z()

 function y(){
     for(var i=1;i<=5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i)
            },i*1000)
        }
        close(i)
     }
 }
 y()

 // Q: Time Optimization in Closures
//Before
function find1(index){
   let a=[]
   for(let i=0;i<100000;i++){
      a[i]=i*i
   }
   console.log(a[index])
}
console.time("6")
find1(6)
console.timeEnd("6")
console.time("8")
find1(8)
console.timeEnd("8")

// After

function find(){
   let a=[]
   for(let i=0;i<100000;i++){
      a[i]=i*i
   }
  return function(index){
   console.log(a[index])
  }
}
let close=find()
console.log(close)

console.time("6 Closure")
close(6)
console.timeEnd("6 Closure")
console.time("8 Closure")
close(8)
console.timeEnd("8 Closure")




// MAP,FILTER & REDUCE 

// 1.MAP
// Returns completely a new array of same length
//  arr.map((value,index,array)=>{
//})

const arr=[1,2,3,4,5]
const res=arr.map((n,i)=>{
  return n*2
})
//console.log(res)
// Polyfill for map
Array.prototype.myMap= function(cb){
   let temp=[]
   for(let i=0;i<this.length;i++){
      temp.push(cb(this[i],i,this))
   }
   return temp
}
const res1=arr.myMap((n,i)=>{
   return n*2
 })
// console.log(res1)

//2. FILTER
// Performs condition based operation returns the same array

const res2= arr.filter((n,i)=>{
   return n<4
})
// console.log(res2)
// console.log(arr)
// Polyfill for filter
Array.prototype.myFilter= function(cb){
   let temp=[]
   for(let i=0;i<this.length;i++){
      if(cb(this[i],i,this)) temp.push(this[i])
   }
   return temp
}
const res3=arr.myFilter((n,i)=>{
   return n<3
})
//console.log(res3)

//3. REDUCE
// arr.reduce((acc,curr,i,arr)=>,intialvalue)
const res4= arr.reduce((acc,curr)=>{
   return acc+curr
},0)
// console.log(res4)

// Polyfill for reduce
Array.prototype.myReduce= function(cb, intial){
   var acc= intial
   for(let i=0;i<this.length;i++){
      acc=acc? cb(acc,this[i],i,this):this[i]
   }
   return acc
}

const res5= arr.reduce((a,b)=>{
  return a+b
},0)
console.log(res5)

// const arr=["a","b","c","a","d"]

// // {a:2,b:2,c:2,d:1}

// const res=arr.reduce((acc,curr)=>{
//     if(acc[curr]){
//         acc[curr]+=1
//     }
//     else{
//         acc[curr]=1
//     }
//    return acc
// },{})

// console.log(res)



   
 



 

  

    // MODULES
    
  // const {hello,hello1}= require("./script")
  // hello()
  //ES-6
  // import sana,{h,hello1} from "./script.js"
  // h()
  // hello1()
  // sana()



*/
 


//PROTOTYPE [[Prototype]]

// Prototype is a special property which refers
// to other object or null

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

// OOPS
// Class is the blueprint/templete
// Object is the instance of class

// class Example{
//    constructor(name){
//       this.name=name
//       console.log(`${this.name} is called`)
//    }
//    abc(x){
//       console.log(" abc is running " + x +" times ")
//    }

// }
// // let oi= new Example("Anas")
// // oi.abc(8)
// class Example2 extends Example{
//    constructor(name){
//       super(name)
//        console.log("This constructor is of ex-1")
//    }
//    abc(x){
//       super.abc(x+1)
//       console.log("Modified")
//    }
// }
// let ex=new Example2("Anna")
// ex.abc(999) 
   // getter & setter
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



// Q: Run a function only once

function once(func,context){
   let run

   return function(){
   if(func){
      run= func.apply(context ||this,arguments)
      func=null
   }
   return run
   }
}
const hello= once((a,b)=> console.log("Helllo",a,b));
// hello(4,5)
// hello()
// hello()

//Another way
// let view
// function like(){
//    let called=0

//    return function(){
//       if(called>0){
//          return 
//       }
//       else{
//          view="Hello"
//          console.log("hi" + view)
//          called++
//       }
//    }

// }
// let y= like()
// y()
// y()
// y()

// Q: Module Pattern
// var Module=(function(){

//    function privateMethod(){
//       console.log("Private")
//    }

//    return {
//       publicMethod: function(){
//          console.log("public")
//       }
//    }
// })()
// Module.publicMethod()
// Module.privateMethod()






//OBJECTS
const key="middleName"
const value="A."

const obj={
   firstName:"Anas",
   lastName: "Karatela",
   [key]:value
}
obj.age=28
obj["age"]=23
// cc(obj.firstName)
// cc(obj["lastName"])
// cc(obj.middleName)
// cc(obj)





//Q:5
















