'use client'
// src/app/(auth)/register/page.tsx
import { RegisterForm } from '@/components/auth/RegisterForm'
import { motion } from 'framer-motion'

export default function RegisterPage() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
      <div className="max-w-7xl z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Create your account
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Already have an account?{' '}
            <a href="/login" className="font-medium text-blue-400 hover:text-blue-500">
               Sign in
          </a>
          </motion.p>
        </div>
        <RegisterForm />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 pointer-events-none" />
      </div>
  )
}