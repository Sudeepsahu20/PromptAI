'use server'
import db from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { email, success } from 'zod';

export const OnBoardUser=async()=>{
   try {
    const user= await currentUser();
    if(!user){
           return {
            success:false,
            error:"No authenticated user found"
           }
    }
    const{id,imageUrl,firstName,emailAddresses,lastName}=user;
    const newUser=await db.user.upsert({
        where:{
            clerkId:id
        },
        update:{
            name: firstName && lastName ? `${firstName} ${lastName}` : firstName || lastName || null,
        image: imageUrl || null,
        email: emailAddresses[0]?.emailAddress || "",
        },
        create:{
           clerkId: id,
        name: firstName && lastName ? `${firstName} ${lastName}` : firstName || lastName || null,
        image: imageUrl || null,
        email: emailAddresses[0]?.emailAddress || "",
        }

    })
   return {
      success: true,
      user: newUser,
      message: "User onboarded successfully",
    };
  } catch (error) {
    console.error("❌ Error onboarding user:", error);
    return {
      success: false,
      error: "Failed to onboard user",
    };
  }
};

export const getCurrentUser=async()=>{
    try {
        const user=await currentUser();

        if(!user){
            return null;
        }

        const dbuser=await db.user.findUnique({
            where:{
                clerkId:user.id
            },
            select:{
          id:true,
          name:true,
          email:true,
          image:true,
          clerkId:true
            }
        })
        return dbuser;
    } catch (error) {
        console.error("❌ Error Fetching user:", error);
        return  null;
    }
}