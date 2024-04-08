//create the promise
const promiseOne = new Promise(function (resolve, reject) {
  // do an async calls...
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
  }, 1000);
});
//consume the promise
promiseOne.then(function(){
    console.log("promise consumed");
})