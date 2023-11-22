// Call - Function Borrowing
// When we need to call a func with reference to some particular
// object we use call 
let obj={
    name:"Anas"
}

function hello(age,num){
    return "Heloo" +" "+ this.name + " " + age +" " + num
}

// console.log(hello.call(obj,12))

// Apply - same as call but take arg in the form of an array
// console.log(hello.apply(obj,[11,13]))

// Bind - Gives copy of function which can be invoked later
const bind= hello.bind(obj)// will provide the func as a whole
// console.log(bind(11,23))

//Q:1
const age=10

let obj1={
    age:12,
    getAge:function(){
        return this.age
    }
}

// console.log(obj1.getAge.call({age:24}))

//Q:2
const animals=[
    {spec:"Lion",name:"King"},
    {spec:"Whale",name:"Queen"}
]
function printAnimals(i){
    this.print=function(){
        console.log("#"+i+ this.spec+ " " +"is" + this.name)
    }
    this.print()
}
for(let i=0;i<animals.length;i++){
    // printAnimals.call(animals[i],i)
}

//Q:3 Append an array to another array

const arr=["a","b"]
const ele=[0,1,2]

// arr.push.apply(arr,ele)
// console.log(arr)

// arr.push(ele)
// const n=arr.flat()
// console.log(n)


//Q:4 Min/Max
const nums=[4,5,6,7,8]
// console.log(Math.max.apply(null,nums))

// Q:5 Bound Function
function f(){
    console.log(this)
}
let user={
    g: f.bind(null)
}

// user.g()

// Q:6 Bind Chaining (NP)

function f1(){
    console.log(this.name)
}

f1= f1.bind({name:"Anas"}).bind({name:"Anna"})
//f1()
// We cannot manipulate the context of arrow func using c,a&b

// Polyfill 
// 1) Call
Function.prototype.myCall= function(context ={},...args){
    if(typeof this!== "function"){
        throw new Error(this + "Not Callable")
    }
    context.fn=this
    context.fn(...args)
}
let car={
    color:"Red"
}
function purchase(rupees,paisa){
   console.log(` I have purchased this ${this.color} car with Rs${rupees} and ${paisa} paisa`)
}
// purchase.myCall(car,20000)

//2) Apply
Function.prototype.myApply= function(context ={},args=[]){
    if(typeof this!== "function"){
        throw new Error(this + "Not Callable")
    }
    if(!Array.isArray(args)){
        throw new Error("Please provide args in array")
    }
    context.fn=this
    context.fn(...args)
}
// purchase.myApply(car,[20000,10])

//3) Bind
Function.prototype.myBind= function(context ={},...args){
    if(typeof this!== "function"){
        throw new Error(this + "Not Bound")
    }
    context.fn=this
     return function(...newArgs){
        return context.fn(...args,...newArgs)
     }
}
const bound= purchase.myBind(car,2000,400)
// console.log(bound())