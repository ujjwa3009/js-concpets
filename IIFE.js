// Stabds for immediately invoked functions .. Which is invked just after declaration . 

(function() {
    console.log("Hell");
}());


/**
 * It is useful in
 * Scope isolation
 * Private Variable
 * Module Pattern
 * 
 * // Named IIFE
(function myIIFE() {
    console.log("Named for debugging");
})();

// Arrow Function IIFE  
(() => {
    console.log("ES6 style");
})();

// IIFE with Parameters
(function(global, $) {
    // Use global and $ safely
})(window, jQuery);

// Return Value IIFE
const result = (function() {
    return "Computed value";
})();

 * 
 * Also jquery uses IIFE to not pollut global space with $
 */