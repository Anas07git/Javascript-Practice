// FUNCTIONS
/*
// Function Statement/Declaration : Hoisted
function a(){
    console.log("a")
 }

 // Function Experssion : Not Hoisted 
 var b=function (){
    console.log("b")
   
 }
 
 // Anonymous Function : were function are used as values
   function(){

   }
// Named Function Exp
 var b=function abc(){
    console.log("b")
 }

 // First Class Functions : using as arguments & returning func() from func()
   var b=function (p){
    console.log(p)
 }
 b(function(){

 })

 
 // IIFE IMMEDIATELY INVOKED FUNCTIONS
 // To avoid global namespace (memory) and execute async-await
 let a= ()=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
          resolve(295)
         },3000)
      })
   }
   (async()=>{
      let c= await a()
      console.log(c)
      let d= await a()
      console.log(d)
      let e= await a()
      console.log(e)
   })()


   // Ways to create IIFE

(function() {
  console.log("Parentheses around the function");
})();

(function() {
  console.log("Parentheses around the whole thing");
}());

!function() {
  console.log("Bitwise NOT operator starts the expression");
}();

+function() {
  console.log("Unary plus starts the expression");
}();
   
// ARROW-FUNCTIONS
 Arrow funcs dont have their own (this) they take the
 (this) of its lexical parent
 eg:
  const x={
   name:"Anas",
   func: function(){
      setTimeout(()=>{
      console.log(this.name)
      },1000)
   }
  }
 x.func()
 // We dont have arguments keyword in arrow function
 eg: Not valid
 const fn=()=>{
   console.log(arguments)
 }


   // Call-Backs
   function x(y){
      console.log("x")
      y()
   }
   x(function(){
       console.log("y") 
   })
   
   // Function Scope
   
   for(var i=0;i<5;i++){
       setTimeout(()=>{
           console.log(i)
       },i*1000)
   } // 5,5,5,5,5
   
   for(let i=0;i<5;i++){
       setTimeout(()=>{
           console.log(i)
       },i*1000)
   } // 0,1,2,3,4


   // Problems of Call Backs
 1) Call back Hell: 
 When a function is passed as an argument to another function, it becomes a callback function.
 This process continues and there are many callbacks inside another's Callback function.
 This grows the code horizontally instead of vertically. That mechanism is known as callback hell.

 2) Inversion of Control
 When we give the control of callbacks being called to some other API, 
 this may create a lot of issues. 
 That API may be buggy,  may not call our callback and create order as in the above example, may call the payment callback twice etc.


// FUNCTION HOISTING
 var x=21
 var func=function(){
   console.log(x)
   var x=23
 }
func() // undefined will check local scope brand new exe context




*/