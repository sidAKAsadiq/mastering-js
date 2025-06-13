//ForEach
let arr = ["Sadiq" , "Mehdi" , "Zohair"]

// arr.forEach(function (value) {
//     console.log("Value : " , value);
// })

//with arrow func
// arr.forEach( (item) => {
//     console.log("Item : ", item);
// }   )

//with reference of function
// const print = function(val){
//     console.log("Val : " , val);
// }

// arr.forEach(print)



arr.forEach( (item , ind , arr) => {
    console.log("Item : ", item , "Index : ",ind , "Arr : ", arr);
}   )


//Array of obj
arr = [
    {
        name : "Sadiq",
        age : 21,
    },
    {
        name : "Ali",
        age : 22,
    },
    {
        name : "sid",
        age : 12,
    },
]

arr.forEach( (item) => {
    console.log(item);
    console.log(item.name , item.age);
}   )