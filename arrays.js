const cc= console.log
// Arrays
// let arr=["a","b","c",true, {name:"Anas"},'a']
// cc(arr.length)

// To access last element
// cc(arr[arr.length-1])
// cc(arr.at(-1))


// Looping - of and in
for(let a of arr){
    // cc(a)
}
for(let a in arr){
    // cc(arr[a])
    // cc(a)
}

// Type conversion
// cc([] + 1)    // 1
// cc([1] + 1)   // 11
// cc([1,2] + 1) // 1,21

// cc([]===[])  // false

// *ARRAY METHODS

// push and pop - Insert or remove element from last

// arr.pop()
// cc(arr)
// arr.push({name:"ANAS"})
// cc(arr)

// shift and unshift - Insert or remove element from front
// arr.shift()
// cc(arr)
// arr.unshift("A")
// cc(arr)


// SPLICE

// splice(startEle,deleteCount,addEle1....addEleN) - Returns array of deleted elements
// negative indexing allowed   - modify original array 
// cc(arr)
// cc(arr.splice(1,1,"B"))
// cc(arr)

// SLICE 
// slice(start,end) - Including start & Excluding end [start,end)
// negative indexing allowed - Returns new array of [start,end), - Wont modify original array 
// arr.slice(1,2)
// cc(arr)

// CONCAT  To add two or more elements 
// array.concat(ele...)  - Wont modify original array 
// cc(arr.concat([1,2]))
// cc(arr)

// FOREACH
// forEach(function(item,index,array){}) - Modifies original array - Returns undefined

// arr.forEach((item,i,arr)=>{
//     cc(`Item ${item} is at index ${i} in ${arr}`)
// })
// let num=[1,2,3,4]
// num.forEach((i,ind)=>{
//    num[ind]=i+ind
// })
// cc(num)

// INDEXOF/LASTINDEXOF - return the index if any otherwise -1
// cc(arr.indexOf("a")) //0
// cc(arr.indexOf("z"))  //-1
// cc(arr.lastIndexOf("a"))  //5

// INCLUDES - check if an item exists or not return true/false
// cc(arr.includes("b")) //true
// cc(arr.includes("z")) //false
// It can handle NaN correctly eg:
let list=[NaN]
// cc(list.indexOf(NaN)) // -1 should be 0
// cc(list.includes(NaN)) // true 

// FIND & FINDINDEX/FINDLASTINDEX - Used in array of objects
// find(function(item,index,array){}) if true the item is returned otherwise undefined
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
//   let user = users.find(item => item.id == 1);
  let user = users.findIndex(item => item.id == 1);
//   cc(user)
//   cc(user.name); // John

// SORT   - Will modify the original array
// sort(func()) - By default items are sorted as string
let x= [1,3,15,6,8,64]
x.sort((a,b)=> a-b)
// cc(x)

// REVERSE
// reverse() - Will modify the original array
let y=x.reverse()
// cc(x)


// SPLIT & JOIN
// split(param) - It splits the string into array
let names = 'Bilbo, Gandalf, Nazgul';

let ar = names.split(', ');
// cc(ar)
// join(param) - reverse of split
let arr1 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr1.join(',');
// cc(str)

// Array.isArray - To check whether its an array or not
//  cc(Array.isArray(arr1))

 
//FLAT & FLATMAP
// flat(depth) - It flats the array dimension by default 1(depth)
const a = [0, 1, 2, [3, 4]];
// cc(a.flat())

const b = [1, 2, 1];

const result = b.flatMap((num) => (num === 2 ? [2, 2] : 1));
// normal map
// const res=b.map((num) => (num === 2 ? [2, 2] : 1));
// cc(res)
// cc(result);


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

const res5= arr.myReduce((a,b)=>{
  return a+b
},0)
console.log(res5)

// const arr=["a","b","c","a","d"]

// // {a:2,b:1,c:1,d:1}

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


// const arr1= "john".split("")
// cc(arr1)
// const arr2= arr1.reverse()
// cc(arr2)
// const arr3= "jones".split("")
// cc(arr3)
// arr2.push(arr3)
// cc(arr1)
// cc(arr2)
// cc(arr3)
// cc(arr1.length +" " + arr1.slice(-1)) // 5 j,o,n,e,s
// cc(arr2.length +" " + arr2.slice(-1)) // 5 j,o,n,e,s
