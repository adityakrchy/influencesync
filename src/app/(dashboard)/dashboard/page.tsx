// src/app/(dashboard)/dashboard/page.tsx
import { Metadata } from 'next'
import DashboardOverview from '@/components/dashboard/Overview'

export const metadata: Metadata = {
  title: 'Dashboard - Influence Connect',
  description: 'Manage your influencer marketing campaigns',
}

export default function DashboardPage() {
  return <DashboardOverview />
}