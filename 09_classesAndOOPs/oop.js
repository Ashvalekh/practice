//Object literal
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    // console.log("Got user Details");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  }
};
// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
  // this.username karke bologe toh this vala part as a variable le liya jaayega else dono k naam change karo ya toh phir confusion rahegi
  this.username = username,
  this.loginCount = loginCount,
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }

  return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("chaiorcode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);