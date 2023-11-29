// Shows different properties and methods attached to the document
// console.dir(document)

// *SELECTORS
// 1) getElementByid()
let headerTitle= document.getElementById("header-title")
console.log(headerTitle)

// textContent - Doesnot focuses on style
headerTitle.textContent="Item Header"

// innerText - Focuses on style
headerTitle.innerText="Item header"

// innerHTML - Will create a child element
headerTitle.innerHTML="<h3> Item Head</h3>"

// style - For styling purpose 
// selector.style.styleName(In camelCase)="give style"

headerTitle.style.borderBottom="solid 3px #000"


// 2) getElementsByClassName() - Plural returns array of elements
let items= document.getElementsByClassName("list-group-item")
console.log(items)
items[0].style.backgroundColor="#f4f4f4"
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor="#f4f4f4"
}

// 3) getElementByTagName()  - Returns list of elements
let li= document.getElementsByTagName("li")
console.log(li)
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight="bold"
}

// 4) querySelector()/querySelectorAll()
let group= document.querySelector(".list-group")
 group.style.borderBottom="solid 2px #ccc"

let input = document.querySelector("input") // Will only catch the first one
input.value="Item 5" 
let submit = document.querySelector('input[type="submit"]') // Will only catch the first one
 submit.value="Go"


let queryItem= document.querySelector(".list-group-item") 
console.log(queryItem.innerText)
queryItem.style.color="red"

let lastQueryItem= document.querySelector(".list-group-item:last-child")
lastQueryItem.style.color="blue" 

let nthQueryItem= document.querySelector(".list-group-item:nth-child(2)")
nthQueryItem.style.color="green"

// querySelectorAll() 

let selectAll= document.querySelectorAll("li:nth-child(even)")
console.log(selectAll)

for(let i=0;i<selectAll.length;i++){
    selectAll[i].style.backgroundColor="#ccc"
}



// * TRAVERSING THE DOM
// 1) parentNode/parentElement
let listItems=document.querySelector("#items")
console.log(listItems.parentElement)
listItems.parentNode.style.backgroundColor="#f4f4f4"

// 2) childNodes - Will include the white space
console.log(listItems.childNodes)
// 3) children - Wont include the white space
listItems.children[2].textContent="ITEM 3"

// 4) firstChild/lastChild
// Returns first/last child accordingly including white spaces

// 5) firstElementChild/lastElementChild
// Returns first/last child accordingly without white spaces
console.log(listItems.firstElementChild.textContent)
listItems.firstElementChild.textContent="ITEM 1"
listItems.lastElementChild.textContent="ITEM 4"

// 6) previousSibling/nextSibling
// Returns previous/next sibling element including white spaces(#text)
 
// 7) previousElementSibling/nextElementSibling
console.log(listItems.previousElementSibling)
listItems.previousElementSibling.style.color="darkblue"



// * CREATING AND ALSO MANIPULATING DOM ELEMENTS
let newDiv=document.createElement("div")
console.log(newDiv)

newDiv.className="hello"
newDiv.id="world"

// We can also set/get our own attribute
newDiv.setAttribute("key","unique")
console.log(newDiv.getAttribute("key"))
// newDiv.innerText="Div"
// newDiv.innerHTML="Div"
// newDiv.textContent="Div"

// We can aslo create text node and append it to div
let newDivText= document.createTextNode("WELCOME !")
newDiv.appendChild(newDivText)

// Now inserting our element in the DOM
let container= document.querySelector("header .container")
let h1= document.querySelector("header h1")
container.insertBefore(newDiv,h1)

newDiv.style.fontSize="20px"
