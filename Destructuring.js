let cc=console.log
// ARRAY DESTRUCTURING
let arr=["Anas","K"]

let [name,surname]=arr
cc(name)
cc(surname)

let [f,l]= "F L".split(" ")
cc(f,l)

// Ignoring elements using comma
let [a,,b]=["A","B","C"]
cc(a,b)

// Works with any iterable on right side
let[c,d,e]="CDE"
cc(c,d,e)
let[one,two,three]= new Set([1,2,3])
cc(one,two,three)

// Assign to anything at left side
let member={}; // Semicolon mandatory 
[member.f,member.l]= "A K".split(" ")
cc(member)

// Looping over properties
for(let [key,value] of Object.entries(member)){
    cc(`${key}: ${value}`)
}
// For Map - Returns iterables [key,value]
let map=new Map()
map.set("abc",1)
map.set("pqr",2)
map.set("xyz",3)
for(let[key,value] of map){
    cc(`${key}: ${value}`)
}

// Swaping
let x="X"
let y="Y";
[x,y]=[y,x]
cc(x,y)    

// ...rest parameter
let [q,w,...rest]=["a","b","c","d","e"]
cc(q,w,rest)

// Default values
// Empty values are treated as undefined not errors
let[n1,n2]=[]
cc(n1,n2);
// We can replace default value with missing one
[n1="N1",n2="N2"]=["n1"]
cc(n1,n2) // It will only change the missing one


// OBJECT DESTRUCTURING
let options = {
    title: "Menu",
    width: 100,
    height: 200     
  };
  
  let {title, width, height} = options;
  
  cc(title);  // Menu
  cc(width);  // 100
  cc(height); // 200 
  // Assigning a property with diff name to variable
  ({width:w,height:h,title:t}=options) // To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...)
  cc(w,h,t)

  // NESTED DESTRUCTURING
  let option = {
    size: {
      width1: 100,
      height1: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity
  let {
    size: { // put size here
      width1,
      height1
    },
    items: [item1, item2], // assign items here
    title1 = "Menu" // not present in the object (default value is used)
  } = option;
  cc(title1,width1,height1,item1,item2)


// SMART FUNCTION PARAMETER
let func={
    title:"Menuu",
    items:["Item1","Item2"]
}
function showMenu({title="Untitled",width=200,height=100,items=[]}){
    cc(title, width, height)
    cc(items)
}
showMenu(func)
