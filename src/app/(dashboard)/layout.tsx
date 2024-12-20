'use client'
import { redirect } from 'next/navigation';
import DashboardHeader from '@/components/dashboard/shared/Header';
import DashboardSidebar from '@/components/dashboard/shared/Sidebar';
import { useAuth } from '@/lib/dashauth';

// export const metadata = {
//   title: 'Dashboard - Influence Connect',
//   description: 'Manage your influencer marketing campaigns',
// };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { user, isLoading } = useAuth();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user) {
  //   redirect('/login');
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex h-[calc(100vh-4rem)]">
        {/* <DashboardSidebar userRole={user.role} /> */}
        <DashboardSidebar userRole={'company'} />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}