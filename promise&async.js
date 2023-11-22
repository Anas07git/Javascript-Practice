 // Promises 

// A promise is an object representing eventual completion of async operation

// We use promises because it gives control of the function to whoever passes in a callback function.
// The result of a promise is also immutable so it can't be changed while in transfer.
// It also produces cleaner code by avoiding the pyramid of doom

// eg:
// const promise= new Promise((res,rej)=>{
//  setTimeout(()=>{
//     const result= true
//     if(result) res("Resolved")
//     else rej(new Error("Not Resolved"))
//  },2000)
// })

// promise.then((res)=>{
//  console.log(res)
// })
// .catch((err)=>{
//  console.log(err)
// })


function abc(x){
    return new Promise((res,rej)=>{
       setTimeout(()=>{
          res(`Hello ${x}`)
       },1000)
    })
 }
  function pqr(x){
    return new Promise((res,rej)=>{
       setTimeout(()=>{
          res(`Hi ${x}`)
       },6000)
    })
  }
  function xyz(x){
    return new Promise((res,rej)=>{
       setTimeout(()=>{
          res(`Bye ${x}`)
       },5000)
    })
  }
 // Tradtional approach
 
//  abc("Anas")
//  .then((res)=>{
//     console.log(res)
//     pqr("Anas").then((res)=>{
//        console.log(res)
//        xyz("Anas").then((res)=>{
//           console.log(res)
//     })
//   })
//  })
//  .catch((err)=>{
//     console.log(err)
//  })

 // Promsie Chaining
 
 // abc("Anas")
 // .then((res)=>{
 //    console.log(res)
 //    return pqr("Anas")
 // }).then((res)=>{
 //    console.log(res)
 //   return xyz("Anas")
 // }).then((res)=>{
 //    console.log(res)
 // }).catch((err)=>{
 //    console.log(err)
 // })

 // Promise Combinators/API
 //1. Promise.all 
  // Run all the promises in parallel and return array of fulfilled promises
  // If any one of the promises fails it wont run
 
  //2. Promise.race
   // Returns first(completes first) resolved/rej  promise
  
   // 3. Promise.allSettled replica of (all)
   // Returns all promise (rejected/resolved)
  
  // 4. Promise.any  similar to .race
  // will find first resolved promise if not any will throw error 
 //  Promise.any([
 //    abc("Anas"),
 //    pqr("Anas"),
 //    xyz("Anas")
 //  ])
 //  .then((res)=>{
 //    console.log(res)
 //  }).catch((err)=>{
 //    console.log("Error Promise Failed: ",err)
 //  })
 
 // ASYNC-AWAIT
//   const result= async()=>{
  
//     try {
//        const m1= await abc("Anas")
//        console.log(m1)
       
//        const m2= await pqr("Anas")
//        console.log(m2)
       
//        const m3= await xyz("Anas")
//        console.log(m3)
     
//     } 
//     catch (error) {
//        console.log("Error Promise Failed: ",error)
//     }
    // In try only sync code can be handled
    // Wont work
    //  try{
    //     setTimeout(()=>{
    //       console.log("abc")
    //     },1000)
    // }
    // Will work
    //    try{
    //     setTimeout(()=>{
    //       try{
    //   console.log("abc")
    //        }
    //    catch(err){
    //    console.log(err)
    //   }
    //     },1000)
    // }
 
 // }
 //result()
//  const result1=async()=>{
//     try{
//     function abc(x){
//        return new Promise((res,rej)=>{
//           setTimeout(()=>{
//              res(`Hello ${x}`)
//           },3000)
//        })
//     }
//    const a1= await abc("aa")
//    console.log(a1)
//      function pqr(x){
//        return new Promise((res,rej)=>{
//           setTimeout(()=>{
//              rej(`Hi ${x}`)
//           },5000)
//        })
//      }
//      const a2=await pqr("ab")
//      console.log(a2)
//      function xyz(x){
//        return new Promise((res,rej)=>{
//           setTimeout(()=>{
//              res(`Bye ${x}`)
//           },1000)
//        })
//      }
//      const a3= await xyz("zz")
//      console.log(a3)
//     }
//     catch(err){
//        console.log(new Error("Promise failed"),err)
//     }
//  }
//  result1()
 
