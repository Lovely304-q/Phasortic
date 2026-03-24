import{readfile,writeFile} from"./helper.js";
const register = async(userDetails,FILE)=>{
    const { name,email,password,gender } =userDetails;
    if(!name || email || password || gender )
        return{mesaage: "All fields are required  to register "};
    const users =await readfile(FILE);
    const existingUser = users.find((user)=>user.email.toLowerCase() ===email.toLowerCase());
    if(existingUser)return (message : "User is already existing.Please try to login....")
    let updatedUsers=[];
   

    users.length ===0
    ?updatedusers = [userDetails]
    :updatedusers = [...users,userDetails]
   const response = await writeFile(updatedUsers,FILE);
