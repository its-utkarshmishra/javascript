//  Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // Named IIFE
    console.log("DB Connected");
})();


((name) => {
    // Simple IIFE
    console.log(`DB Connected Two ${name}`);
})('Utkarsh')

// IIFE is used to remove the global scope pollution.