function abc(){
    let user = "rishabh";
    console.log(this);
}

const def = function(){
    let user = "rishabh";
    console.log(this);
}

const ghi = () => {
    let user = "rishabh";
    console.log(this);
}


abc();
def();
ghi();



// console.log(this);    // Here 'this' keyword refers to the Global Object in node environment.
// and in browser console, 'this' refers to the Window object.


const arrow = (num1, num2) => {    // Explicit return.
    return num1 + num2;
}

const arrow2 = (num1, num2) => ( num1 + num2 )   // Implicit return, here we don't use return keyword also we use () instead of {}

// console.log(arrow2(9, 15));


const arrow3 = () => ({username: "rishabh"})
// console.log(arrow3());