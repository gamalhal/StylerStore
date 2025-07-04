'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react'
import { useCartStore } from '@/lib/stores/cartStore'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'

export default function Header() {
  // حالة فتح/إغلاق قائمة الجوال
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // حالة فتح/إغلاق البحث
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  // بيانات جلسة المستخدم (المصادقة)
  const { data: session } = useSession()
  // دالة لجلب عدد العناصر في السلة
  const { getItemCount } = useCartStore()

  // عناصر التنقل الرئيسية
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* الشعار */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Styler Store</span>
          </Link>

          {/* قائمة التنقل لسطح المكتب */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* أزرار الإجراءات لسطح المكتب */}
          <div className="hidden md:flex items-center space-x-4">
            {/* زر البحث */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* زر قائمة الأمنيات */}
            <Link href="/wishlist" className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <Heart className="w-5 h-5" />
            </Link>

            {/* زر السلة */}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {/* شارة بعدد العناصر في السلة */}
              {getItemCount() > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {getItemCount()}
                </Badge>
              )}
            </Link>

            {/* قائمة المستخدم */}
            {session ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-primary-600 transition-colors">
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">{session.user?.name}</span>
                </button>
                {/* قائمة منسدلة للمستخدم */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Orders
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/auth/signin">
                <Button variant="outline" size="sm">
                  Sign in
                </Button>
              </Link>
            )}
          </div>

          {/* زر فتح قائمة الجوال */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* شريط البحث */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}

        {/* قائمة التنقل للجوال */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <Link href="/cart" className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Cart ({getItemCount()})
              </Link>
              <Link href="/wishlist" className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600">
                <Heart className="w-5 h-5 mr-2" />
                Wishlist
              </Link>
              {session ? (
                <>
                  <Link href="/profile" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                    Profile
                  </Link>
                  <Link href="/orders" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                    Orders
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link href="/auth/signin" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                  Sign in
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 