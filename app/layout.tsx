// ملف تخطيط الجذر (Root Layout) يحدد الهيكل العام لكل صفحات الموقع
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { CartProvider } from '@/components/providers/CartProvider'

// تهيئة خط Google Inter لاستخدامه في الموقع
const inter = Inter({ subsets: ['latin'] })

// بيانات الميتا (Meta) الخاصة بالموقع لتحسين محركات البحث ووسائل التواصل
export const metadata: Metadata = {
  title: 'Styler Store - Fashion & Style',
  description: 'Discover the latest trends in fashion and style. Shop for clothing, accessories, and more.',
  keywords: 'fashion, style, clothing, accessories, online store',
  authors: [{ name: 'Styler Store' }],
  openGraph: {
    title: 'Styler Store - Fashion & Style',
    description: 'Discover the latest trends in fashion and style.',
    type: 'website',
    locale: 'en_US',
  },
}

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// مكون التخطيط الجذري الذي يلتف حول جميع الصفحات
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* مزود المصادقة لتوفير حالة المستخدم لجميع المكونات */}
        <AuthProvider>
          {/* مزود سلة التسوق لتوفير حالة السلة لجميع المكونات */}
          <CartProvider>
            {/* رأس الصفحة */}
            <Header />
            {/* محتوى الصفحة الرئيسي */}
            {children}
            {/* تذييل الصفحة */}
            <Footer />
            {/* مكون عرض الإشعارات (التوست) */}
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
              }}
            />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
} 