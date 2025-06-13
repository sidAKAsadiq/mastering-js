//Reduce
let arr = [1,2,3]

arr = arr.reduce((accumulator , num)=>{
    return accumulator + num;
}, 0)

console.log("Arr : " ,  arr);
