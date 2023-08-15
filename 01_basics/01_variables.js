const accountId = 1511;
let username = "Rishabh Sharma";


/*
    Prefer not to use 'var'
    because of issue in block scope and functional scope.
*/
var email = "rishabh@gmail.com";


// Not a good practice of declaring varaibles like this.
password = "123456";



// by default if value is not assigned to a variable then it will be undefined.
let accountState;



// display all varibales in tabular form.
console.table([accountId, username, email, password, accountState]);