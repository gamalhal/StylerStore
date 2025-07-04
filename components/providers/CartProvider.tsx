'use client'

import { ReactNode } from 'react'
import { useCartStore } from '@/lib/stores/cartStore'

// نوع الخصائص للمكون
interface CartProviderProps {
  children: ReactNode
}

// مكون مزود السلة الذي يلتف حول جميع المكونات التي تحتاج الوصول لحالة السلة
export function CartProvider({ children }: CartProviderProps) {
  // تهيئة حالة السلة عند تحميل المكون
  useCartStore()
  
  return <>{children}</>
} 