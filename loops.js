console.log("loop");

for(let i=1;i<=5;i++){
    console.log(i);
}

//sum of 1st 5 numbers
let sum = 0;
let n = 5
for(let i = 1; i<=n; i++){
    sum = sum+i;
  }
console.log(sum);

//while
let i = 1 ;
while(i<=5){
  console.log(i);
  i++;
}

//do-while
let j= 1;
do{
  console.log(j)
  j++;
}while(i<=5);

//for-of = helps in use loop upon string and array
let str4 = "Jagannatha";
for( let i of str4){
  console.log(i);
}

let str5 = "Jagannatha";
let length = 0;
for( let i of str5){
  console.log(i);
  length++;
}
console.log(length);

//for-in  = use loop on object
let student = {
  name : "sohan",
  age : 24,
  spouse : "Hubby",
};
for(let key in student){
  console.log(key);
  console.log(student[key]);
}


//practice-1
for(let i = 0;i<=100;i++){
  if(i%2==0){
    console.log(i);
  }
}

//practice-2
let gamenum = 20;
let num = prompt("enter the game number: ");
while(num!=gamenum){
  num=prompt("wrong ! guess again: ");
}
console.log("congratulations");

//string
let str = "pooja";
console.log(str.length);
console.log(str[1]);
//templet literals
let str1 = {
  item:"pen",
  price:20,
};
let output= `the price of pen ${str1.item} is ${str1.price} and multiple of ${2+3}`;
console.log(output);

//concat method
let str2 = "good";
let str3 = "girl";
let res1 = str2.concat(str3);
let res2 = str2+str3;
console.log(res1);
console.log(res2);

// practice-1
let fullname = prompt("enter ur fullname");
let res = "@" + fullname + fullname.length; // here length is a property not a method nor a function
console.log(res);