function square (number)
{
    let squared = number * number;
    return squared;
}
let s = square(10);
console.log(s);

//Function expression: anonymous function

var fun1 = function  (number)
{
    let squared = number * number;
    return squared;
}
let s1 = fun1(10);
console.log(s);

//Arrow function
var fun2 = number => number * number;

(a,b) => {
    let sum = a + b;
    return sum;
}


//Closure
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

let inside_fn = outside(10); //give me a function that adds 10 to whatever comes to it
let result = inside_fn(40);
console.log(result);


function addSquares(a,b) {
    function square(x) {
        return x * x;
    }
    let result = square(a) + square(b);
    return result;
}

let r = addSquares (3,4);
console.log(r);


//Example 3
let createPet = function (name) {
    return {
        setName: function (newName) {
            name = newName;
        },
        getName: function() {
            return name;
        }
    }
}

let dog = createPet ('puggie');


// let createPet => name {
//     return {
//         setName: newName => name = newName,
//         getName: () => name
//     }
// }

// let dog = createPet ('puggie');


//Parameters
function formatName (name, address, salutation = "Mr./Ms.") {
    let completeName = salutation + ", " + name + ", " + address
    return completeName;
}

let n = formatName ("Mrs.", "Elisha Maharjan", "Patan");
console.log(n);

//Rest parameters
function add(a, b, ...moreArgs)
{
    console.log(a);
    console.log(b);
    console.log(moreArgs);
}

add(5,6);
add(5,6,7,8,4);
