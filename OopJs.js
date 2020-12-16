let user1 ={name: "Elisha", age: 22, email: "eli.mhzn@gmail.com"};
let user2 ={name: "Elisha Maharjan", age: 24, email: 'elisha.maharjan@gmail.com'};
let user3 ={name: "Elicha", age: 27, email: 'elisha.maharjan44@gmail.com'};

//ES5

function User(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
}

let user14 = new User ( "Elisha",  22,  "eli.mhzn@gmail.com");
let user25 = new User( "Elisha Maharjan",  24,  'elisha.maharjan@gmail.com');
let user36 =new User ( "Elicha",  27,  'elisha.maharjan44@gmail.com');


console.log(user14);


//ES6
class User1{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    } 
    increaseAge(){
        this.age++;
    }
    static walk() {
        console.log("User do walk. Hey I am from static method.");
    }
    get name(){
        return this._name;
    }
    set name(newValue){
        this._name = newValue;
    }
}

let user4 = new User1 ( "Elisha",  22,  "eli.mhzn@gmail.com");
let user5 = new User1( "Elisha Maharjan",  24,  'elisha.maharjan@gmail.com');
let user6 =new User1( "Elicha",  27,  'elisha.maharjan44@gmail.com');

user4.increaseAge();
console.log(user4);

User1.walk();



class Employee extends User1 {
    constructor (name, age, email, designation){
            super (name, age, email);
            this._role = role;
    }
    get role(){
        return this._role;
    }
    set role(newValue){
        this._role = newValue;
}
}

var employee1 = new Employee ("Bikram", 35, "bikram@gmail.com", "Principal Engineer");

employee1.increaseAge();
console.log(employee1);




//Implement a calculator using ES6 classes.
