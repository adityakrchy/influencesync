'use client'
import LoginForm from '@/components/auth/LoginForm'
import { motion } from 'framer-motion'

export default function LoginPage() {
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
            Sign in to your account
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Let's discuss how we can help you achieve your influencer marketing goals
          </motion.p>
        </div>
        <LoginForm />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 pointer-events-none" />
    </div>
    // <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 relative z-10">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //     <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
    //       Sign in to your account
    //     </h2>
    //     <p className="mt-2 text-center text-sm text-gray-600">
    //       Or{' '}
    //       <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
    //         create a new account
    //       </a>
    //     </p>
    //   </div>
    //   <LoginForm />
    // </div>
  )
}
