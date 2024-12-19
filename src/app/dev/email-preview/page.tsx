// src/app/dev/email-preview/page.tsx
import { PreviewEmail } from '@/components/email/PreviewEmail';
import { 
  getVerificationEmailTemplate, 
  getPasswordResetEmailTemplate 
} from '@/lib/email-templates';

export default function EmailPreviewPage() {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=sample-token`;
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=sample-token`;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl pt-20 font-bold mb-8">Email Templates Preview</h1>
      
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Verification Email</h2>
        <PreviewEmail template={getVerificationEmailTemplate(verificationUrl)} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Password Reset Email</h2>
        <PreviewEmail template={getPasswordResetEmailTemplate(resetUrl)} />
      </section>
    </div>
  );
}