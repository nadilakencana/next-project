import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(req: NextRequest) {
   const res = NextResponse.next();
   return res;
}

export default withAuth(mainMiddleware, [
    "/profile",
    "/product",
]);

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};