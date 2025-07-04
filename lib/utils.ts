// دوال وأدوات مساعدة عامة تُستخدم في أجزاء مختلفة من المشروع
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// دمج الكلاسات الخاصة بـ Tailwind و clsx في سلسلة واحدة
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// دالة لتنسيق السعر وعرضه بشكل عملة
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

// دالة لقص النص إذا تجاوز طول معين وإضافة ... في النهاية
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
