const obj = {
    name : "Sadiq",
    age : 21,
    print_info : function(){
        console.log(`Info - Name : ${this.name} , Age : ${this.age}`);
        
    }
}

obj.print_info()
obj.name = "Ali"
obj.print_info()

console.log(this);

// function see_this(){
//        let name = "Ali"
//     console.log(this.name);   //donot have access to name
// }

// see_this()


//w/o name arrow func
// (() => {
//     let name = "Asad"
//     console.log(`Name : ${name}`);
// })()


const say_this = () => {
    let name = "Asad"
    console.log("Name : " , name);
    console.log(this);
}

say_this()


const implicit_ret = () => (5 + 5)

console.log(implicit_ret());


