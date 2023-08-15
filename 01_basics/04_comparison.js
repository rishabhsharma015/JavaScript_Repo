// Comparison operators: > < >= <= == !=

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

/* 
    The reason for the above outputs is: Equality checks ( ==, != ) and Comparison operators ( >, <, <=, >= ) works 
    differently.
    Comparisons convert null to a number, treating it as 0
*/