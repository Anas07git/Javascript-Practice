// Q:1

// async function async1() {
//     console.log('async1 start'); // 2
//     await async2(); 
//     console.log('async1 end'); // 6
// }

// async function async2() {       
//    console.log('async2');  // 3
// } 

// console.log('script start');  // 1

// setTimeout(function () {
//     console.log('setTimeout'); // 8
// }, 0); 

// async1(); 

// new Promise(function (resolve) {
//     console.log('promise1');//  4
//     resolve();
//     }).then(function () { 
//        console.log('promise2');// 7
//    }); 
   

//    console.log('script end'); // 5

// // Q:2

// console.log("start")

// function imp(x){
//     setTimeout(()=>{
//         return `Hello ${x}`
//     },1000)
// }
// const y= imp("x")
// console.log(y)  // undefined

// console.log("stop")

// Solution
// console.log("start")

// function imp(x,cb){
//     setTimeout(()=>{
//          cb(`Hello ${x}`)
//     },1000)
// }
// const y= imp("World",(x)=>{
//     console.log(x)
// })


// console.log("stop")


// Q:3

// console.log("start")

// const p1= new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })

// p1.then((res)=>{
//    console.log(res)
// })

// console.log("end")

// Q:4

// console.log("start")

// const p1=()=> new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })
// console.log("middle")

// p1().then((res)=>{
//    console.log(res)
// })

// console.log("end")