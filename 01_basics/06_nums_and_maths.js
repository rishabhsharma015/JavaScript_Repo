// Number declartion
const num1 = 100;
const num2 = new Number(100);
const num3 = 123.7893;
const num4 = 10000000;

// console.log(typeof num1);
// console.log(typeof num2);


// -------------------Number methods---------------------
// console.log(num2.valueOf());
// ------- imp methods -------
// console.log(num1.toFixed(2));
// console.log(num3.toPrecision(3));
// console.log(num3.toExponential(3));
// console.log(num4.toLocaleString('en-IN'));


// +++++++++++++++++++ Maths ++++++++++++++++++++++++++
// console.log(Math.abs(-5));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.sqrt(25));
// console.log(Math.cbrt(64));
// console.log(Math.min(2,6,1,7,9));
// console.log(Math.max(2,6,1,7,9));

// console.log(Math.random()); //value bw 0 and 1.
// console.log(Math.ceil(Math.random()*6)); // values bw 1 and 6 (inc)


// console.log(Math.floor(Math.random() * (max-min+1)) + min);
const min = 0;
const max = 6;
console.log(Math.floor((Math.random()*(max-min+1))) + 1);


