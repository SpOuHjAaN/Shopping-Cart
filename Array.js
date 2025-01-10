console.log("hii");
let names = ["sohan","Ram","bapi","amulya"]
console.log(names);
console.log(names.length); // property
names[1] = "rohit";
console.log(names);
names.splice(1,1,"Rohit");
console.log(names);
 //loop
 for(let i = 0; i<names.length;i++){
    console.log(names[i]);
 }

 //for-of
 for(let item of names){
    console.log(item.toUpperCase());
 }

 //practice-1
 let marks = [85,97,44,37,75,60];
 let sum =0;
 let avg;
 for(let i = 0;i<marks.length;i++){
    sum=sum+marks[i];
   
 }
 avg = sum/marks.length;
 console.log(avg);

 //OR

 for(let val of marks){
    sum+=val;
    // avg = sum/marks.length;
 }
 avg = sum/marks.length;
 console.log(`${avg}`);

 //practice-2
 let price=[250,645,300,900,50];
 let offer,res;
 for(let i = 0; i<price.length;i++){
    offer=price[i]/10;
   price[i]= price[i]-offer;
    console.log(price[i]);
 } 
//   console.log(res);

//array to string
console.log(price.toString());

//practice-2
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
