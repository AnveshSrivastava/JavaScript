function sayHello(){
    alert("Hello World!!")
}
document.write("<h1>This is my first JS Page</h1>")

var pi=3.14
var person="Hello bro";
var ans='less go!!'
document.write(pi + "<br>");
document.write(person + "<br>");
document.write(ans + "<br>");

function myfunc(){
    var car="Audi"
    document.getElementById("demo").innerHTML=car;
}


// introduction.js

// Function to display the user's introduction
function displayIntroduction() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const city = document.getElementById("cityInput").value;
    const hobby = document.getElementById("hobbyInput").value;
  
    // Generate the introduction
    const introduction = `Hello! My name is ${name}. I am ${age} years old, and I live in ${city}. My favorite hobby is ${hobby}.`;
  
    // Display the introduction on the page
    document.getElementById("outputIntroduction").innerText = introduction;
  }
  