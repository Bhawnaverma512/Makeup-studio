'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Heart, ShoppingBag, PlayCircle } from 'lucide-react'
import { useAcademy } from '../lib/store'

// Enrol / wishlist buttons for the course page. `variant="dark"` is for the dark hero.
export default function CourseActions({ courseId, variant = 'light' }) {
  const router = useRouter()
  const enrolled = useAcademy((s) => s.enrolled.some((e) => e.id === courseId))
  const inCart = useAcademy((s) => s.cart.includes(courseId))
  const saved = useAcademy((s) => s.wishlist.includes(courseId))
  const addToCart = useAcademy((s) => s.addToCart)
  const toggleWishlist = useAcademy((s) => s.toggleWishlist)

  const dark = variant === 'dark'
  const layout = dark ? 'flex flex-col sm:flex-row gap-4' : 'flex flex-col gap-3'
  const primary = dark ? 'btn btn-secondary px-8' : 'w-full btn btn-primary'
  const secondary = dark
    ? 'btn border border-cream text-cream hover:bg-cream/10 px-8'
    : 'w-full btn btn-outline'

  if (enrolled) {
    return (
      <div className={layout}>
        <Link href="/dashboard" className={`${primary} gap-2`}>
          <PlayCircle size={18} /> Continue learning
        </Link>
      </div>
    )
  }

  return (
    <div className={layout}>
      <button
        type="button"
        className={`${primary} gap-2`}
        onClick={() => {
          addToCart(courseId)
          router.push('/cart')
        }}
      >
        <ShoppingBag size={18} /> {inCart ? 'Go to cart' : 'Enroll Now'}
      </button>
      <button type="button" className={`${secondary} gap-2`} onClick={() => toggleWishlist(courseId)}>
        <Heart size={18} className={saved ? 'fill-current' : ''} />
        {saved ? 'Saved to wishlist' : 'Save to wishlist'}
      </button>
    </div>
  )
}
