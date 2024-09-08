import NextAuth from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   // Log the pathname
//   console.log(pathname);

//   // Add your logic here to handle different cases based on the pathname
//   // For example, you could perform custom routing, authentication checks, etc.

//   // Return a response, continue request, or modify response
//   return NextResponse.next();
// }

