const User = {
    name : "username"
}

const teacher = {
    __proto__ : User,
    teaches : "subject"
}


//const sadiq = teacher -- this results in both sadiq and ali pointing to same location
const sadiq = Object.create(teacher)
sadiq.name = "Sadiq"
sadiq.teaches = "CS"

//const ali =  teacher -- this results in both sadiq and ali pointing to same location
const ali = Object.create(teacher)
ali.name = "ali"
ali.teaches = "AI"


console.log(ali.name);
console.log(ali.teaches);

console.log(sadiq.name);
console.log(sadiq.teaches);
