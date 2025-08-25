// // push pop
// let fruits=["apple","mango","orange"];
// fruits.push("grapes")//[ 'apple', 'mango', 'orange', 'grapes' ] //push method se last me element add krna
// console.log(fruits) 
// fruits.pop() // last se remove krna
// console.log(fruits) //[ 'apple', 'mango', 'orange', 'grapes' ] //push method se last me element add krna

//shift unshift 
// let fruits=["apple","mango","orange"];
// fruits.unshift("papaya") //unshift =>start me add krna
// console.log(fruits)
// fruits.shift()        // shift=>start se remove krna
// console.log(fruits)

// length and access the element
// let fruits=["apple","mango","orange"];
// console.log(fruits.length);
// console.log(fruits[0])
// console.log(fruits[1])

//modify the element in array

// fruits[1]="papaya"
// console.log(fruits)

// indexOf=> find elemetn index
// let fruits=["apple","mango","orange"];
// console.log(fruits.indexOf("mango")) //1
// console.log(fruits.indexOf("pineapple")) // not found -1

//include =>check if element is exists

// let fruits=["apple","mango","orange"];
// console.log(fruits.includes("papaya")) //false
// console.log(fruits.includes("apple")) //true

//slice => copy krna but original array me change nhi krta
let fruits=["apple","mango","orange"];
let newfruits=[fruits.slice(1,3)]
let nfruits=[fruits.slice(1,1)]
let n=[fruits.slice(1)] //1 se lekar last tak
let s=[fruits.slice(-1)]
console.log(s)
// console.log(n);
// console.log(nfruits)
// console.log(fruits)

