/* 
import { NextResponse } from 'next/server';
export function middleware(request: Request) {
  console.log(request);
  return NextResponse.redirect(new URL('/about', request.url));
}
 */
import { auth } from './auth';

export const middleware = auth;

export const config = {
  matcher: ['/account'],
};
