let obj = {
    name: "Sadiq", 
    age: 21
};

for (const key in obj) {
    console.log(`Key : ${key} , Val : ${obj[key]}`);
    
}


let arr = [1,2,3,4,5]
arr= "Sadiq"
for(const val in arr){
console.log(`Index : ${val} , Val : ${arr[val]}`);
}


let map = new Map()
map.set('a' , 'apple')
map.set('b' , 'ball')
map.set('c' , 'cat')

for (const key in map) {
    console.log(key);
    //console.log(`Key : ${key} , Val : ${val}`);   
}