const obj = {
    name : "sadiq",
    uni_info : {
        name : "FAST",
        prog : "CS",
    }
}

// console.log(obj);
// console.log(obj.uni_info.name);

const obj2 = {
    sports : "Football"
}

// console.log(obj2);

const combined = {
    ...obj,
    ...obj2,
    is_logged_in : true,
}


//const combined = Object.assign({is_logged : true} , obj, obj2)

console.log(combined);

console.log(Object.keys(combined));
console.log(Object.values(combined));

const {name : naam, sports} = combined

//console.log(name);
console.log(naam);
console.log(sports);


//JSON
// {
//     "key1" : 123,
//     "key2" : "Hello",
// }
 
//ARRAY of objects
[
    {},
    {}, 
]