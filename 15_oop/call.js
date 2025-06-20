function setname(name){
    this.name = name
}

function create(name,age){
    setname.call(this,name)
    this.age = age
}

const sadiq = new create("Sadiq" , 21)
console.log(sadiq);
