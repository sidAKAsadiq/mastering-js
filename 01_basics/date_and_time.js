const d = new Date()
//console.table([d.toString() , d.toISOString() , d.toJSON() , d.toLocaleDateString(), d.toLocaleTimeString(), d.toLocaleString(), d.toDateString()]);

//different formats of date
const custom_date = new Date(2025,5,8)
const custom_date1 = new Date(2025,5,8,1,59,25)

// console.log(custom_date.toDateString());
// console.log(custom_date1.toLocaleString());

const ts = Date.now()
console.log(ts);
console.log(custom_date.getTime()/1000);

console.log(custom_date.getFullYear());
console.log(custom_date.getMonth());

//more customization
console.log(custom_date.toLocaleString('default' , {
    weekday : "short",
}));


