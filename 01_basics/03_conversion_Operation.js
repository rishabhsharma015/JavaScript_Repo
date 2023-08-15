let score = undefined;
//console.log(typeof score);  

let valueInNumber = Number(score);
//console.log(typeof valueInNumber); 
//console.log(valueInNumber)


/*  NOTES
    "33" => 33
    "33abc" => NaN (Not a number)
    true => 1 ; false => 0
    null => 0 ; undefined => NaN
*/


///////////////////////////////////////////////////


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

/* NOTES
    1 => true; 0 => false;
    "abcd" => true (non-empty string); "" => false (empty string)
*/

//////////////////////////////////////////////////



let num = 15;

let str_num = String(num);
// console.log(str_num);
// console.log(typeof str_num);



/////////////////////////////////////////////////


// conversions: +true => 1, +"" => 0
console.log(+true);
console.log(+"");