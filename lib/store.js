'use client'

import { useEffect, useState } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const toggle = (list, id) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id])

// e.g. MA-7K4P-M2XD (no 0/O/1/I so it's easy to read out over the phone)
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
function newOrderNumber() {
  const bytes = crypto.getRandomValues(new Uint8Array(8))
  const chars = Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join('')
  return `MA-${chars.slice(0, 4)}-${chars.slice(4)}`
}

export const ORDER_NUMBER_PATTERN = /^MA-[A-Z0-9]{4}-[A-Z0-9]{4}$/

export const useAcademyStore = create(
  persist(
    (set, get) => ({
      wishlist: [],
      cart: [],
      enrolled: [], // [{ id, enrolledAt, completedLessons }]
      orders: [], // [{ number, createdAt, courseIds, total }], newest first

      toggleWishlist: (id) => set((s) => ({ wishlist: toggle(s.wishlist, id) })),
      addToCart: (id) => set((s) => (s.cart.includes(id) ? s : { cart: [...s.cart, id] })),
      removeFromCart: (id) => set((s) => ({ cart: s.cart.filter((x) => x !== id) })),

      // Enrols in everything in the cart and records an order. Returns the new order
      // number, or null if every course in the cart was already enrolled.
      checkout: (priceOf) => {
        const s = get()
        const already = new Set(s.enrolled.map((e) => e.id))
        const courseIds = s.cart.filter((id) => !already.has(id))
        if (courseIds.length === 0) {
          set({ cart: [] })
          return null
        }
        const now = new Date().toISOString()
        const number = newOrderNumber()
        set({
          cart: [],
          enrolled: [...s.enrolled, ...courseIds.map((id) => ({ id, enrolledAt: now, completedLessons: 0 }))],
          orders: [
            { number, createdAt: now, courseIds, total: courseIds.reduce((sum, id) => sum + priceOf(id), 0) },
            ...s.orders,
          ],
        })
        return number
      },
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
const initial = { wishlist: [], cart: [], enrolled: [], orders: [] }

export function useAcademy(selector) {
  const value = useAcademyStore(selector)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? value : selector({ ...useAcademyStore.getState(), ...initial })
}
