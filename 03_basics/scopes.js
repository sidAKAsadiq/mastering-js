//var , let and const scope
//var is function scoped, causes issues

{
    var a = 10
    let b = 20
}

//console.log(b); //let cant be accessed outside block
console.log(a); //var ka koi deen emaan nahi, can be accessed outside block as its function scoped


function one(){
    let out = "out"

    function two(){
        console.log(out);
        let inside = "in"
    }

    //console.log(inside); - it should not be accessed by outer function - block - CLOSURE

    two()
}

one();


call_before_init()
function call_before_init(){
    console.log("Calling b4 initialziation");
}
//call_before_init() - can call here also obviously


//expression() - cannot call this b4 initalization
const expression = function(){
    console.log("Cannot call b4 initialization");
}
expression()







