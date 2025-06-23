class User{
    constructor(name){
        this.name = name
    }

    print_info(){
        console.log("Username : ", this.name);
    }

    static senstive_func(){
        console.log("Senstive info, donot allow access to anyone");
        
    }
}

class Teacher extends User {
    constructor(name , subject){
        super(name)
        this.subject = subject
    }

    print_details(){
        this.print_info()
        console.log("Subject : ", this.subject);
    }
}

const sadiq = new Teacher("sadiq" , "CS")
const ali = new Teacher("ali" , "AI")

sadiq.print_details()
ali.print_details()

console.log(sadiq instanceof Teacher);
console.log(sadiq instanceof User);

//this gives error!
sadiq.senstive_func()