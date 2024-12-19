// src/lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailParams) {
  try {
    const data = await resend.emails.send({
      from: 'InfluenceSync <noreply@rahamtullahsheikh.me>',
      to,
      subject,
      html,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}