console.log("converter");
const base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// let promise = fetch(URL);
// console.log(promise);

const dropdown = document.querySelector(".drop-down select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// for(code in countryList){
//     console.log(code);
// }



for(let select of dropdown){
    for(let curcode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=curcode;
        newOption.value=curcode;
        if(select.name === "from" && curcode === "USD") {
            newOption.selected = "selected";
        }else if (select.name === "to" && curcode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (e)=>{
        updateFlag(e.target);
    });
};

const updateExchangeRate =  async()=>{
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    console.log(amtval);
    if(amtval === "" || amtval<1){
        amtval = 1;
        amount.value = "1";
    }
    // console.log(fromCurr.value,toCurr.value);
const url = `${base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response =await fetch (url);
let data = await response.json();
let rate = data[toCurr.value.toLowerCase()];
console.log(rate);

let finalAmt = amtval * rate;
msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmt} ${toCurr.value}80INR`
};


const updateFlag = (element) => {
    console.log(element);
    let curcode = element.value;
    let countryCode = countryList[curcode]; //IN,EU
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    element.parentElement.querySelector("img");
    img.src = newsrc;
};
    button.addEventListener ("click",(e)=>{
        e.preventDefault();
        updateExchangeRate();
});


window.addEventListener("load", () => {
    updateExchangeRate();
});