function print_hello (){
    console.log("Hello world");
}

print_hello()


const store_func = function(){
    console.log("This is stored function");
}

store_func()

const return_func = function(){
    return 1+2
}

function return_func2(num1 , num2){
    let result = num1 + num2 
    return result;
}
 

console.log(return_func());
console.log(return_func2(5,2));

//Rest operator, when we dont know arguments

function idk_args(...values){
    console.log("Values passed : " , values);
}

idk_args(1,2,3,"sadiq" , true, false, 59.78)

//object handle

const obj  = {
    name :  "Sadiq",
    age : 21
}

const obj_handler = function(obj){
    console.log(`Name ${obj.name} , Age ${obj.age}`);
}

const obj_handler2 = function({name,age}){
    console.log(`Name ${name} , Age ${age}`);
}

obj_handler(obj)
obj_handler2(obj)
obj_handler({ 
    name :  "Sadiq",
    age : 21
})






 