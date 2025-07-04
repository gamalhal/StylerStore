import { create } from "zustand";
import { persist } from "zustand/middleware";

// تعريف نوع العنصر في السلة
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

// تعريف نوع حالة السلة والدوال المتاحة
interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

// إنشاء Zustand store مع تخزين الحالة في localStorage
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // مصفوفة العناصر في السلة
      items: [],

      // إضافة عنصر للسلة (أو زيادة الكمية إذا كان موجود بنفس المواصفات)
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find(
            (i) =>
              i.id === item.id && i.size === item.size && i.color === item.color
          );

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id &&
                i.size === item.size &&
                i.color === item.color
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }

          return {
            items: [...state.items, { ...item, quantity: 1 }],
          };
        });
      },

      // إزالة عنصر من السلة حسب المعرف
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      // تحديث كمية عنصر معين في السلة
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
          ),
        }));
      },

      // إفراغ السلة بالكامل
      clearCart: () => {
        set({ items: [] });
      },

      // حساب إجمالي السعر لجميع العناصر في السلة
      getTotal: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      // حساب إجمالي عدد العناصر في السلة
      getItemCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage", // اسم التخزين في localStorage
    }
  )
);
