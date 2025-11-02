//1. Premitive Data type
//2. Refrence data type(notPremitive)-> array,object,function

// #Array

let Languages=["Hindi","English","Bhojpuri","Tamil"]
console.log(typeof Languages);
console.log(Languages);


// #Object

const MyInfo ={
    name:"Chhotu Patel",
    age:22,
    city:"Sheikhpura",
}
console.log(typeof MyInfo);
console.log(MyInfo);

// #Function

const myFunction = function (){
    console.log("Hello!, my name is chhotu patel");
}

console.log(typeof myFunction);
console.log(myFunction());

function displayListOfProgramingLan(){
    console.table(["C","C++","Java","JavaScript","Python"]);
}
displayListOfProgramingLan()