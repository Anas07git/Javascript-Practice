const cc= console.log
// Primitive Data Type - Number
let n= 123.344
let billion= 1000000000
let also_valid= 1_000_000_000
billion=1e9

let mcs=0.0000001
mcs=1e-6

// hex,binary & octal numbers
// hex (0x)
cc(0xff)
cc(0xFF)
// oct (0o)
cc(0o377)
// bin (0b)
cc(0b11111111)

// Num to String toString(base) by default 10
cc(billion.toString())
cc(billion.toString(16))
cc(billion.toString(2))
// cc(billion)

// Rounding off
cc(Math.floor(3.1)) // 3
cc(Math.ceil(3.1)) // 4
cc(Math.round(3.5)) // 4
cc(Math.trunc(3.123)) // 3
cc(n.toFixed(2))
let b=n.toFixed(2)
cc(typeof b) // changes type to string


// Miscellaneous
cc(0.1 + 0.2==0.3)
cc(0.1 + 0.2) // 0.3000000004

// isNaN- converts its argument to a number and tests it for being NaN
cc(isNaN(NaN)) //true
cc(isNaN(123)) //false

// isFinite - converts args into number and returns true if regular number
// false if NaN/Infinity/-Infinity
cc(isFinite("str")) // false NaN
cc(isFinite("123")) // true
cc(isFinite(Infinity)) // false

// parseInt(str,base) & parseFloat(str,base)
cc(parseInt("100px")) //100
cc(parseInt("12.3"))  // 12
cc(parseFloat("12.3.4"))  // 12.3
cc(parseInt("a123"))  // NaN
cc(parseInt('ff',16)); //255
let parser=["2","1","11"].map(parseInt)
cc(parser)
// Explanation:
// map(element,index,array)-> parseInt(element/string,base)

// If the base provide is fasly then by default it is converted to Base 10 
// So "2" will be converted to 2

// "1" will be converted into NaN as Base/Radix 1 is has no 1
// "11" will be converted into 3( as 11 in base2 is 3)

// To work as expected :['1', '7', '11'].map(numStr => parseInt(numStr))



// Random from min to max [min,max) - floating num
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  cc((random(1,4)))
  cc((random(1,4)))



cc(1+"2"+"2") // "122"
cc(1+ +2+"2") // "32"
cc(1+ -"1" + "2") // "02"
cc(+"1"+"1"+"2") // "112"
cc("A"-"B"+"2") // "NaN2"
cc("A"-"B"+2)   // "NaN"