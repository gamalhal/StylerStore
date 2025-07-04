import { Suspense } from 'react'
import Hero from '@/components/sections/Hero'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import Categories from '@/components/sections/Categories'
import Newsletter from '@/components/sections/Newsletter'
import Loading from '@/components/ui/Loading'

// الصفحة الرئيسية للموقع (Homepage)
export default function HomePage() {
  return (
    // العنصر الرئيسي للصفحة
    <main className="min-h-screen">
      {/* قسم البطل (Hero Section) */}
      <Hero />
      
      {/* عرض التصنيفات مع تحميل كسول (Lazy Loading) */}
      <Suspense fallback={<Loading />}>
        <Categories />
      </Suspense>
      
      {/* عرض المنتجات المميزة مع تحميل كسول */}
      <Suspense fallback={<Loading />}>
        <FeaturedProducts />
      </Suspense>
      
      {/* قسم النشرة البريدية */}
      <Newsletter />
    </main>
  )
} 