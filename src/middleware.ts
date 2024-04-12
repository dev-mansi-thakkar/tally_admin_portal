import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //check if logged in or not. If not, redirect to login page
  const loginCookie = request.cookies.get("loggedin");
  const url = request.url;
  if ((!loginCookie || loginCookie.value !== "true") && url.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/", url));
  }
  if(loginCookie && loginCookie.value === 'true' && !url.includes('/dashboard') )
  return NextResponse.redirect(new URL("/dashboard", url));
}

//check paths for validations
export const config = {
  matcher: ["/dashboard", '/'],
};
