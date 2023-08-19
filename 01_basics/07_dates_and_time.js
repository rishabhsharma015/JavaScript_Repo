// Date declaration

const myDate = new Date();
// console.log(myDate);
// console.log("toString()--> "+myDate.toString());
// console.log("toDateString()--> "+myDate.toDateString());
// console.log("toISOString()--> "+myDate.toISOString());
// console.log("toJSON()--> "+myDate.toJSON());
// console.log("toLocaleDateString()--> "+myDate.toLocaleDateString());
// console.log("toLocaleString()--> "+myDate.toLocaleString());


// let myCreatedDate = new Date(2023, 0, 9);
// let myCreatedDate = new Date("01/09/2023");

let myCreatedDate = new Date("2023/01/09");

// ---------- Very Important method.--------------------------
console.log(myCreatedDate.toLocaleDateString('default', {
    day: "numeric",
    weekday: "long",
    year: "numeric"
}))
