// function sayHello(){
//     alert("Hello World!!")
// }
// document.write("<h1>This is my first JS Page</h1>")

// var pi=3.14
// var person="Hello bro";
// var ans='less go!!'
// document.write(pi + "<br>");
// document.write(person + "<br>");
// document.write(ans + "<br>");

// function myfunc(){
//     var car="Audi"
//     document.getElementById("demo").innerHTML=car;
// }


// var num=10
// console.log(num);
// num=false
// console.log(num);
// num="hello"
// console.log(num);
// num=null
// console.log(typeof(num));
// num=undefined
// console.log(typeof(num));

// let animal=new Array("car","dawg","chupa")
// console.log(animal)

// let num={
//     name:"Harry",
//     age:10,
//     stat:"Wizard"
// }
// console.log(num)
// console.log(typeof(num))
// console.log(num.name)
// console.log(num.age)
// console.log(num.stat)


var person={
   firstname:"john",
   lastname:"doe",
   id:5522,
   getinfo:function(){
    return this.firstname + " " + this.lastname;
   }
};
document.getElementById("demo").innerHTML=person.getinfo();