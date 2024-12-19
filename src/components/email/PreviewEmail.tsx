// src/components/email/PreviewEmail.tsx
'use client';

interface PreviewEmailProps {
  template: string;
}

export function PreviewEmail({ template }: PreviewEmailProps) {
  return (
    <div className="max-w-2xl mx-auto my-8 p-4 border rounded-lg">
      <div className="mb-4 p-2 bg-gray-100 rounded">
        <h2 className="text-sm font-medium text-gray-500">Email Preview</h2>
      </div>
      <div 
        className="email-preview"
        dangerouslySetInnerHTML={{ __html: template }}
      />
    </div>
  );
}