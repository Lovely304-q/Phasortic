const generateAge= ()=>{
const output=document.getElementById("output");
const userDOB=document.getElementById("date");
console.log(userDOB.value);

const currentDate=new Date();
const  userDOBYear=new Date(userDOB.value);

let userAge= currentDate.getFullYear()-userDOBvalue.getFullYear();
if(userDOBvalue.getMonth()>currentDate.getMonth()) userAge--;

output.innerText= `Users current age is: ${userAge} Years`;
console.log(userAge);

}