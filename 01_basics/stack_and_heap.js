//Stack  - for primitive datatypes - call by value
//Heap - for non primitive(reference) datatypes - call by reference (obj,funcs and array)

name = "sadiq"
new_name = name

console.log(name);
console.log(new_name);

new_name = "ali"        //Changing the value is new_name does not effect the actual name cause both of them point to different memory addresses - stack - primitive dt
        

console.log(name);
console.log(new_name);


obj1 = {
    age : 23
}

cpy_obj = obj1

console.log(obj1);
console.log(cpy_obj);

cpy_obj.age = 50   //But here changing value of age in copied object changes the value of age in original object as both of them point towards same memory addresses - heap - non-primitive dt

console.log(cpy_obj);
console.log(obj1);
