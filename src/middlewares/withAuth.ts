import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default function withAuth(
    middleware: (req: NextRequest, event: NextFetchEvent) => Promise<NextResponse> | NextResponse,
    requireAuth: string[] = []
){
    return async (req: NextRequest, event: NextFetchEvent) =>{
        const pathname = req.nextUrl.pathname;

        if (requireAuth.some(path => pathname.startsWith(path))){
            const token = await getToken({
                req, 
                secret: process.env.NEXTAUTH_SECRET,
            });

            if(!token){
                const url = new URL("/", req.url);
                return NextResponse.redirect(url)
            }

        }
        return middleware(req, event);
    };
}