'use client'

import { Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Filter, Search, X } from 'lucide-react'
import CourseCard from '../../components/course-card'
import { courses, categories, levels } from '../../lib/data'

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div>
      <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
        <Filter size={18} /> {title}
      </h3>
      <div className="flex flex-wrap lg:flex-col gap-2">
        {['All', ...options].map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`lg:w-full text-left px-4 py-2 rounded-lg transition-all ${
              value === opt ? 'bg-accent text-cream font-medium' : 'text-charcoal hover:bg-beige'
            }`}
          >
            {opt}
            {opt !== 'All' && (
              <span className="opacity-60 ml-1 text-small">
                ({courses.filter((c) => c.category === opt || c.level === opt).length})
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function CourseList() {
  const router = useRouter()
  const params = useSearchParams()
  const category = categories.includes(params.get('category')) ? params.get('category') : 'All'
  const level = levels.includes(params.get('level')) ? params.get('level') : 'All'
  const query = params.get('q') ?? ''

  // Filters live in the URL so footer links like /courses?category=Bridal work and can be shared.
  function update(key, value) {
    const next = new URLSearchParams(params.toString())
    if (!value || value === 'All') next.delete(key)
    else next.set(key, value)
    const qs = next.toString()
    router.replace(qs ? `/courses?${qs}` : '/courses', { scroll: false })
  }

  const q = query.trim().toLowerCase()
  const filtered = courses.filter(
    (c) =>
      (category === 'All' || c.category === category) &&
      (level === 'All' || c.level === level) &&
      (!q || `${c.title} ${c.description} ${c.instructor}`.toLowerCase().includes(q)),
  )
  const anyFilter = category !== 'All' || level !== 'All' || q

  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 space-y-8">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
              <input
                type="search"
                value={query}
                onChange={(e) => update('q', e.target.value)}
                placeholder="Search courses"
                aria-label="Search courses"
                className="input pl-10 bg-white"
              />
            </div>
            <FilterGroup title="Category" options={categories} value={category} onChange={(v) => update('category', v)} />
            <FilterGroup title="Level" options={levels} value={level} onChange={(v) => update('level', v)} />
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-8">
            <p className="text-small text-charcoal/60">
              Showing {filtered.length} course{filtered.length !== 1 ? 's' : ''}
            </p>
            {anyFilter && (
              <button
                onClick={() => router.replace('/courses', { scroll: false })}
                className="text-small text-accent font-medium flex items-center gap-1 hover:underline"
              >
                <X size={14} /> Clear filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="card p-12 text-center">
              <p className="font-serif text-subheading text-near-black mb-2">No courses match your filters</p>
              <p className="text-charcoal/60">Try a different category, level or search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CoursesPage() {
  return (
    <>
      <div className="bg-ivory border-b border-beige">
        <div className="container-custom py-16">
          <h1 className="font-serif text-display-lg md:text-display text-near-black mb-4">All Courses</h1>
          <p className="text-lg text-charcoal/70 max-w-xl">Discover our collection of professional makeup courses.</p>
        </div>
      </div>
      <Suspense fallback={<div className="container-custom py-12 text-charcoal/60">Loading courses…</div>}>
        <CourseList />
      </Suspense>
    </>
  )
}
