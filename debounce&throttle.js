const btn=document.querySelector(".btn")
const pressed= document.querySelector(".pressed")
const triger= document.querySelector(".triger")

let btnCount=0,trigerCount=0;

// Lodash - Debounce

// const debounced= _.debounce(()=>{
//     triger.innerHTML=++trigerCount
// },800)

// Custom Debounce

const myDebounce= (cb,d)=>{
    let timer
    return function(...args){
        if(timer) clearTimeout(timer)
        timer= setTimeout(()=>{
            cb(...args)
        },d)
    }
}
const debounced= myDebounce(()=>{
    triger.innerHTML=++trigerCount
},800)

// Lodash Throttling
// const throttle= _.throttle(()=>{
//     triger.innerHTML=++trigerCount
 
// },800)

// Custom Throttling
// const start = new Date().getTime()
const myThrottle= (cb,d) =>{
    let last =0
    return function(...args){
        let now = new Date().getTime()
        if(now-last<d) return
        last=now
        return cb(...args)
    }
}
const throttle= myThrottle(()=>{
    triger.innerHTML=++trigerCount
    // const end = new Date().getTime()
    // console.log(end-start)
    
},1000)

btn.addEventListener("click",()=>{
    pressed.innerHTML=++btnCount
//    debounced()
throttle()
})  