"use server"
import db from "@/lib/db"
export async function createUser(email:string , mobile_no:number,name?:string){

try{
    const user = await db.user.create({
    data:{
        name,
        email,
        mobile_no,
       
    }
})
}
catch(err){
    return `User not created due to ${err}`
}

return 'user created successfully'
}
