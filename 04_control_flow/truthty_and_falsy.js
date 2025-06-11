//Falsy values - assumed to be false by default
/* 
False, 0 , -0, 0n, null, NaN, undefined, ""
*/


//Truthy values - assumed to be true by default - all remaining values after ignoring Falsy values
/* 
tricky examples : 
"0" , "false" ,[] , {} , function(){}, " " etc
*/


//Null coalescing operation - ??

let PORT = 5 ?? 10
PORT = undefined ?? 15
PORT = null ?? 23

console.log("PORT :" , PORT);

//for || like port = 5000 || null  - it gives default value for any falsy value, while ?? gives defaults for null and undefined only