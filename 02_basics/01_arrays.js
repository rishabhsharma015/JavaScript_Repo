// Array declaration

let arr1 = [1, 2, 3, 4, 5];
let arr2 = new Array(1,2,3,4,5);

// console.log(arr1[2]);

// console.log(arr1.length);  // property

// ----------- Array methods -------------
// console.log(arr1.push(10));
// console.log(arr1.pop());
// console.log(arr1.unshift(20));
// console.log(arr1.shift());
// console.log(arr1);
// console.log(arr1.includes(23));
// console.log(arr1.indexOf(4));


console.log("Slice --> "+arr1.slice(2,4));   // It creates a copy of array.
console.log("Splice --> "+arr1.splice(1,4)); // splice method manipulate the orignal array.