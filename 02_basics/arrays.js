const arr = [12,3,45,2]
const arr1 = new Array(12,3,45,2)
// console.log(arr);
// console.log(arr1);

arr.push(32)
//push, pop, unshift, shift 
console.log(arr);

console.log(arr.join());

//slice - does not manipulates org array + not includes end range vs splice - does manipulates + includes end range
console.log(arr.slice(1,3));
console.log(arr);

console.log(arr.splice(1,3));
console.log(arr);




