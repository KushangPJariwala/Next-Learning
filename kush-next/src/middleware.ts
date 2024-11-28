import { NextRequest, NextResponse } from "next/server";

const islogged:boolean=true
console.log('islogged', islogged)
export async function middleware(req:NextRequest){
if(islogged){
    return NextResponse.next()
}
return NextResponse.redirect(new URL('/',req.url))
}

export const config={
    matcher:['/profile','/dashboard'],
}