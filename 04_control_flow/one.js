if(function(){}){
    console.log("Executed");
}
else{
    console.log("Not executed");
}

// falsy values -> 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values -> "0", "false", " ", [], {}, function(){}


// ------------- Important Operator. -------------------
// Nullish Coalescing Operator (??)

let val1 = 5 ?? 10;     // 5
let val2 = null ?? 10;  // 10
console.log(val1);
console.log(val2);


// Ternary Operator (condition ? true : false ;)

let price = 12
price>10? console.log("greater than 10") : console.log("less than 10");