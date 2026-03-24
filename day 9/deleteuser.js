import{readFile,writeFile} from "./helper.js";
const deleteUser=async(userDetails,FILE)=>{
    const{email , password } = userDetails;
    if(!email || !password)
        return(messafe:" All fields are required to delete the user " );

    const users=await readFile(FILE);
    if(users.length===0)return (message :"user is not existing" );
    const existingUser=users.find((user)=>user.email.toLowerCase()===email.toLowerCase());
    if(!existingUser)return {message: "User is nit existing." };
     
    if(existingUser.password!==password)
        return{message: "incorrect password. we can not delete the user "};
    
    const updatedUsers = users.filter((user)=>user.email.toLowerCase()!==email.toLowerCase());
    const response = await writeFile(updatedUsers,FILE);
    return response;
}
deleteUser({email:"xyz@gmail.com",password:"12345"},"./users.json")
.then((res)=>console.log(res))