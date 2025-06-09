
const sym = Symbol("key")

const user = {
    name : "Sadiq",
    age  : 21,
    is_logged_in : true,
    [sym] : "value",
    "date of birth" : "10th dec 2003" //cant access this using dot operator
}

console.log(user.name);
console.log(user["age"]);
console.log(user[sym]);
console.log(user["date of birth"]);

//Object.freeze(user)
user["age"] = 50
console.log(user["age"]);

user.greet = function(){
    console.log(`Hello user : ${this["name"]}`);
}

user["greet"]()
console.log(user["greet"]);



