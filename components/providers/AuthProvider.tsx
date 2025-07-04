'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

// نوع الخصائص للمكون
interface AuthProviderProps {
  children: ReactNode
}

// مكون مزود المصادقة الذي يلتف حول جميع المكونات التي تحتاج الوصول لحالة المستخدم
export function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>
} 