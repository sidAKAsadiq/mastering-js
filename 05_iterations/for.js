//For loop
for(let i=0 ; i<10; i++){
   // console.log("My name is Sadiq : " , i);
}

//console.log(i); - cant access i outside loop cuz uska scope loop tak hi hai - let is block scoped, though if I had used var i = 0, then this i would be accessible

//Nested loops


//break and continue
for(let i=0 ; i<10; i++){
    console.log("My name is Sadiq : " , i);
    if(i === 5){
        break;
    }
    else{
        continue;
    }
}


