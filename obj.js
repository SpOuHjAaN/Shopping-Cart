// const student = {
//     name : "pooja biswal",
//     roll_no : 4,
//     Designation: "Developer",
// };

// console.log(student.Designation);

//within object we can use methods.
const student = {
    name : "pooja biswal",
    roll_no : 4,
    Designation: "Developer",
    printroll: function (){
        console.log("roll no : ", this.roll_no); //this refers the currect object . here it refers thet student.roll_no.
    },
   
};

//protoype
const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const anything = {
    salary:77878,
};

anything.__proto__ = employee;

//classes
class ToyotaCar{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
}

let thar = new ToyotaCar();
let bolor = new ToyotaCar();