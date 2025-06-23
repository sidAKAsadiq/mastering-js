class User{

    #name //now we cant obj.#name directly

    constructor(name){
        this.#name = name
    }

    //can use static keyword to prevent this function from calling when writing userone.name
    get name(){
        return this.#name.toUpperCase()
        //or
        //return "nikal yahan say nahi bataounga"
    }

    set name(name){
        this.#name = name
    }
}

const userone = new User("sadiq")
console.log("User name is : " , userone.name);


//revising
// const obj = Object.create({usernae : "sadiq"})
// console.log(obj.usernae);
