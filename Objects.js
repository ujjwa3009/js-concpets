/**
 * Cretaion methods
1. Object Literals.
2. Constructor Functions.
3. ECMAScript 6 Classes.
4. Object.create Method.
 */


// Object create  and literal
const Person = {
    init(name , age){
        this.name = name;
        this.age = age;
        return this;
    },
    greet  () {
        console.log(this.name);
    }
}

const UjjwalObject = Object.create(Person).init("Ujjwal", 30);


//; Using Construction fuynctions

function Person1(name , age){
    this.name = name;
    this.aage = age;
    

}

Person1.prototype.greet = () => {
    console.log("hello" + this.name);
}

const Ujjwal2Object = new Person1("Ujjwal", 30);
console.log(Ujjwal2Object)


// ES6 class
class PersonClass{
    constructor(name , age){
        this.name = name ;
        this.age = age;

    }

     greet() {
        console.log(this.name);
        
    }
}

const Ujjwal3Object = new PersonClass("Ujjwal3 ", 30);
console.log(Ujjwal3Object);