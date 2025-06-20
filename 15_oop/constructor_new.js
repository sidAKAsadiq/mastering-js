function User(name,age){
    this.name = name
    this.age = age
    this.welcome = function(){
        console.log(`Welcome ${this.name} , ${this.age}`);
    }
    console.log("This:" , this);
    
}

const sadiq = new User("Sadiq" , 21)
const ali = new User("Ali" , 21)

console.log(sadiq.constructor);
console.log(sadiq);
console.log(User.prototype);

console.log(ali);

