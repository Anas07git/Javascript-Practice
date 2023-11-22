// CLOSURES
/*
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




// Q: Private Counter

// function count(){
//    let counter=0

//    function add(i){
//       counter+=i
//    }

//    function retrive(){
//       return "Counter =" + counter
//    }

//    return {add,retrive}
// }
// const c= count()
// c.add(10)
// c.add(10)
// console.log(c.retrive())

// Q: Module Pattern

// const Module=(function(){
//    function private(){
//       console.log("private")
//    }

//    return{
//       public: function(){
//          console.log("public")
//       }
//    }
// })()

// Module.public()
// Module.private()

// Q: Run Only Once

// function once(){
//    let called=0

//    return function(){
//       if(called>0){
//          // console.log("Already called")
//          return
//       }
//       else{
//          console.log("Calling")
//          called++
//       }
//    }
// }
// let isCalled=once()
// isCalled()
// isCalled()
// isCalled()

// POLYFILL FOR ONCE

// function once(func){
//    let ran

//    return  function(){
//       if(func){
//          ran= func.apply(this,arguments)
//          func=null
//       }
//       return ran
//    }
// }
// const hello= once(() => console.log("Hello"))

// hello()
// hello()
// hello()
// hello()

// Q: Memoize and Caching

// function myCache(fn,context){
//    const res={}

//    return function(...args){
//       var argCache=JSON.stringify(args)

//       if(!res[argCache]){
//          res[argCache]=fn.call(context||this,...args)
//       }
//       return res[argCache]
//    }
// }


// const product=(num1,num2)=>{
//     for(let i=1;i<=100000000;i++){}

//     return num1*num2
// }
// console.time("First Call")
// console.log(product(4444,4444))
// console.timeEnd("First Call")

// console.time("Second Call")
// console.log(product(4444,4444))
// console.timeEnd("Second Call")

// const memo= myCache(product)

// console.time("First Call")
// console.log(memo(4444,4444))
// console.timeEnd("First Call")

// console.time("Second Call")
// console.log(memo(4444,4444))
// console.timeEnd("Second Call")


// *CURRYING
// It is function that takes one arg at a time and returns
// a new function expecting the next arg
// f(a,b)-->f(a)(b)

function f(a){
     return function (b){
      console.log(a,b)
     }
   
}
// console.log(f(5)(6));

function sum(a){
   return function(b){
      return function(c){
         console.log(a+b+c)
      }
   }
}
// sum(2)(6)(1)

// Q: Reusing variable for logic

function calc(opr){
   return function(a){
      return function(b){
         if(opr== "add") return a+b
         else if(opr=="multi") return a*b
         else if(opr=="divide") return a/b
         else if(opr=="minus") return a-b
         else return "Bad Opr"

      }
   }
} 
const mul = calc("multi")
// console.log(mul(3)(2));


// Q: Infinite Currying

// function add(a){
//    return function(b){
//       if(b) return add(a+b)
//        return a 
//    }
// }
// console.log(add(3)(4)(9)(1)())


// Q: Partial Application (Not Currying)

function sum1(a){
   return function(b,c){
      return a+b+c
   }
}
// cc(sum1(1)(2,3))  
// Here no. of args more than nested function


// Q: Manipulating DOM

// function updateEle(id){
//    return function(content){
//       document.querySelector("#" + id).textContent=content
//    }
// }

// const updateHead=updateEle("h1")
// updateHead("Heloo World")


// Q: Currying Implementation

// function curry(func){
//    return function curriedFunc(...args){
//    if(args.length>=func.length){
//       return func(...args)
//    }
//    else{
//       return function(...next){
//          return curriedFunc(...args,...next)
//       }
//    }
//    }
// }
// const sum2=(a,b,c)=> a+b+c

// const total=curry(sum2)
// console.log(total(1)(8)(2))
*/
