let form= document.getElementById("addForm")
let input= document.getElementById("item")
let itemList= document.getElementById("items")
let search= document.getElementById("filter")

form.addEventListener("submit",addItem)

function addItem(e){
    e.preventDefault()
    // console.log("clicked")
    let toAdd=input.value
    console.log(toAdd)

    let li = document.createElement("li")
    li.className="list-group-item"
    li.appendChild(document.createTextNode(toAdd))
    let btn= document.createElement("button")
    btn.className="btn btn-danger btn-sm float-right delete"
    btn.innerText="X"
    li.appendChild(btn)
    itemList.appendChild(li)

}

itemList.addEventListener("click",deleteItem)

function deleteItem(e){
// console.log(e.target)
if(e.target.classList.contains("delete")){
    let li = e.target.parentElement
    itemList.removeChild(li)
}
}

search.addEventListener("keyup",filterItems)

function filterItems(e){
//   console.log(e.target.value)
let text = e.target.value.toLowerCase()
// console.log(text)
// console.log(itemList.children)
let items= itemList.children
Array.from(items).forEach((item)=>{
  let itemName= item.firstChild.textContent
  if(itemName.toLowerCase().indexOf(text)!=-1){
    item.style.display="block"
  }
else{
      item.style.display="none"

  }

})

}