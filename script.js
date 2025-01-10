let a = 6;
let b = 7;
console.log("a+b = ",a+b);
console.log(a^b);
console.log(6**2);
console.log(a++);
console.log(++a);
//conditional statement
const age = 18;
if(age>=18){
    console.log("give permission for vote.");
}else{
    console.log("denied");
}

let num = 10;
if(num%2 === 0 ){
    console.log("even");
}else{
    console.log("odd");
}
//ternary operator
let Age = 25;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);
// multiple of 5 task - 1
let Num = prompt("Enter a number");
if(Num %5 === 0){
    console.log("multiple of 5");
}else{
    console.log("not");
}

//task-2
let score = prompt("enter score");
let grade;
if(score >=80 && score <=100){
    grade="A";
}else if(score >=70 && score <=79){
    grade="B";
}else if(score >= 60 && score <=69){
    grade="C";
}else if(score >=50 && score <=59){
    grade="D";
}else{
    grade="F";
}
console.log(grade);