//  const f= new Promise((resolve, reject) => {
//     resolve("First")
//  })
//  const s= new Promise((resolve, reject) => {
//     resolve(f)
//     console.log(f)
//  })
//  s.then((res)=>{
//     console.log(res)
//     return res  
//  })
//  .then((res)=>console.log(res))
 
 // FETCH API

 //  let p= fetch("https://goweather.herokuapp.com/weather/dubai")
 //  p.then((res)=>{
 
 //    return res.json() // Response class containing "status" & "ok"
 //  }).then((res)=>{
 //    console.log(res)  // To access body using .json()/.text()
 //  })

  // POST METHOD using.then()

 //  let options = {
 //    method: "POST",
 //   body: JSON.stringify({
 //     title: 'fooo',
 //     body: 'barr',
 //     userId: 1,
 //   }),
 //   headers: {
 //    'Content-type': 'application/json; charset=UTF-8',
 //  },
     
 //  }
 //  fetch("https://jsonplaceholder.typicode.com/posts",options)
 //  .then((response)=> response.json())
 //  .then((resp)=> console.log(resp))
 
  // using async await
 
//   const asyncFetch= async()=>{
//     let options = {
//        method: "POST",
//       body: JSON.stringify({
//         title: 'fooo',
//         body: 'barr',
//         userId: 1,
//       }),
//       headers: {
//        'Content-type': 'application/json; charset=UTF-8',
//      },
        
//      }
//      let p = await fetch("https://jsonplaceholder.typicode.com/posts",options)
//      let response= await p.json()
//      console.log(response)
//   }
  //asyncFetch()
 //  const getId= async(id)=>{
 //    let response= await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
 //    let r= await response.json()
 //    console.log(r)
 //  }
 //  getId(12)  

 
//  const asy=async()=>{
    
//     let p1= new Promise((resolve, reject) => {
//       setTimeout(()=>{
//          resolve("First")
//       },3000)
//     })
//     let p2= new Promise((resolve, reject) => {
//       setTimeout(()=>{
//          resolve("Second")
//       },3000)
//     })
   
   
   
   
   
//    console.time("getting q2")
//     const q2=await p2
//    //  console.log("got q2")
//      console.log(q2)
//      console.timeEnd("getting q2")

//      console.time("getting q1")
     
//      const q1=await p1
//      console.log(q1)
//      console.timeEnd("getting q1")
//    //   console.log("got q1")



//   }
//  asy()

 // Promise Recursion Proto(Promise.all)
 
//  function promRecurse(funcPro){
//    if(funcPro.length===0) return

//    const currProm=funcPro.shift()

//    currProm.then((res)=> console.log(res))
//    .catch((err)=>console.log(err))

//    promRecurse(funcPro)
//  }
//  promRecurse([
//    abc("Anas"),
//    pqr("Anas"),
//    xyz("Anas")
//  ])


// let p1=async()=>{

//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve("p1")
//       }, 1000);
//    })
// }
// let p2=async()=>{

//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve("p2")
//       }, 2000);
//    })
// }
// let p3=async()=>{

//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve("p3")
//       }, 3000);
//    })
// }

// let call=async()=>{
//    console.time("run")
//    //  let a= await p1()
//    //  let b= await p2()
//    //  let c= await p3()
//    //  console.log(a,b,c)
//     let p= await Promise.all([p1(),p2(),p3()])
//     console.log(p)

//    console.timeEnd("run")
// }

// call()

// Cookies - They are small strings of data stored directly into browser

// we can access using document.cookie (key=vaue ;)
// document.cookie="name=anas"
// document.cookie="name2=anas1"
// let key = prompt("Enter Key")
// let value= prompt("Enter value")
// document.cookie= `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)
// Cookies are added not overrided

// Usecase
// Tracks user activity to show targeted info
// Ads 
// Remember login details

// Session - Made on server all pages are stateless to maintain state
// management we use session

const p1= new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("P1 resolved")
    },5000)
})
const p2= new Promise((resolve, reject) => {
   setTimeout(()=>{
     resolve("P2 resolved")
   },6000)
})
async function handle(){
   console.log("hello")
   const val1= await p1
    console.log("val1 waiting")
    console.log(val1)

    const val2= await p2
    console.log("val2 waiting")
    console.log(val2)



}
handle()