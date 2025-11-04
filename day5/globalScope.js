var a = 20;
let b ="abc";
const pi=3.14;
console.log("IN global scope a:",a);
console.log("IN global scope b:",b);
console.log("IN global scope pi:",pi);
function f()
{

    console.log("Value of global scope variable a in function scope :" , a);
     console.log("Value of global scope variable b in function scope :" , b);
      console.log("Value of global scope variable  pi in function scope :" , pi);
}
f();
