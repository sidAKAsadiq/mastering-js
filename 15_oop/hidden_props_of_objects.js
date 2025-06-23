const hidden_prop = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(hidden_prop);

//Not possible due to exteme strict checks in JS implementation
// Object.defineProperty(Math , 'PI' , {
//     writable : true
// })

Math.PI = 5

console.log(Math.PI);


const user = {
    name : "Sadiq"
}
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
user.name = "Ali"
console.log(user);
Object.defineProperty(user,'name',{
    writable : false
})
user.name = "Asad"  //now this wont be overwritten as we have set writebale as false, remember these properties are ususally hidden so we have to check them explicitly where needed!
console.log(user);


