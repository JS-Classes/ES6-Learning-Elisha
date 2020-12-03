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
            let multi = f * t;
            console.log(`${f} * ${t} = ${multi}`)
        }
    }
}

Multitable(2, 6, 6);


