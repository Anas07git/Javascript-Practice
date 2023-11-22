// WeakMap & WeakSet (Mandatory object as a key)

// If we use an object as the key in a regular Map, then while the Map exists
// that object exists as well. It occupies memory and may not be garbage collected.
// Eg:
let johny = { name: "John" };

let mapp = new Map();
mapp.set(johny, "...");

johny = null; // overwrite the reference

// johny is stored inside the map,
// we can get it by using map.keys()
console.log(mapp.keys())

// WeakMap garbage collectes if the there is no ref to the object
// In WeakMap keys must be objects not primitive type
let object={name:"Null"}
let weakmap= new WeakMap()
weakmap.set(object,"...")
object=null
console.log(weakmap.get(object)) // undefined

// Usecase
// 1) Additional Data Storage
// If we’re working with an object that “belongs” to another code,
// maybe even a third-party library, and would like to store some data associated with it,
// that should only exist while the object is alive – then WeakMap is exactly what’s needed

// 2) Caching 
// Another common example is caching. We can store (“cache”) results from a function,
// so that future calls on the same object can reuse it.

// WeakSet - Similar to WeakMap