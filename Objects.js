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



// Checking instance relation ship

// --- instance of  -> chck that constructor protoyttpe is present in object prototype chain or not
// isProtoTypeOf -> check that one object is present in other object prtototype chain or not
// Object.getProtoTypeOf -> Represent Object prototype




/**
 *  ================== hasOwnProperty() vs in Operator ==========
 * hasOwnProperty() - it check tbhat own property or not , not check in protoype chain but in opertaor checks for 
 * protoype chain as well
 * 
 * 
 */







/** Object.defineProperty(obj, 'prop', {
  value: 'test',
  writable: false,    // Cannot change value
  enumerable: false,  // Won't appear in iterations
  configurable: false // Cannot delete or reconfigure
});
 */


/**
 * . When should you use Map vs Object?
 * 
 * Use Object when:

    You need a record/dictionary with string keys

    You benefit from prototype inheritance

    You need JSON serialization

Use Map when:

    Keys are not strings (objects, primitives)

    You need guaranteed insertion order

    Frequent additions/deletions

    You need the size property
 */


const parent = { inherited: true };
const obj = Object.create(parent);
obj.own = 'value';
Object.defineProperty(obj, 'hidden', { value: 'secret', enumerable: false });

// for...in - enumerable properties (own + inherited)
for (let key in obj) {
  console.log(key); // 'own', 'inherited'
}

// Object.keys - own enumerable properties
Object.keys(obj); // ['own']

// Object.entries - own enumerable key-value pairs
Object.entries(obj); // [['own', 'value']]


// Object.getOwnPropertyNames - all own properties
Object.getOwnPropertyNames(obj); // ['own', 'hidden']



/// =========== Object Cloning ================  ///////
// 1. Shallow cloning -> Object.assign  - enumerable perorty copy not descriptior , spread opertor.
// 2. Deep Cloning -> Structuredclone ,  Json.strngify - limited as  fubnction is not serilaizable



/// ======= Immutyability of objects ===========
/**
 * 1. Object.freeze - not even modify property
 * 2. Object.seal -> No addition and deletion 
 * 3. Object.preverntExtension -> no new property
 * 
 */