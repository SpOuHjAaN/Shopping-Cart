let ans = document.querySelector("#btn");
console.log(ans);
// ans.onclick = (e) => {
//     console.log(e);
//     console.log("i am clicked");
// }

//instead of using event function we prefer to use event listener . Bcz in event function if we add ant other other event then function is override and always give current function butn in event listener if u give more function then it workout over all the functions.
ans.addEventListener("click",(e)=>{
    console.log("1st time");
    console.log(e);
})

// ans.addEventListener("click",()=>{
//     console.log("2nd time");
// })

//for remove any listener

const handle2=()=>{
        console.log("2nd time");
    }
ans.addEventListener("click",handle2);
ans.removeEventListener("click",handle2);


// let box = document.querySelector("div");
// box.onmouseover = () => {
//   console.log("i am inside div");
// };


//practice
let btn1 = document.createElement("button");
let div = document.querySelector("div").after(btn1);
btn1.innerHTML="click";
btn1.style.color="white";
btn1.style.height="50px";
btn1.style.width="50px";
btn1.style.backgroundColor="green";
btn1.style.borderRadius="50%";
let curMode="light";
btn1.addEventListener("click",()=>{
    if(curMode === "light"){
        curMode = "dark";
        document.querySelector("body").classList.add("dark"); //we can do through css class
        document.querySelector("body").classList.remove("white"); //we can do through css class

        // style.backgroundColor="black";
    }else{
        curMode = "light";
        document.querySelector("body").classList.add("white"); //we can do through css class
        document.querySelector("body").classList.remove("dark"); //we can do through css class

        // style.backgroundColor="white";

    }
    console.log(curMode);
})

//practice-2
let hover = document.querySelector("#mouse");
// console.log(hover);
let currmode="cornflowerblue";
hover.addEventListener("mouseover",()=>{
    if (currmode === "cornflowerblue"){
        currmode="yellow";
        document.querySelector("div").style.backgroundColor="yellow";
        document.querySelector("div").innerHTML="i am Inside it.";

    }else{
        currmode="cornflowerblue";
        document.querySelector("div").style.backgroundColor="cornflowerblue";
        document.querySelector("div").innerHTML="i am Box";
        
    }
    console.log(currmode);
})