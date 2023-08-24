// filter() method on arrays.

const arr = [1,2,3,4,5,6,7,8,9,10]

const newarr = arr.filter( (e)=> (e>5) )

// console.log(arr)
// console.log(newarr)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// filter books with 'History' genre.

// const historyBooks = books.filter( (book)=> (book.genre==='History') );
// console.log(historyBooks);


// filter those books which are published after 2000.

// const books_after_2000 = books.filter( (book)=> (book.publish >= 2000) );
// console.log(books_after_2000);


// Using map() 
const numarr = [1,2,3,4,5,6,7,8,9,10];

const modifiedNumArr = numarr.map( (val) => {return val + 10} )

// console.log(modifiedNumArr);



// Using forEach loop
const modifiedArr = []

numarr.forEach( (val) => {
    modifiedArr.push(val+10);
})

// console.log(modifiedArr);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// print the total price of all the courses.

const total = shoppingCart.reduce( (acc, course) => {return acc+course.price}, 0)
console.log(total);