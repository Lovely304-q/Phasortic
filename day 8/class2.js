class Student{
    constructor(roolno,name,branch,section){
        this.rollno=this.rollno;
        this.name=name;
        this.branch=branch;
        this.section=section;
    }
    greet()
    {
        console.log(`Hello ${this.name}`);
        
    }
    
    
}
const stu1=new Student(1,"abc","elce","A");
stu1.greet();
console.log(stu1["name"]);
stu1["name"]="xyz";
console.log(stu1["name"]);

