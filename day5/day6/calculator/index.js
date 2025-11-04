const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
const output=document.getElementById("output");
function add()
{
    if(num1.value || num2.value===" ")
    {
        alert("please enter both the numebrs. ")
    }
 const op = (parseFloat(num1.value) + parseFloat(num2.value));
 output.innerText=op;

}
function sub()
{
 const op= (parseFloat(num1.value) - parseFloat(num2.value));
 output.innerText=op;
 console.log("sub");
 
}
function mul()

{
 const op= (parseFloat(num1.value) * parseFloat(num2.value)); 
 output.innerText=op;
 console.log("mul");
 
}
function div()
{
const op = (parseFloat(num1.value) / parseFloat(num2.value));
output.innerText=op;
 console.log("div");

}
