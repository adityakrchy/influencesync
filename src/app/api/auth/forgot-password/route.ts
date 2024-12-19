// src/app/api/auth/forgot-password/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateVerificationToken, sendPasswordResetEmail } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return NextResponse.json(
        { message: 'If an account exists, you will receive a password reset email' }
      )
    }

    const resetToken = await generateVerificationToken()
    const resetExpires = new Date(Date.now() + 3600000) // 1 hour

    await prisma.user.update({
      where: { email },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExpires: resetExpires
      }
    })

    await sendPasswordResetEmail(email, resetToken)

    return NextResponse.json({
      message: 'If an account exists, you will receive a password reset email'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}