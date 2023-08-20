const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];


// Array concat() and push() method.
// marvel_heroes.push(dc_heroes); // It pushes the data in existing array.
// console.log(marvel_heroes.concat(dc_heroes));  // It returns a new array without modifiying a new array.
// console.log(marvel_heroes);


// Array Spread operator.
// const allNewHeroes = [...marvel_heroes, ...dc_heroes];   // '...' is called as spread operator.It spread the array into individual elements.
// console.log(allNewHeroes);


// Array flat() method.
// const array1 = [1,2,3,4,[5,6,7,8], 9, [12,14,16, [45,56,67]], 18, 20];
// console.log(array1);
// const new_array = array1.flat(Infinity);
// console.log(new_array);


// Array from() method.
// const array2 = Array.from("Rishabh");
// console.log(array2);
// const array3 = Array.from({name: "Rishabh"}); // Important intresting case.
// console.log(array3);


// Array of() method.
const array4 = Array.of(100, 200, 300, 400, 500);
console.log(array4);