const obj={
    name:"abc",
    rollno:1,
    branch:"elce",
    section:"A"
    email:{
        email1:"abc@gmail.com",
        email2:"abc245@gmail.com"
    }

}
obj.name="ABC";
console.log(obj["name"])
const obj2={
    name:"xyz",
    rollno:2,
    branch:"elce",
    section:"A"
    email:{
        email1:"xyz@gmail.com",
        email2:"xyz295@gmail.com"
    }

}

console.log(obj.email.email1);
console.log(obj["email"]["email1"]);
console.log(obj.email["email1"]);
console.log(obj["email"].email1);
console.log(obj);
console.log(obj.branch);
console.log(obj["name"]);
console.log(typeofobj);