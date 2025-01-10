console.log("hii");
let num1=2,num2=5;
const add=()=>{
    console.log(num1+num2);
}
add();

//arrow
const subst=()=>{
    console.log(num2-num1);
}
subst();
add();

//parameter
function mult(numb1,numb2){
    console.log(numb1*numb2);
}
mult(4,5);//argument
mult(10,20);

//return
function div(x,y){
    let s=x/y;
    console.log(x);
    return s;
    // console.log(y);//after return there is no other functions are executes
}
let ans=div(10,5);
console.log(ans);

//arrow
const pooja = (a,b)=>{
    return a*b;
}
let liza = pooja(3,5);
console.log(liza);

//practice-1
function vow1(str){
let VOWEL = ["a","e","i","o","u","A","E","O","I","U"];
let count=0;
for(let char of str){
   if(VOWEL.includes(char)){
    count++;
   }
}
console.log(count);
}
vow1("Call me poo");

//in arrow
const vow = (str) => {
let VOWEL = ["a","e","i","o","u","A","E","O","I","U"];
let count=0;
for(let char of str){
    if(VOWEL.includes(char)){
        count++;
    }
}
    return count;
}
vow("uhdubcuwdhiqwdj");

//foreach
let arr = [1,3,5,7,9];
arr.forEach(function myfun(val){
    console.log(val);
})
//in arrow
arr.forEach((val,ind)=>{
    console.log(val,ind);
})

//practice -2
let arr1 = [1,2,3,4];
arr1.forEach((square)=>{
    console.log(square**2);
})
//OR
let calsquare = (square) => {
    console.log(square**2);
}
arr1.forEach(calsquare);

//map()
let arr2 = ["Pune","Delhi","Mumbai","Karnataka"];
arr2.map((val)=>{
    console.log(val);
})

//filter()
let arr3=[1,2,3,4,5,6,7,8];
let res1=arr3.filter((val)=>{
  
    return val%2==0;   
})
console.log(res1);

//reduce()
let arr4 = [1,2,3,4];
let output=arr4.reduce((res,cur)=>{
    // return res+cur;
    return res>cur ? res : cur;
})
console.log(output);

//practice-3
let marks = [25,85,90,93,96,78,47];
let result = marks.filter((score)=>{
    return score>=90;
})
console.log(result);

//practice-4
let numbers = prompt("take an array :");
let arr5 = [];
for(let i=1;i<=numbers;i++){
    arr5[i-1] = i;
}
let sum = arr5.reduce((prev,cur)=>{
    // return prev+cur;
    return prev*cur;//factorial

})
console.log(sum);