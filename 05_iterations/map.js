const nums = [1,2,3,4,5,6,7,8,9,10]

const res = nums.map((num) => {
    return num+1
})

console.log(res);


//chaining example
const res2 = nums.map((num) => {return num%2==0 ? num : num+1 }).filter((num)=>{return num==2})

console.log(res2);
