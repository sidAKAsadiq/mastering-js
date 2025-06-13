
let arr = [1,2,3,4,5]
arr = "Sadiq"

for (const val of arr){
    console.log(val);
}

let map = new Map()
map.set('a' , 'apple')
map.set('b' , 'ball')
map.set('c' , 'cat')

for (const [key,val] of map) {
    console.log(`Key : ${key} , Val : ${val}`);   
}