'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import Stars from './stars'
import { useAcademy } from '../lib/store'

export default function CourseCard({ course }) {
  const saved = useAcademy((s) => s.wishlist.includes(course.id))
  const toggleWishlist = useAcademy((s) => s.toggleWishlist)

  return (
    <Link href={`/courses/${course.id}`} className="block h-full">
      <div className="card card-hover overflow-hidden h-full flex flex-col">
        {/* Box uses the photos' own 2:3 shape so the whole picture is shown, nothing cropped. */}
        <div className="relative w-full aspect-[2/3] bg-beige overflow-hidden group">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-accent text-cream px-3 py-1 rounded-full text-small font-medium">
            {course.level}
          </div>
          <button
            type="button"
            aria-label={saved ? 'Remove from wishlist' : 'Save to wishlist'}
            aria-pressed={saved}
            onClick={(e) => {
              e.preventDefault()
              toggleWishlist(course.id)
            }}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors"
          >
            <Heart size={18} className={saved ? 'fill-accent text-accent' : 'text-charcoal'} />
          </button>
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <p className="text-accent text-small font-medium mb-2">{course.category}</p>
          <h3 className="font-serif text-subheading text-near-black mb-3 line-clamp-2">{course.title}</h3>
          <p className="text-charcoal/60 text-body mb-4 line-clamp-2">{course.description}</p>
          <p className="text-small text-charcoal/60 mb-4">
            by <span className="font-medium">{course.instructor}</span>
          </p>

          <div className="flex items-center gap-2 mb-4">
            <Stars rating={course.rating} />
            <span className="text-small text-charcoal/60">{course.rating}</span>
          </div>

          <div className="flex justify-between items-center text-small text-charcoal/60 mb-4 mt-auto">
            <span>{course.duration}</span>
            <span>{course.lessons} lessons</span>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-beige">
            <span className="font-serif text-lg font-semibold text-accent">${course.price}</span>
            <span className="text-accent font-medium text-small hover:underline">View course →</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
