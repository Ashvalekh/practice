function SetUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  //".call se vo call hua h oosli reference milli h but call hone pr vo or ooska EC hatt gya stack se ab hold kaise karrein oose reference hold karke rakhne k liye ".call"
  SetUsername.call(this, username)
  // value ko kuch aese hold karna hoga ki aap function m jo declare h vo this lelo, or yaha kuch aese (this, username) batado, toh vo agar stck se bahar bhi gya toh values chod jaayega aap k liye

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");

console.log(chai);
