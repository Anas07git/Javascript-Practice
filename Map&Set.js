// MAP
// Map is a collection of keyed data items, just like an Object
// but the main difference is that Map allows keys of any type

// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count

let map = new Map();
// console.log(typeof map)

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3

// Map can also use object as a key
let john = { name: "John" };

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);
console.log( visitsCountMap.get(john) );

// Iteration over Map
let example= new Map([
    ['a',1],
    ['b',2],
    ['c',3],
])

for(let e of example.keys()){
    console.log(e)
}
for(let e of example.values()){
    console.log(e)
}
for(let e of example){ // same as example.entries()
    console.log(e)
}
example.forEach((value,key,map)=>{
    console.log(`${key}: ${value}`)
})

// Map from an Object
let obj={
    name:"Anas",
    age:"22",
}
let map1= new Map(Object.entries(obj))
// console.log(typeof map1)
console.log(map1)
console.log(map1.get('age'))

// Object from Map
let example1= Object.fromEntries([
    ['a',1],
    ['b',2],
    ['c',3],
    ['1','str1'],
    [1,'num1']
])
console.log(example1)
// OR
let obj1= Object.fromEntries(map.entries())
console.log(obj1)

// SET
// A Set is a special type collection – “set of values” (without keys)
// where each value may occur "only once".

// Its main methods are:

// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

let set = new Set();

let john1 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// some users come multiple times
set.add(john1);
set.add(pete);
set.add(mary);
set.add(john1);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}
set.forEach((value,valueAgain,set)=>{
    console.log(value)
})

//Q: Filter unique array members
function unique(arr) {
    // return Array.from(new Set(arr));
    return [...new Set(arr)]
  }
  let values=["a","b","c","d","a","b","c","d"]
  console.log(unique(values))

// Q: Filter Anagrams
function aclean(arr) {
    // let map = new Map();
  
    // for (let word of arr) {
    //   // split the word by letters, sort them and join back
    //   let sorted = word.toLowerCase().split('').sort().join(''); 
    //   map.set(sorted, word);// Will override the existing value
    // }
  
    // return Array.from(map.values());
    let set = new Set()
    for(let word of arr) {
        // split the word by letters, sort them and join back
        let sorted = word.toLowerCase().split('').sort().join(''); 
        set.add(sorted)
      }
     return [...set]
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log( aclean(arr) );

  // Q: Iterable keys
  // Problem
  let map2 = new Map();

map2.set("name", "John");

let keys = map2.keys();

// Error: keys.push is not a function
// keys= Array.from(map2.keys())
keys= [...keys]

keys.push("more")
console.log(keys)

