Function.prototype.myCall = (obj , ...argss) => {
    // Objerct ka ocntext set kiya agar   globally call kiya hai to global this
     obj = obj ||  globalThis;

     // unique identiifer create kiya
     const fn = new Symbol();


    // obje kla property set kiya  - this mtlbn function jis pr call  hua hai
     obj[fn] = this;

     let result = object[fn](...argss);
     delete obj[fn];

     return result;


    



}


// Apply polyfill

Function.prototype.myApply = (obj , args) => {
    // Objerct ka ocntext set kiya agar   globally call kiya hai to global this
     obj = obj ||  globalThis;

     // unique identiifer create kiya
     const fn = new Symbol();


    // obje kla property set kiya  - this mtlbn function jis pr call  hua hai
     obj[fn] = this;

     let result = object[fn](...(args || []));
     delete obj[fn];

     return result;


}

Function.prototype.myApply = (obj , args) => {
    // Objerct ka ocntext set kiya agar   globally call kiya hai to global this
     obj = obj ||  globalThis;

     // unique identiifer create kiya
     const fn = new Symbol();


    // obje kla property set kiya  - this mtlbn function jis pr call  hua hai
     obj[fn] = this;

     let result = object[fn](...(args || []));
     delete obj[fn];

     return result;


}


Function.prototype.myBind = (obj , args) => {

    // store the calling function bcz inner function this will be changed
    let callingFunction = this;

    // this function will be callle with more arguments later
    return function(innerArgs){

       return callingFunction.apply(obj ,[...args , ...innerArgs]);

    }


}

const obj = {
    name : "Ujjwal"
}


function printName(){
    console.log("Hello " + this.name);
}


printName.call(obj , "Ujjwal");