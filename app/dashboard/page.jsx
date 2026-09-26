'use client'

import Link from 'next/link'
import { Play, CheckCircle2, BookOpen, Award } from 'lucide-react'
import { getCourse } from '../../lib/data'
import { useAcademy } from '../../lib/store'

const dateFormat = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' })

export default function Dashboard() {
  const enrolled = useAcademy((s) => s.enrolled)
  const completeLesson = useAcademy((s) => s.completeLesson)

  const mine = enrolled
    .map((e) => ({ ...e, course: getCourse(e.id) }))
    .filter((e) => e.course)
  const inProgress = mine.filter((e) => e.completedLessons < e.course.lessons)
  const completed = mine.filter((e) => e.completedLessons >= e.course.lessons)
  const lessonsDone = mine.reduce((sum, e) => sum + e.completedLessons, 0)

  return (
    <>
      <div className="bg-ivory border-b border-beige">
        <div className="container-custom py-12">
          <h1 className="font-serif text-display-lg md:text-display text-near-black mb-2">My Learning</h1>
          <p className="text-lg text-charcoal/70">Continue your makeup education journey</p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: 'In Progress', value: inProgress.length },
            { label: 'Completed', value: completed.length },
            { label: 'Lessons Watched', value: lessonsDone },
          ].map((s) => (
            <div key={s.label} className="card p-8">
              <p className="text-charcoal/60 text-small mb-2">{s.label}</p>
              <p className="font-serif text-4xl font-semibold text-accent">{s.value}</p>
            </div>
          ))}
        </div>

        {mine.length === 0 ? (
          <div className="card p-12 text-center">
            <BookOpen size={40} className="text-accent mx-auto mb-4" />
            <h2 className="font-serif text-heading text-near-black mb-2">You haven't enrolled in a course yet</h2>
            <p className="text-charcoal/60 mb-8">Pick a course and it will appear here so you can track your progress.</p>
            <Link href="/courses" className="btn btn-primary px-8">Browse courses</Link>
          </div>
        ) : (
          <>
            {inProgress.length > 0 && (
              <section className="mb-20">
                <h2 className="font-serif text-heading-lg text-near-black mb-8">Continue Learning</h2>
                <div className="space-y-6">
                  {inProgress.map(({ id, course, completedLessons }) => {
                    const progress = Math.round((completedLessons / course.lessons) * 100)
                    return (
                      <div key={id} className="card overflow-hidden">
                        <div className="flex flex-col sm:flex-row gap-6 p-6">
                          <Link href={`/courses/${id}`} className="w-full sm:w-28 flex-shrink-0">
                            <img src={course.image} alt="" className="w-full aspect-[2/3] object-cover rounded-md" />
                          </Link>
                          <div className="flex-1 flex flex-col justify-between gap-4">
                            <div>
                              <Link href={`/courses/${id}`} className="font-serif text-subheading text-near-black hover:text-accent">
                                {course.title}
                              </Link>
                              <p className="text-small text-charcoal/60 mb-4">by {course.instructor}</p>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-small font-medium text-charcoal">
                                  {completedLessons}/{course.lessons} Lessons
                                </span>
                                <span className="text-small text-charcoal/60">{progress}% Complete</span>
                              </div>
                              <div className="w-full bg-beige rounded-full h-2">
                                <div className="bg-accent h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
                              </div>
                            </div>
                            <button
                              onClick={() => completeLesson(id, course.lessons)}
                              className="btn btn-primary self-start flex items-center gap-2"
                            >
                              <Play size={18} /> {completedLessons === 0 ? 'Start' : 'Continue'}: lesson {completedLessons + 1}
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
            )}

            {completed.length > 0 && (
              <section>
                <h2 className="font-serif text-heading-lg text-near-black mb-8">Completed Courses</h2>
                <div className="space-y-6">
                  {completed.map(({ id, course, enrolledAt }) => (
                    <div key={id} className="card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 size={20} className="text-green-600" />
                          <h3 className="font-serif text-subheading text-near-black">{course.title}</h3>
                        </div>
                        <p className="text-small text-charcoal/60">Enrolled {dateFormat.format(new Date(enrolledAt))}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-small font-medium text-accent">
                        <Award size={18} /> Certificate earned
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </>
  )
}
