import { NextRequest, NextResponse } from "next/server";
import { users } from "../../crud/data";
import dbConnect from "@/app/lib/conn";
import User from "@/app/lib/models/user";

export async function GET(req:NextRequest) {
   await dbConnect();
    const {searchParams }= new URL(req.url);
    // console.log('searchParams ', searchParams )

     const archivedParam = searchParams.get("archieved");
       const isArchived = Boolean(archivedParam) || false


    const data =await User.find({active:!isArchived})
    console.log('data', data)
    // console.log('data', data)
    return NextResponse.json({users:data})
}

export async function POST(req:NextRequest,) {
   const { body} = await req.json()

   await dbConnect();
   const newUser = new User({ name:body.name, id:body.id});
    await newUser.save();
  

  return NextResponse.json({message:'added', user: newUser})
}