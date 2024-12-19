// src/lib/auth.ts
import { hash, compare } from 'bcryptjs'
import { sign, verify } from 'jsonwebtoken'
// import { prisma } from './prisma'
import crypto from 'crypto'
import { sendEmail } from './email'
import { 
    getVerificationEmailTemplate, 
    getPasswordResetEmailTemplate 
  } from './email-templates';
  

export async function hashPassword(password: string) {
  return await hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword)
}

export function generateToken(payload: any) {
  return sign(payload, process.env.JWT_SECRET!, { expiresIn: '1d' })
}

export function verifyToken(token: string) {
  try {
    return verify(token, process.env.JWT_SECRET!)
  } catch {
    return null
  }
}

export async function generateVerificationToken() {
  return crypto.randomBytes(32).toString('hex')
}

export async function sendVerificationEmail(email: string, token: string) {
    const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;
    
    return await sendEmail({
      to: email,
      subject: 'Verify your Influence Connect account',
      html: getVerificationEmailTemplate(verificationUrl),
    });
  }
  
  export async function sendPasswordResetEmail(email: string, token: string) {
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;
    
    return await sendEmail({
      to: email,
      subject: 'Reset your Influence Connect password',
      html: getPasswordResetEmailTemplate(resetUrl),
    });
  }