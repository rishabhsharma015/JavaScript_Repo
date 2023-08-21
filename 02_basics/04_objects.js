// how to merge two objects
const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'c', 4:'d'};

const obj3 = {obj1, obj2};
console.log(obj3);

// ----------- method to merge two or more objects --------------
const obj4 = Object.assign({}, obj1, obj2);  // Syntax is Object.assign(target, source), here {} = target and obj1, obj2 = source.
console.log(obj4);

// ----------- Merging two or more objects using pread operator. -------------
const obj5 = {...obj1, ...obj2};
console.log(obj5);


// ----------- Important and highly used object methods. ----------------
const newObj = {
    myName: "Rishabh Sharma",
    myAge: 21,
    myEmail: "rishabh@google.com",
    isLoggedIn: false
}

// 1. Object.keys(object_ref), It returns an array of all keys.
console.log(Object.keys(newObj));

// 2. Object.values(object_ref), It returns an array of all values.
console.log(Object.values(newObj));

// 3. Object.entries(object_ref), It returns the array containing sub-array of key-value as elements
console.log(Object.entries(newObj));

// ------------------------------------------------------------------------------------------------------------------

// how to check, whether a property exist in an object or not.
console.log(newObj.hasOwnProperty("isLoggedIn"));   // hasOwnProperty(property_name); returns true or false.

// --------------------------------------------- Object Destructuring ------------------------------------------------

const course = {
    courseName: "JavaScript",
    coursePrice: "1000",
    courseInstructor: "Rishabh"
}

// We can access the object's key using '.' or '[]', but what if we have to use a key so many times. In that case object de-structuring
// comes into picture.

const {courseInstructor: instructor} = course;

// The above line says that we have assigned the object to curly-braces => {} = course
// and we have passed those object's key that we want to use. => {courseInstructor} ,
// also we have renamed this to "instructor".

console.log(instructor); // As of now we have de-structured the object and we are using courseInstructor property (as instructor)