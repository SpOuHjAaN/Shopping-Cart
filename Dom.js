// console.log("Welcome to DOM");
// window.console.log("hello");
// let text=document.getElementById("paragraph");
// console.dir(text);
// let heading = document.getElementsByClassName("heading");
// console.dir(heading);
// let tag = document.getElementsByTagName("p");
// console.dir(tag);
// let elements = document.querySelector("p");
// console.dir(elements);
// console.log(elements); 
// let element = document.querySelectorAll("#p");
// console.log(element);

// //properties
// let prop = document.querySelector("div").children;
// console.dir(prop);

//practice-1
// let heading = document.querySelector("h2");
// console.dir(heading);
// console.dir(heading.innerText);
// heading.innerText=heading.innerText  +  " From apna college";

//practice-2
// let divs = document.querySelectorAll(".box") ;
//using loops
// let idx = 0;
// for(let div of divs){
//     div.innerText = `my unique number ${idx}`;
//     idx++;
// }
//traditional way
// console.log(divs);
// divs[0].innerText = "new inner value 1";
// divs[1].innerText = "another value 2";
// divs[2].innerText = "again value 3";

//access attribute
// let div = document.querySelector("div");
// console.log(div);
// let value = div.getAttribute("id");
// console.log(value);
// let pic = document.querySelector("img");
// console.log(pic);
// let image = pic.getAttribute("class");
// console.log(image);
// let x = pic.setAttribute("class","123");
// console.log(x);

//access styles
// let div = document.querySelector("div");
// console.log(div);
// div.style.backgroundColor="pink";
// div.innerText="Hello pooja!";
// div.style.visibility="hidden";

//create and delete elements
// let newBtn = document.createElement("Button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn); //end of div and inside
// div.prepend(newBtn); //start of div and inside
// div.before(newBtn);   //before the div and outside
// div.after(newBtn);      //after the div and outside

// let heading = document.createElement("h1");
// heading.innerText="my profile";
// console.log(heading);
// div.before(heading);
// let pic = document.querySelector("img");
// pic.remove();

//practice-1
let newBtn = document.createElement("Button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor="red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);

//practice-2
let para = document.querySelector("p");
let value=para.getAttribute("class");
console.log(value);
// para.setAttribute("class","newclass");
para.classList.add("newclass");
para.classList;
para.classList.remove("newclass");


