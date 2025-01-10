const url = "https://cat-fact.herokuapp.com/facts";
const paracall = document.querySelector(".para");
const button = document.querySelector("#btn");
// let promise = fetch(url);
// console.log(promise);


//in arrow function async-await will be used in this way

const getdata = async() => {
    console.log("getting data......");
    let response = await fetch(url);
console.log(response); //return 1st promise json format
let data=await response.json();  //return 2nd promise
console.log(data);
// console.log(data[1].text);
paracall.innerText=data[1].text;
}

button.addEventListener ("click", getdata);



