let arr = ["pak" , 'ind' , 'china' , 'iran']

// arr.forEach( (country,index,arr)=>{
//     console.log(country);
//     if(country === 'china'){
//         arr[index] = "HK"
//         console.log("found");
//     }
//     console.log(arr);
    
// }   )



//filter - loop over each item in arr and return values from array based on given condition

//modify_arr = arr.filter(  (country) => {return country[0] == 'i'}  )

//OR direct return
modify_arr = arr.filter(  (country) => (country[0] == 'i')  )
console.log(modify_arr);



//Book Example
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 }
];


const result = books.filter( (book) => {
    return book.genre === "History"
})

const result2 = books.filter((book)=>(book.publish > 2000))

//single line syntax
//const result = books.filter((book)=>(book.genre === "History"))

console.log("Filtered Books : " , result);
console.log("Filtered Books2 : " , result2);
