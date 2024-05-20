const name = "ibrar"
const countRepo = 10

//console.log(`my name is ${name} and my repository id ${countRepo}`);    

//decleare string
const gameName = new String("ibrar-ar-ain")
// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.indexOf('r'));
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));

//const newString = gameName.substring(0,4)
//console.log(newString);


const anotherString = gameName.slice(-10,2)

console.log(anotherString);

const newStringOne = "   ibrar    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove white spaces

const url = "https//ibrar,com/ibrar%20arain"
console.log(url.replace('20', '-'));

console.log(url.includes('ibrar'))

console.log(gameName.split('-'));
