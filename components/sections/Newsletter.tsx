'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import toast from 'react-hot-toast'

export default function Newsletter() {
  // حالة البريد الإلكتروني المدخل
  const [email, setEmail] = useState('')
  // حالة التحميل عند الإرسال
  const [isLoading, setIsLoading] = useState(false)

  // دالة معالجة إرسال النموذج
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    if (!email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    // محاكاة طلب API
    setTimeout(() => {
      toast.success('Thank you for subscribing!')
      setEmail('')
      setIsLoading(false)
    }, 1000)
  }

  return (
    // قسم النشرة البريدية
    <section className="py-16 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* المحتوى النصي وفوائد الاشتراك */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-white/20 rounded-lg mr-3">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-primary-200">Newsletter</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Latest Trends
            </h2>
            
            <p className="text-lg text-primary-100 mb-8 max-w-lg">
              Subscribe to our newsletter and be the first to know about new arrivals, 
              exclusive offers, and fashion tips. Get 10% off your first order!
            </p>

            {/* فوائد الاشتراك */}
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-200 rounded-full mr-3"></div>
                <span className="text-primary-100">Exclusive early access to sales</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-200 rounded-full mr-3"></div>
                <span className="text-primary-100">Fashion tips and style guides</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-200 rounded-full mr-3"></div>
                <span className="text-primary-100">New product announcements</span>
              </div>
            </div>
          </motion.div>

          {/* نموذج الاشتراك */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Join Our Community
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest updates delivered to your inbox
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                size="lg"
              >
                {isLoading ? (
                  'Subscribing...'
                ) : (
                  <>
                    Subscribe Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By subscribing, you agree to our{' '}
              <a href="/privacy" className="text-primary-600 hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-primary-600 hover:underline">
                Terms of Service
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 