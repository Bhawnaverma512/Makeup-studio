'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import CourseCard from '../../components/course-card'
import { getCourse } from '../../lib/data'
import { useAcademy } from '../../lib/store'

export default function WishlistPage() {
  const wishlist = useAcademy((s) => s.wishlist)
  const items = wishlist.map(getCourse).filter(Boolean)

  return (
    <>
      <div className="bg-ivory border-b border-beige">
        <div className="container-custom py-12">
          <h1 className="font-serif text-display-lg md:text-display text-near-black mb-2">Your Wishlist</h1>
          <p className="text-lg text-charcoal/70">Courses you've saved for later</p>
        </div>
      </div>

      <div className="container-custom py-16">
        {items.length === 0 ? (
          <div className="card p-12 text-center">
            <Heart size={40} className="text-accent mx-auto mb-4" />
            <h2 className="font-serif text-heading text-near-black mb-2">No saved courses yet</h2>
            <p className="text-charcoal/60 mb-8">Tap the heart on any course to save it here.</p>
            <Link href="/courses" className="btn btn-primary px-8">Browse courses</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
