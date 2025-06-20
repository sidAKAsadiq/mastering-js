let name = "Sadiq    "

console.log(name.trim().length);

//Injecting in Objects, now all objects will have this function
// Object.prototype.truelength = function(){
//     return this.trim().length
// }



//Injecting in Strings, now all objects will have this function
String.prototype.truelength = function(){
    return this.trim().length
}

console.log("TL : ", name.truelength());
