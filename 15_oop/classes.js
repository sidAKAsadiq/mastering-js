class User{
    constructor(name){
        this.name = name
    }

    print_info(){
        console.log("Name : " , this.name);
    }
}

const sadiq = new User("Sadiq")
sadiq.print_info()

const ali = new User("ali")
ali.print_info()


//BTS
// function User(name){ 
//     this.name = name
//     this.print_info = function(){
//         console.log("Name : ", this.name);
//     }
// }

// //another way of adding
// User.prototype.print_info2 = function(name){
//     console.log("Name2: " , name);
// }

// const sadiq = new User("sadiq")
// const ali = new User("ali")
// sadiq.print_info()
// ali.print_info()

// sadiq.print_info2("Sid")
// ali.print_info2("Ale")
