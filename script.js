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


// var person={
//    firstname:"john",
//    lastname:"doe",
//    id:5522,
//    getinfo:function(){
//     return this.firstname + " " + this.lastname;
//    }
// };
// document.getElementById("demo").innerHTML=person.getinfo();/

// var person ={
//    name: "Ramesh",
//    age: 30,
//    isMarried: true,
//    adress:{
//       street:"vijay nagar",
//       flat:201
//    }
// }
// var ob= new Object();
// ob.name="annvesh"
// ob.hob={}
// ob.hob.sport="cricket"
// ob.hob.drawing=true
// ob.hob.exp=12

// console.log(ob.name)
// console.log(person.adress)
// document.write(ob.name)

// function myfunc(){
//    var car="Buggati"
//    document.getElementById("demo").innerHTML= typeof(car) + " " +car;
// }
// document.getElementById("demo").innerHTML=typeof(car) + " " +car;
// function world(){
//    var a="a is local to outer \n"
//    function below(){
//       var b="\n b is local to inner"
//       document.write(b)
//    }document.write(a)
//    below()
// }
// world();



// var myvar=10
// function check(){
//     console.log("Start function A")
//     function check2(){
//         console.log("In fuction B")
//     }check2();
// }check();
// console.log("Global context")


// var name="john"
// function first(){
//     var a="hello "
//     second();
//     console.log(a + name);
// }
// function second(){
//     var b="hi "
//     third();
//     console.log(b + name);
// }
// function third(){
//     var c="hola "
//     console.log(c + name);
// }first()


// var a=5
// function add(){
//     var b=10
//     console.log(a+b)
//     function mul(){
//         var c=48
//         console.log(b*c);
//     }mul()
// }add()
// var grade="D"
// switch(grade){
//     case "A":
//         console.log("Good job")
//         break;
//     case "B":
//             console.log("OK job")
//             break;
//     case "C":
//         console.log("bad job")
//         break;
//     case "D":
//         console.log("very bad job")
//         break;
//     default:
//         console.log("Wrong input")
// }
// function myfunc(){
//     alert("Hello")
// }

// function myfunc(name, age){
//     document.write(name + " is " + age + " years old")
// }
//add(10,20)

// function add(a,b){
//     console.log(a+b)
//     document.write(a+b)
//     console.log(a-b)
//     document.write(a-b)
//     console.log(a*b)
//     document.write(a*b)
//     console.log(a/b)
//     document.write(a/b)
// }

// var add=(a,b)=>{
//     console.log(a+b)
// };
// a=15
// b=56
// add(a,b)

// function myfunc(){
// var a=3+3;
// var b='3'+3;
// var c="hello"+3
// var demop=document.getElementById("demo")
// demop.innerHTML=a+" "+b+" "+c;}

var mycollection=[
    1,
    "Hello World",
    true,
    {name:"rahul",age:30},
    function yello(){
        console.log("hellnah");
    },
    ["Anya","Forger","Loid","Forger"]
];
console.log(mycollection);
