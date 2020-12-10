//Program to print multiplication table for a number


for (let i = 0; i <= 10; i++) {
    let j = 5;
    let k = i * j;
    // console.log(k);
}


function PrintMulti(t) {

    for (let i = 0; i <= 10; i++) {
        let k = t * i;
        console.log(`${t} * ${i} = ${k}`);
    }
}

// PrintMulti (5);





// Program to print multiplication table for a number upto some range (default should be 10)

function Multitable(m, range = 10) {
    for (let t = 1; t <= range; t++) {
        let multi = m * t
        console.log(`${m} * ${t} = ${multi}`)
    }

}


// Multitable (15,15);


// Program to print multiplication from numbers from m to n


function Multitable(m, n, range = 10) {
    for (let f = m; f <= n; f++) {
        for (let t = 1; t <= range; t++) {
            let multi = f * t ;
            console.log(`${f} * ${t} = ${multi}` )
           
        }
           
        }
    }

//Multitable(2, 6, 6);


// const people = [
//     { name: 'Elisha', DOB:'19930409', sex: 'Female'},
//     { name: 'Ram', DOB:'19950307', sex: 'Male'},
// ];

// console.table(people);

// process.stdout.write ("Hey");
// process.stdout.write ("Hey");
// process.stdout.write ("Hey");



// Write a string variable with paragraph as value. Find out all the followings:
    //a. Number of sentences, words and char.
    //b. Number of special characters.
    //c. Number of vowels and consonants.

function Para (){
    for (i=0; i<=j; i++){
    let paragraph = 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)'
    let j = 
    console.log(i);
    console.log(paragraph.split('.'));
}    
};

Para();

//Find a random number between provided m and n


function getRandom (m, n){
    return m + Math.random() * (n-m);
};
//or

// let getRandom =(m,n) => m + Math.random() * (n-m);
// console.log(getRandom (2,5));



// Find a random string of particular length

function getString (length){
    return Math.random().toString(36).slice(-length);
};

console.log(getString(7));



//Find normal distribution of set of Numbers







