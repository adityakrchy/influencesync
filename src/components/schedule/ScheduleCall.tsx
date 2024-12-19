// src/components/schedule/ScheduleCall.tsx
'use client'

import { useState } from 'react'
import { 
  Calendar,
  Clock,
  Globe,
  Users,
  Video,
  Phone,
  ChevronLeft,
  ChevronRight,
  Check
} from 'lucide-react'
import { motion } from 'framer-motion'

// Time slots data
const timeSlots = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM'
]

// Meeting types
const meetingTypes = [
  {
    id: 'product-demo',
    title: 'Product Demo',
    duration: '30 min',
    icon: Video,
    description: 'Live demonstration of our platform features and capabilities.'
  },
  {
    id: 'consultation',
    title: 'Sales Consultation',
    duration: '45 min',
    icon: Users,
    description: 'Discuss your specific needs and explore custom solutions.'
  },
  {
    id: 'quick-chat',
    title: 'Quick Chat',
    duration: '15 min',
    icon: Phone,
    description: 'Brief introduction call to understand your requirements.'
  }
]

export default function ScheduleCall() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: ''
  })

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const days = []
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    // Add empty days for padding
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null)
    }

    // Add actual days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  const days = getDaysInMonth(currentDate)

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your booking logic here
    setStep(4) // Show success message
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Schedule a Call</h1>
          <p className="mt-2 text-gray-600">
            Book a time to speak with our sales team
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  ${step > i ? 'bg-green-500' : step === i ? 'bg-blue-600' : 'bg-gray-200'}
                  ${step >= i ? 'text-white' : 'text-gray-500'}
                `}>
                  {step > i ? <Check className="h-5 w-5" /> : i}
                </div>
                {i < 3 && (
                  <div className={`w-20 h-1 mx-2 ${step > i ? 'bg-green-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 text-sm text-gray-600">
            <div className="flex justify-between w-full max-w-md px-4">
              <span>Select Time</span>
              <span>Meeting Type</span>
              <span>Your Details</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Calendar */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={handlePrevMonth}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
                {days.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => date && setSelectedDate(date)}
                    disabled={!date || date < new Date()}
                    className={`
                      p-2 text-center rounded-lg
                      ${!date ? 'invisible' : ''}
                      ${date && date < new Date() ? 'text-gray-300 cursor-not-allowed' : ''}
                      ${date && date.toDateString() === selectedDate?.toDateString()
                        ? 'bg-blue-600 text-white'
                        : date && date >= new Date()
                        ? 'hover:bg-blue-50'
                        : ''
                      }
                    `}
                  >
                    {date?.getDate()}
                  </button>
                ))}
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">Available Times</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          p-2 text-center rounded-lg border
                          ${selectedTime === time
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-200 hover:border-blue-500'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end mt-6">
                <button
                  onClick={() => selectedDate && selectedTime && setStep(2)}
                  disabled={!selectedDate || !selectedTime}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-semibold">Select Meeting Type</h2>
              <div className="grid gap-4">
                {meetingTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`
                      flex items-start p-4 rounded-lg border text-left
                      ${selectedType === type.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-500'
                      }
                    `}
                  >
                    <div className="flex-shrink-0">
                      <type.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">{type.title}</h3>
                      <p className="text-sm text-gray-500">{type.duration}</p>
                      <p className="mt-1 text-sm text-gray-600">{type.description}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-2 border border-gray-300 rounded-lg"
                >
                  Back
                </button>
                <button
                  onClick={() => selectedType && setStep(3)}
                  disabled={!selectedType}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-xl font-semibold mb-6">Enter Your Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Additional Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-2 border border-gray-300 rounded-lg"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    Schedule Call
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Call Scheduled!
              </h2>
              <p className="text-gray-600 mb-6">
                We've sent you a calendar invitation with all the details.
              </p>
              <div className="max-w-sm mx-auto bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">
                    {selectedDate?.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">
                    {meetingTypes.find(t => t.id === selectedType)?.title}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}