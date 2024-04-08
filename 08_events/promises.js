//create the promise
const promiseOne = new Promise(function (resolve, reject) {
  // do an async calls...
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
//consume the promise, to consume the promise an get then in the output u have to connect resolve to it, you have to call resolve in function promise
promiseOne.then(function () {
  console.log("promise consumed");
});

//shorter form

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("hogiya");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userNmae: "chai", email: "chai@patti.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ email: "kuc@hua.com", password: "123" });
    } else {
      reject("ERROR: Something Went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.email;
  })
  .then((email) => {
    console.log(email);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ email: "kuc@hua.com", password: "123" });
    } else {
      reject("ERROR: js Went Wrong");
    }
  }, 1000);
});

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); //response m humne vo data store kiya jo link se aya
//     // await the response cause it takes time to convert it into the json and then print
//     const data = await response.json(); // usko json m convert kiya taaki data nikaal sakae
//     console.log(data); // data ko print kiya
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers(); // function yaha call kiya

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data);
}).catch((error)=> {console.log(error);})