// const my_promise = new Promise((resolve,reject) => {
//     //async task like db calls
//     setTimeout(()=>{
//         console.log("Hello world");
//         resolve(); //this connects it to .then when consuming the promise
//     },1000)
// });

// my_promise.then(()=>{
//     console.log("Promise resolved");
// })
;


// const send_recv_data_promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("send_recv_data_promise");
//         const response = {
//             name  : "sadiq",
//             age : 21,
//         }
//         resolve(response)
//     },1000)
// });

// send_recv_data_promise.then(function(response){
//     console.log("Response from promise : " , response);
// })
;



const chainingAndCatchAndFinally  = new Promise((resolve,reject) => {
    let error = false //true
    if(!error){
        console.log("There is no error");
        let response = {code : 200 , status : "OK"}
        resolve(response)        
    }
    else{
        console.log("Error found");
        let error = {code : 400 , status : "Not found"}
        reject(error)
    }
});


// chainingAndCatchAndFinally.then((response)=>{
//     console.log("1st then , response : " , response);
//     return response.code
// }).then((code)=>{
//     console.log("2nd then, response code : ", code);
    
// }).catch((error) => {
//     console.log("Error in catch : ",  error);
// }).finally(()=>{
//     console.log("Promise completed, regardless of succession or failure");    
// })


const async_await_promise = new Promise((resolve,reject) => {
    let error = true //true
    if(!error){
        //console.log("There is no error");
        let response = {game : "CS" , level : "GN"}
        resolve(response)        
    }
    else{
        console.log("Error found");
        let error = {msg : "No game noob"}
        reject(error)
    }
})


async function call_promise(){
    try {
        const response = await async_await_promise
        console.log("Success : ",response);
    } catch (error) {
        console.log("Error : " , error);
    }
}

call_promise()


async function fetch_users(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log("response : ", response);
    } catch (error) {
        console.log("Error fetching the users");
    }
}

fetch_users()


//without async await syntax

// fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
//     console.log("Fetched : " , response);
// })
// .catch((e)=>{
//     console.log("Error fetching");
// })
// .finally(()=>{
//     console.log("fetch call ended");
// })


