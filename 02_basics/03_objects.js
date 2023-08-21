// Singleton
const obj = new Object(); // {}


// object literals (Non-singleton)
const mySym = Symbol("I am a Symbol");

const jsUser = {
    name: "Rishabh",
    [mySym]: "symbol 1",          // To use a symbol in a object wrap it within square braces
    age: 21,
    email: "rishabh@google.com",
    isLoggedIn: false
}

// how to access key value from an object.
// 1st way is to access using '.' (not recommended)
// console.log(jsUser.email);
// 2nd way is to access using '["value"]' square brackets and passing key as string. (recommended)
// console.log(jsUser["age"]);

// how to use a Symbol as a key in an object.
// console.log(jsUser[mySym]); // here it is not a symbol.

// how to override object's key's value
// jsUser["age"] = 20;
// console.log(jsUser);

// how to lock/freeze object from overriding?.
// Object.freeze(jsUser);
// jsUser["age"] = 25;    // This won't give any error, but it will not work now because the object is freezed.
// console.log(jsUser);

// how to assign function as value to an object's key.
// jsUser.greetings = function(){
//     console.log("Hello World");
// }

// console.log(jsUser.greetings);   // Anonymous function.
// console.log(jsUser.greetings()); // Function called.

// how to use object's property within another's property.
// jsUser.greetingTwo = function(){
//     console.log(`Hello JS User, ${this.name}`)        // since we are using the object's key, so we will use 'this' keyword to refer the object.
// }

// console.log(jsUser.greetingTwo());