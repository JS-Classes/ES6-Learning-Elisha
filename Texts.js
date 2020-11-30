
let hackathon = 'Hackathon 2020'; // this is called statement
//Hackathon 2020 is called expression

//String literal
let text = `Cotiviti ${hackathon}`;  //placeholder 
console.log(text);

let name = `\`Cotiviti\` ${hackathon}`;  //placeholder 
console.log(name);

let example = `Cotiviti ${hackathon},
'Cotiviti' ${hackathon}`;

console.log(example);

let example2 = `Hattisar ${10+20}`
console.log(example2);

//Nesting
let x = "X";
let y = "Y";
let isMale = true;
let z = `${isMale ? x : y}`;
console.log(z);

//Regular Expression
let c = "23 87h hfjk 345 6575 4n gn";
let re = /\d/; //can also be written as re = /[0-9]/
//let re1 = new RegExp('[0-9]');
let d = c.match(re); //re and re1 gives the same result
console.log(d);


let r = "23 87h hfjk 345 6575 4n gn";
let rr = /sf/; //can also be written as re = /[0-9]/
//let re1 = new RegExp('[0-9]');
let g = r.match(rr); //re and re1 gives the same result
console.log(g);





