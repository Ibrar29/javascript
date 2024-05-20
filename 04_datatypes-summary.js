// premitive datatype

// 7 categories : String,number, boolean, null, undefined, symbol

//  reference type or non primitive datatype

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id =Symbol('147')
const anotherId = ('876')

//console.log(id === anotherId);  // check data types

// Array , Objects, Functions

const heros = ["muhammad", "maqsood"];

// {
//     name :"ibrar",
//    // age: 22,
// }
const  myFunction = function() {
  //  console.log("hello world");
};

//console.log(typeof myFunction);





// +++++++++++++++++++++++++++++++++++++++++++++
// Stack  (primitive) copy value milti hy , Heap (non-premitive) original value milti hy

let myName = "ibrar"

let anotherName = myName
anotherName ="arainBaba"
//console.log(myName);
//console.log(anotherName);


let user1 ={
  email:"ibrargmail.com",
  upi: "user hbl"

}
let user2 = user1

user2.upi ="bilal gmail.com"

console.log(user1.upi);
console.log(user2.upi);

