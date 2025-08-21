// async function f1(){
//     const y =await 20;
//     console.log(y)
// }
// f1()


// const person = { 
// firstName: "John", 
// lastName: "Doe", 
// // Getter 
// get fullName() { 
// return `${this.firstName} ${this.lastName}`; 
// }, 
// // Setter 
// set fullName(value) { 
// const parts = value.split(' '); 
// this.firstName = parts[0]; 
// this.lastName = parts[1]; 
// } 
// }; 
// console.log(person.fullName); // "John Doe" 
// person.fullName = "Jane Smith"; 
// console.log(person.firstName); // "Jane" 

//Object in js 
// const person={
//     name:"aashish",
//     age:21,
//     greet:function(){
//          return `Hello  I am${this.name}`
//     }
// }
// person.name // aashish
// person.age //21
// person // pura object return kr dega


//synchronous
// console.log("hello 1")
// console.log("hello 2")

//asynchronous
// console.log("start first")
// setTimeout(()=>{
//     console.log("hello")

// },2000)
// console.log("end second ")

//Recursion => the method is call itself is called recursion 
// function fact(n){
//     if(n<=1) return 1;
//     return  n*fact (n-1)

// }
// fact(3)

// function fact(n){
//     if(n<=1) return 1;
//     return  fact (n-1)*n

// }
// fact(4)

//Method Chaining in js
// class Calculator { 
// constructor() { 
// this.value = 0; 
// } 
// add(n) { 
// this.value += n; 
// return this; 
// } 
// subtract(n) { 
// this.value -= n; 
// return this; 
// } 
// multiply(n) { 
// this.value *= n; 
// return this; 
// } 
// getValue() { 
// return this.value; 
// } 
// } 

// new Calculator() 
// .add(5) 
// .multiply(2) 
// .subtract(3) 
// .getValue(); // 7


// defualt parameter in js
 
// function greet(name="Aashish",age=21){
//     console.log("hello  "+ name + "Age is  "+ age)
// }
// greet("aman",55);
// greet()

// function test(name="Aashish",age=21){
//     return ` ${name},${age};`
// }
// test("annu",45)

// console.log(true+"1")

//Hof =>higher order function 
// hof is a function that take one or more function as a arguments to the another function and 
//it retrun always function 

// example me map(), filter(), reduce() these are the example of hof
// let numbers=[2,3,5,6];
// let double=numbers.map(nums=>nums*2);
// console.log(double)

//Hoisting 

// add(4,3)
// function add(a,b){
//     return a+b;
// }



//difference way to create functions 
//1. function declaration 

// function h(){
//     console.log("hello")
// }
// h()
//   function greet(name){
//     console.log("hello "+ name)
//   }
//   greet("aashish")


//2. function expression => function ko kisi variable me store karna
 
// let greet=function(name){
//     console.log("hello "+name)
// }
// greet("Aashish")

//3.Arrow function

// const add = (a,b)=>{
//     return a+b
// };

// add(4,3) //return 7

// const add=(a,b) => a+b;  //shorter way
// add(2,3);

//4. iife => imediately invoke function expression

// (function(name){
//     console.log("Hello"+name)
// }),("Ashish")


//function

// function name(){
//     console.log("aashish gupta")
// }
// name();
// const add=(a,b)=>{
//     c=a+b;
//     return c
// }
// d=add(5,2)
// console.log(d)

// function sum(a,b){
// c=a+b;
// return c
// }

// sum(5,8)
// console.log(c)

//loops
// let a="aashish gupta"
// for(let i=1;i<=5;i++){
//     console.log(a)
// }

//forinloop
// for(key in object){
//     //code
// }

// const marks={
//     aashish:"50",
//     aman:"70",
//     rohit:"55"
// }
// for(key in marks){
//     console.log(key)
// }




// for of loop
// for(variable of iterable){
// code
// }

// for(key of "aashish"){
//     console.log(key)
// }
//  i=0;
// while(i<3){
//     console.log(a)
//     i++;
// }


//conditional statement
// if-statement
// else-statement
// else if -statement

//logical operators
 //and or not

//ternary operators  condition?case1:case2
// let marks=5;
// marks>33?console.log("Pass"):console.log("Pass")


//comparison operator [==,!=,===,!===,<,>,<=,>=,]
// let a=52;
// let b=41;
// console.log(a==b)
// console.log(a!=b)
// let c=41;
// let d=42;
// console.log(c<=d)
// console.log(c!==d)
// console.log(c===d) //it check equal and its type 

//assignment operators[=,+=,-=,*=,/=,%=,**=]

// let a=5;
// a=a+2;
// console.log(a)
// let b=10;
// b%=2;
// console.log(b)
// let b=10;
// b**=2;
// console.log(b)

//arithmetic operators [+,-,*,/,**,%,++,--]

// let a=20;
// let b=10;
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)
// console.log(a++)
// console.log(a)
// console.log(b--)
// console.log(b)


//Object
// const student={
//     name:"aashish",
//     age:"20",
//     roll:"20"
// }
// student["marks"]=70
// console.log(student)
// console.log(student["name"])

//primitive data type
// let a=50;
// let b="apple"
// let c=null;
// let d=Symbol("hello world");
// let e=undefined;
// let f=true;
// let g=BigInt("55544")

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))
// console.log(typeof(e))
// console.log(typeof(f))
// console.log(typeof(g))


// const a=6;
// console.log(a) //  block level scope -const decleared only one time and assign one time 


// let a=5;
// a=9;  // let is block level scope it decleared only one time and assign multi time modern way
// console.log(a)


// var a=5;
// var a=6;  // var is global scope and re decleared many time and it is old way 
// console.log(a) 