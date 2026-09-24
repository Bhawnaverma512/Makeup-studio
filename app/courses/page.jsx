'use client'

import Link from 'next/link'
import { Star, Filter } from 'lucide-react'
import { courses } from '../../lib/data'
import { useState } from 'react'

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Bridal', 'Editorial', 'Contouring', 'Special Effects', 'Film', 'Fundamentals']

  const filtered = selectedCategory === 'All' ? courses : courses.filter(c => c.category === selectedCategory)

  return (
    <>
      <div className="bg-ivory border-b border-beige">
        <div className="container-custom py-16">
          <h1 className="font-serif text-display-lg md:text-display text-near-black mb-4">
            All Courses
          </h1>
          <p className="text-lg text-charcoal/70 max-w-xl">
            Discover our collection of professional makeup courses.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Filter size={18} /> Category
                </h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === cat
                          ? 'bg-accent text-cream font-medium'
                          : 'text-charcoal hover:bg-beige'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            <p className="text-small text-charcoal/60 mb-8">
              Showing {filtered.length} course{filtered.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <div className="card card-hover overflow-hidden h-full flex flex-col">
                    <div className="relative w-full h-56 bg-beige overflow-hidden group">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-accent text-cream px-3 py-1 rounded-full text-small font-medium">
                        {course.level}
                      </div>
                    </div>

                    <div className="flex-1 p-6 flex flex-col">
                      <p className="text-accent text-small font-medium mb-2">{course.category}</p>
                      <h3 className="font-serif text-subheading text-near-black mb-3 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-charcoal/60 text-body mb-4 line-clamp-2">
                        {course.description}
                      </p>
                      <p className="text-small text-charcoal/60 mb-4">
                        by <span className="font-medium">{course.instructor}</span>
                      </p>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < Math.floor(course.rating) ? 'fill-accent text-accent' : 'text-beige'}
                            />
                          ))}
                        </div>
                        <span className="text-small text-charcoal/60">
                          {course.rating}
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-small text-charcoal/60 mb-4 mt-auto">
                        <span>{course.duration}</span>
                        <span>{course.lessons} lessons</span>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-beige">
                        <span className="font-serif text-lg font-semibold text-accent">
                          ${course.price}
                        </span>
                        <span className="text-accent font-medium text-small hover:underline">
                          View →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
