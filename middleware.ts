// // src/middleware.ts
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { verifyToken } from './lib/auth'

// export async function middleware(request: NextRequest) {
//   // Get token from cookie
//   const token = request.cookies.get('token')?.value

//   // Check if user is trying to access protected routes
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     if (!token) {
//       return NextResponse.redirect(new URL('/signin', request.url))
//     }

//     const payload = verifyToken(token)
//     if (!payload) {
//       return NextResponse.redirect(new URL('/signin', request.url))
//     }

//     // Role-based access control
//     const role = (payload as any).role
//     if (request.nextUrl.pathname.startsWith('/dashboard/admin') && role !== 'admin') {
//       return NextResponse.redirect(new URL('/dashboard', request.url))
//     }
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/dashboard/:path*']
// }