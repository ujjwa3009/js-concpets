

// Tranforms functiuon to take one input at a time and return other function with remaining arguments
/**
 * Currying connects to several advanced concepts:

Partial Application: Currying enables it naturally

Function Composition: Curried functions compose beautifully

Point-Free Programming: Eliminates intermediate variables

Functional Programming: Core technique in FP paradigms

Higher-Order Functions: Currying is a HOF that returns HOFs"
 */
function curry(fn){
    return function curried(...args){
        // checking if we have enought argument to execute 
        if(fn.length <= args.length){
           return fn.apply(this, args)

        }
         // if not enough argument please wait for next argument 
        return function(...nextargs){
            return curried.apply(this, args.concat(nextargs))
        }
    }
}




function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

/**
 * DRY RUN
 * // curry(add) is called
// fn = add (which has fn.length = 3)
// Returns: function curried(...args) { ... }

 * curriedAdd(1)
// Inside curried function:
// args = [1]
// fn.length = 3, args.length = 1
// Condition: 3 <= 1? → FALSE

// Returns: function(...nextargs) {
//     return curried.apply(this, [1].concat(nextargs))
// }
 ....
 */