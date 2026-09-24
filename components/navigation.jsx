'use client'

import Link from 'next/link'
import { Heart, ShoppingBag, User, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-beige">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 md:py-5">
          <Link href="/" className="flex-shrink-0">
            <div className="font-serif text-2xl md:text-3xl font-semibold text-near-black">
              Makeup<span className="text-accent">.</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/courses" className="text-charcoal hover:text-accent transition-colors font-medium">
              Courses
            </Link>
            <Link href="/instructors" className="text-charcoal hover:text-accent transition-colors font-medium">
              Instructors
            </Link>
            <Link href="/about" className="text-charcoal hover:text-accent transition-colors font-medium">
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 hover:bg-beige rounded-lg transition-colors">
              <Heart size={20} className="text-charcoal" />
            </button>
            <button className="hidden md:block p-2 hover:bg-beige rounded-lg transition-colors relative">
              <ShoppingBag size={20} className="text-charcoal" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
            </button>
            <Link href="/dashboard" className="hidden md:block btn btn-primary py-2 px-4 text-sm">
              Dashboard
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-beige rounded-lg transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-beige">
            <div className="flex flex-col gap-3 pt-4">
              <Link href="/courses" className="px-4 py-2 text-charcoal hover:bg-beige rounded-lg">
                Courses
              </Link>
              <Link href="/instructors" className="px-4 py-2 text-charcoal hover:bg-beige rounded-lg">
                Instructors
              </Link>
              <Link href="/about" className="px-4 py-2 text-charcoal hover:bg-beige rounded-lg">
                About
              </Link>
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
