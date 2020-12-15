const authors = ["Elisha", "Bishnu", "Bikram"];
authors.push("Sheprata");
console.log(authors);

authors.pop("Sheprata");
console.log(authors);

console.log(authors.length);
let b = authors[0];
let l = authors[authors.length -1];


//alternative of pop and push
console.log(authors.shift("Elisha"));
console.log(authors.unshift("Dhriti"));

authors.splice(2,1);
let isThererAnyNameStartingWithE = authors.some(x => x.startsWith("E"));
let areAllNamesStartingWithE = authors.every(x => x.startsWith("E"));

authors.slice(2,5);






let sum = (x,y,z) => x+y+z;

let numbers = [3, 4, 5, 6, 1, 2, 3];

sum(numbers[0], numbers[1], numbers[2]);
sum (...numbers);       //spread operator


const allNumbers = [34, 45, ...numbers, 12, 89];

