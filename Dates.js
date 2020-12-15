let x = new Date();
console.log(x);


// Date.now();
// console.log(x);


console.log(x.getMonth());
console.log (x.getFullYear());
x.getDay();
x.getHours();
x.getMinutes();
x.getSeconds();
x.getMilliseconds();

//Code digital clock

const now = Date.now();
console.log(now);

const now3 = new Date();


let getTimeDigitally = () => {
    const now1 = new Date();
    let hour = now1.getHours();
    let minute = now1.getMinutes();
    let seconds = now1.getSeconds();
    return currentTime = `${hour} : ${minute} : ${seconds}`;
    
}
console.log(getTimeDigitally());



function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
  hourNormalized = h > 12 ? h - 12: h;

  return  `${hourNormalized} : ${m} : ${s} : ${session}`;
    
};
console.log(showTime());

// setInterval (() => {
//      console.clear();
//     console.log(showTime());

// }, 1);



// Find age of the person like: X years Y months and Z days

function findAge (year,month,date){
    const d = new Date();
    let y = d.getFullYear();
    let mon = d.getMonth();
    let days = d.getDate();
    let newyear = y-year;
    let newmon = mon-month;
    let newdate = days-date;
    return `${newyear} years ${newmon} month ${newdate} days`;
};

let age = findAge(1945,8,28);
console.log (age);




let calculateAge = (dob) => {
    let dobDate = new Date(dob);
    let now = new Date();

    let ageInMs = now - dobDate;
    let ageInDays = ageInMs / (1000 * 60 * 60 *24)
   
    let ageInYears = Math.floor(ageInDays /365);
    let remainingdays = ageInDays % 365;

    let ageInMonths = Math.floor (remainingdays /30);
     remainingdays = Math.round(remainingdays % 30);

    return `${ageInYears} years, ${ageInMonths} months, ${remainingdays} days`;

};

console.log(calculateAge("1990-2-5"));
