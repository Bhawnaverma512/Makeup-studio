'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useAcademy } from '../lib/store'

const links = [
  { href: '/courses', label: 'Courses' },
  { href: '/instructors', label: 'Instructors' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
]

function CountBadge({ count }) {
  if (!count) return null
  return (
    <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-accent text-cream rounded-full text-[11px] font-semibold flex items-center justify-center">
      {count}
    </span>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const wishlistCount = useAcademy((s) => s.wishlist.length)
  const cartCount = useAcademy((s) => s.cart.length)

  useEffect(() => setIsOpen(false), [pathname])

  const linkClass = (href) =>
    `transition-colors font-medium ${pathname.startsWith(href) ? 'text-accent' : 'text-charcoal hover:text-accent'}`

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-beige">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 md:py-5">
          <Link href="/" className="flex-shrink-0">
            <div className="font-serif text-2xl md:text-3xl font-semibold text-near-black">
              Makeup<span className="text-accent">.</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/wishlist" aria-label="Wishlist" className="p-2 hover:bg-beige rounded-lg transition-colors relative">
              <Heart size={20} className="text-charcoal" />
              <CountBadge count={wishlistCount} />
            </Link>
            <Link href="/cart" aria-label="Cart" className="p-2 hover:bg-beige rounded-lg transition-colors relative">
              <ShoppingBag size={20} className="text-charcoal" />
              <CountBadge count={cartCount} />
            </Link>
            <Link href="/dashboard" className="hidden md:inline-flex btn btn-primary py-2 px-4 text-sm">
              Dashboard
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden p-2 hover:bg-beige rounded-lg transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-beige">
            <div className="flex flex-col gap-3 pt-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="px-4 py-2 text-charcoal hover:bg-beige rounded-lg">
                  {l.label}
                </Link>
              ))}
              <Link href="/dashboard" className="px-4 py-2 btn btn-primary">
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
