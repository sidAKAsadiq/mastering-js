function hello(num) {
    this.num = num
    //console.log("this : ", this);
    return "SSSS"
}





hello.prototype.print = function(){
    console.log("Nums : " , this.num);
}
hello.prototype.name = "Sid"

console.log(hello.prototype);


const sadiq = new hello(2)
const ali = new hello(23)

sadiq.print()
console.log(sadiq.name);

console.log(sadiq.num);
console.log(ali.num);

console.log(typeof sadiq);



