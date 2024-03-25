//immediately invoked function expressions (IIFE)

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// (function aurcode() {
//     console.log(`DB CONNECTED TWO`);
// })() aesa karne pr error aayega cause humare function chai ko maalum hee nhi h k end kha karna h toh we have to use ";" this to tell the function that here u end

(function chai() {
    //named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
    //unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');
