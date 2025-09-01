// Create a function that returns another function which remembers a name

/**
 * Closure :A closure is a function that has access to variables from its outer (enclosing) scope
 *  even after the outer function has finished executing. Essentially, 
 * the inner function 'remembers' the environment in which it was created
 *
    Used : 
        Maintain private variables
        State Variables
        Remember context even  if outer function context finished
    Benefits : 
        Data privacy
        Maintain global state
        Factory pattern
        Memory Efficiency -n Shared Spaces
        Context memorize
    Real World Application 
        Module Pattern - pvt data and public apis
        Factory functions
        Currying
        Debounce
        Memoization

 */
function rememberName(name){
    let initialName = name;

    return function(){
        return initialName;
    }
}


// Create a counter function that increments by 1 each time it's called

function createCounter(){
    let counter = 0;

    return function(){
        return counter++;
    }
}

// Create a function that has a private variable that can only be accessed through returned methods
function createSecretKeeper(secret) {
    // Your code here - create getSecret() and updateSecret(newSecret) methods
    let sceretkey = secret;

    return {
        getSecret : function(){
            return sceretkey;
         },

         updateSecret : function (newSecret){
            sceretkey = newSecret;
         }
    }
}


// Create a debounce function using closures
function debounce(func, delay){
    let timer ;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            
            func.apply(this, args);
        }, delay)
    }
}

function sayHello(name) {
    console.log(`👋 Hello ${name}!`);
}

const debouncedHello = debounce(sayHello, 5);
console.log(debouncedHello("Ujjwal"));
console.log(debouncedHello(""));

// Implement a curry function using closures
function add(a) {
    // Your code here
    // Should return a curried version that can be called with partial arguments

    return function(b){
        return function(c){
            return a+b +c;
        }

    }


}

console.log(add(1)(2)(3));

[1,2,3].map((index) =>  index)

// Custom Map Implementaation 
Array.prototype.myMap = (callback) => {

    let arr = [];

    for(let i = 0 ; i < this.length ; i++){
        arr.push( callback(this[i],i ,  this));
    }
    return arr;





}


Array.prototype.myFilter = (callback) => {
    let arr = [];

    for(let i = 0 ; i < this.length ; i++){
        if(callback(this[i], i , this))
            arr.push( this[i]);
    }
    return arr;



}

Array.prototype.myReduce = (callback , init)  => {
    let accumulator =  init === undefined ? this[0] : init;
    let startIdx =   init === undefined ? 1: 0; 

    for(let  i = startIdx  ; i< this.length ; i++){
        accumulator = callback(accumulator , this[i] , i , this);
    }
    return accumulator;
}


 


// const keeper = createSecretKeeper("my secret");
// console.log(keeper.getSecret()); // "my secret"
// keeper.updateSecret("new secret");
// console.log(keeper.getSecret()); // "new secret"
// console.log(keeper.sceretkey);// keeper.secret should be undefined



// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// const greetJohn = rememberName("John")
// console.log(greetJohn())