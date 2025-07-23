import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import createMiddleware from 'next-intl/middleware'; //intl
import {routing} from './i18n/routing'; //intl

// middleware intl
const intlMiddleware = createMiddleware(routing);

const allowedPaths = [
    'tn',  /* Tamil Nadu */
    'ka',  /* Karnataka */
    'mh',  /* Maharashtra */
    'dl',  /* Delhi */
    'ts',  /* Telangana */
    'hr',  /* Haryana */
    'se',   /* Singapore */
    'uaedxb', /* UAE Dubai */
    'uaesh', /* UAE Sharjah */
    'uaead' /* UAE Abu Dhabi */
];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Match top-level paths like /ch, /global, /admin123
    const match = pathname.match(/^\/([a-zA-Z0-9_-]+)(\/)?$/);
    const pathSegment = match?.[1];

    // ✅ Allow /auth to proceed normally
    if (pathSegment === 'auth') {
        return NextResponse.next();
    }

    // ✅ Rewrite allowed paths to homepage
    if (pathSegment && allowedPaths.includes(pathSegment)) {
        const url = request.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.rewrite(url);
    }

    // // ❌ Everything else goes to Not Found page
    // if (pathname !== '/') {
    //     const url = request.nextUrl.clone();
    //     url.pathname = '/not-found';
    //     return NextResponse.rewrite(url);
    // }

    // Allow homepage normally
    		
  return intlMiddleware(request);
}

export const config = {
     matcher: ['/((?!_next/static|_next/image|favicon.ico|api|robots.txt|sitemap.xml|videos).*)'],
};