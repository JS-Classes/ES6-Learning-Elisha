// if...else 
let x = 34;
if (x <= 45)
{

}
else if (x < 60)
{

}
else{

}

//Switch
let y = "b";
switch (y)
{
    case "a":
        break;
    case 'b':
    case 'c' :
        break;
    
}

//Loops

for (let i = 0; i < 10; i++)
{
    console.log (i + 1);
}

// while
let i = 0;
while (i < 10)
{
    console.log(i + 1);
    i++;
}

//do while
let j = 0;
do 
{
    console.log(j + 1);
    j++;
} while (j<10);


//for... of
let numbers = [23, 45, 67, 89, 90];
for (let number of numbers)
{
    console.log(number)
}


//for.. in
let person = {name: 'Elisha', address: 'Lalitpur'};
for (let property in person)
{
    console.log(property)
}


let person1 = {name: 'Elisha', address: 'Lalitpur'};
for (let property in person)
{
    console.log(`${property} = ${person1[property]}`)
}

//break, continue : label

for  (let x = 0; x < 5; x++)
{
    if (x == 3)
    {
        continue;
    }
    console.log(x);
}

for  (let x = 0; x < 5; x++)
{
    if (x === 3)
    {
        break;
    }
    console.log(x);
}


if ("2" == 2)
{
    console.log("how does ")
}


outer:
for ( let x = 0; x < 5; x++)
{
    inner:
    for (let y=0; y < 5; y++)
    {
        if ( x===3 && y===3)
        {
            break outer;
        }
        console.log (`x=${x} y=${y}`);
    }
}
