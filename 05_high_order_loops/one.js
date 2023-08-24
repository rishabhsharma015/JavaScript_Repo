// for-of loop  (It prints all the array elements)

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  // console.log(i);
}

// for-in loop  (It prints all the array indices)

for (const idx in arr) {
  // console.log(idx);
}

// forEach loop  (It prints all the array elements) it takes a callback function as an argument.

arr.forEach((item, index, arr) => {
//   console.log(item, index, arr);
});

// for-of loop on Map.

const map = new Map(); // declaring Map.
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

for (const key of map) {
  // here key contains array containing key and its value. To de-structure that array
  // console.log(key);                // we can wrap it like this =>  [key, value]
}

for (const [key, value] of map) {
  // console.log(key+' :- '+value);
}

// for-in loop on Objects.

const obj = {
  username: "Rishabh",
  age: 21,
  email: "rishabh@google.com",
  isLoggedIn: true,
};

for (const key in obj) {
  // console.log(`Key is ${key.toUpperCase()} and Value is ${obj[key]}`)
}

// for-in loop on arrays

const arr2 = [3, 5, 7, 9, 11];

for (const key in arr2) {
  // console.log(`Element at index ${key} is ${arr2[key]}`);
}

// ----------------------------------------------------------------------------------------------------

const objArray = [
  {
    username: "Rishabh",
    age: 21,
    email: "rishabh@google.com",
    isLoggedIn: true,
  },
  {
    username: "Rishabh",
    age: 21,
    email: "rishabh@google.com",
    isLoggedIn: true,
  },
  {
    username: "Rishabh",
    age: 21,
    email: "rishabh@google.com",
    isLoggedIn: true,
  },
  {
    username: "Rishabh",
    age: 21,
    email: "rishabh@google.com",
    isLoggedIn: true,
  },
  {
    username: "Rishabh",
    age: 21,
    email: "rishabh@google.com",
    isLoggedIn: true,
  },
];


objArray.forEach( (obj)=> {
    console.log(obj["username"]);
})