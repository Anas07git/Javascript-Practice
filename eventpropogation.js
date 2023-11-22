// Bubbling - Goes from bottom to top

// const div=document.querySelector("div")
// const form=document.querySelector("form")
// const button=document.querySelector("button")

// div.addEventListener("click",function(){
//     alert("DIV")
// })
// form.addEventListener("click",function(){
//     alert("FORM")
// })
// button.addEventListener("click",function(){
//     alert("BUTTON")
// })

// Events that dont bubble - focus,blur etc..

// Q: event.target vs event.currentTarget vs this.target

// div.addEventListener("click",fun)
// form.addEventListener("click",fun)
// button.addEventListener("click",fun)

// function fun(event){
//     alert(
//     "currentTarget= " +
//     event.currentTarget.tagName +
//     ", target =" +
//     event.target.tagName +
//     ", this=" +
//     this.tagName
//     )
// }

// Conclusion- event.target doesnt bubble compared to this and currtarget


// Event Capturing - From top to bottom

// div.addEventListener("click",function(){
//     alert("DIV")
// },{
//     capture:true
// })
// form.addEventListener("click",function(){
//     alert("FORM")
// },{
//     capture:true
// })
// button.addEventListener("click",function(){
//     alert("BUTTON")
// },{
//     capture:true
// })

// How to stop event bubbling or capturing


// div.addEventListener("click",function(e){
//     e.stopPropagation()
//     alert("DIV")
// })
// form.addEventListener("click",function(e){
//     e.stopPropagation()
//     alert("FORM")
// })
// button.addEventListener("click",function(e){
//     e.stopPropagation()
//     alert("BUTTON")
// })

// First event capturing and then bubbling happens while running script


// EVENT DELEGATION

document.querySelector(".products").addEventListener("click",function(e){
 if(e.target.tagName=== "SPAN"){
    window.location.href+="/"+ e.target.className
 }
})