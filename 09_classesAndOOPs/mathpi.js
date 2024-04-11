const descriptor = Object.getOwnPropertyDescriptor(Math, "E");

// console.log(descriptor);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function(){
    console.log("code fat gya");
  }

};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`);
    }
}