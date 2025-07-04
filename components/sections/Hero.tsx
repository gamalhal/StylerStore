'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, ShoppingBag } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-primary-600 to-primary-800 overflow-hidden">
      {/* طبقة شفافة فوق الخلفية */}
      <div className="absolute inset-0 bg-black/10" />
      {/* نمط زخرفي SVG كخلفية */}
      <div
        className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20fill='%23ffffff'%20fill-opacity='0.05'%3E%3Ccircle%20cx='30'%20cy='30'%20r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20`}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* المحتوى النصي والأزرار */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* العنوان الرئيسي */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Discover Your
              <span className="block text-primary-200">Perfect Style</span>
            </motion.h1>
            
            {/* وصف مختصر */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-xl text-primary-100 max-w-lg"
            >
              Explore our curated collection of fashion-forward clothing and accessories. 
              Find your unique style and express yourself with confidence.
            </motion.p>
            
            {/* أزرار التنقل السريع */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/shop">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Browse Categories
                </Button>
              </Link>
            </motion.div>
            
            {/* إحصائيات مختصرة */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex gap-8"
            >
              <div>
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-primary-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-primary-200">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-primary-200">Support</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* صورة جذابة للمنتجات */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fashion Collection"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* مؤشر التمرير للأسفل */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 