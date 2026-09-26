'use client'

import { useEffect, useState } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const toggle = (list, id) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id])

export const useAcademyStore = create(
  persist(
    (set) => ({
      wishlist: [],
      cart: [],
      enrolled: [], // [{ id, enrolledAt, completedLessons }]

      toggleWishlist: (id) => set((s) => ({ wishlist: toggle(s.wishlist, id) })),
      addToCart: (id) => set((s) => (s.cart.includes(id) ? s : { cart: [...s.cart, id] })),
      removeFromCart: (id) => set((s) => ({ cart: s.cart.filter((x) => x !== id) })),
      checkout: () =>
        set((s) => {
          const already = new Set(s.enrolled.map((e) => e.id))
          const now = new Date().toISOString()
          return {
            cart: [],
            enrolled: [
              ...s.enrolled,
              ...s.cart.filter((id) => !already.has(id)).map((id) => ({ id, enrolledAt: now, completedLessons: 0 })),
            ],
          }
        }),
      completeLesson: (id, totalLessons) =>
        set((s) => ({
          enrolled: s.enrolled.map((e) =>
            e.id === id ? { ...e, completedLessons: Math.min(e.completedLessons + 1, totalLessons) } : e,
          ),
        })),
    }),
    { name: 'makeup-academy' },
  ),
)

// The store is saved in localStorage, which the server can't see. Until the page has
// mounted, return the empty default so server and client render the same markup.
const initial = { wishlist: [], cart: [], enrolled: [] }

export function useAcademy(selector) {
  const value = useAcademyStore(selector)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? value : selector({ ...useAcademyStore.getState(), ...initial })
}
