import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Star, Clock, Users, Award, Check, PlayCircle } from 'lucide-react'
import CourseActions from '../../../components/course-actions'
import CourseCard from '../../../components/course-card'
import Avatar from '../../../components/avatar'
import { courses, getCourse, getInstructor } from '../../../lib/data'

export function generateStaticParams() {
  return courses.map((c) => ({ id: String(c.id) }))
}

export function generateMetadata({ params }) {
  const course = getCourse(params.id)
  if (!course) return {}
  return { title: `${course.title} | Makeup Academy`, description: course.description }
}

export default function CourseDetail({ params }) {
  const course = getCourse(params.id)
  if (!course) notFound()

  const instructor = getInstructor(course.instructor)
  const lessonsPerModule = Math.round(course.lessons / course.modules.length)
  const related = courses.filter((c) => c.id !== course.id && c.category === course.category)
  const more = related.length ? related : courses.filter((c) => c.id !== course.id && c.level === course.level)

  return (
    <>
      <section className="bg-gradient-to-br from-near-black via-charcoal to-near-black text-cream relative overflow-hidden pt-16 pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href={`/courses?category=${encodeURIComponent(course.category)}`} className="text-accent text-small font-medium hover:underline">
                ← {course.category} courses
              </Link>
              <div className="flex flex-wrap gap-3 mt-6 mb-6">
                <span className="px-4 py-2 bg-accent/20 rounded-full text-accent font-medium text-small">{course.level} Level</span>
                <span className="px-4 py-2 bg-cream/10 rounded-full text-cream/80 text-small">by {course.instructor}</span>
              </div>
              <h1 className="font-serif text-display-lg md:text-5xl leading-tight mb-4">{course.title}</h1>
              <p className="text-lg text-cream/80 mb-8 leading-relaxed">{course.description}</p>
              <p className="font-serif text-4xl font-semibold text-accent mb-8">${course.price}</p>
              <CourseActions courseId={course.id} variant="dark" />
            </div>
            <div className="mx-auto w-full max-w-md">
              {/* Show the whole collage: natural height, no cropping. */}
              <img src={course.image} alt={course.title} className="block w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream -mt-10 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: 'Duration', value: course.duration },
              { icon: Award, label: 'Lessons', value: course.lessons },
              { icon: Users, label: 'Students', value: course.students },
              { icon: Star, label: 'Rating', value: course.rating, fill: true },
            ].map(({ icon: Icon, label, value, fill }) => (
              <div key={label} className="card p-6 text-center">
                <Icon size={24} className={`text-accent mx-auto mb-3 ${fill ? 'fill-accent' : ''}`} />
                <p className="text-small text-charcoal/60">{label}</p>
                <p className="font-serif text-lg font-semibold text-near-black">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="font-serif text-heading-lg text-near-black mb-8">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {course.outcomes.map((item) => (
                  <div key={item} className="flex gap-4">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-heading-lg text-near-black mb-2">Course Curriculum</h2>
              <p className="text-charcoal/60 mb-8">
                {course.modules.length} modules · {course.lessons} lessons · {course.duration}
              </p>
              <div className="space-y-3">
                {course.modules.map((title, i) => (
                  <div key={title} className="card p-6 flex items-center justify-between gap-4 hover:bg-ivory transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <PlayCircle size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-small text-charcoal/50">Module {i + 1}</p>
                        <h4 className="font-medium text-charcoal">{title}</h4>
                      </div>
                    </div>
                    <span className="text-small text-charcoal/60 whitespace-nowrap">{lessonsPerModule} lessons</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-heading-lg text-near-black mb-8">About Your Instructor</h2>
              <div className="card p-8 flex flex-col sm:flex-row gap-6 items-start">
                <Avatar name={course.instructor} className="w-20 h-20 text-2xl flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-subheading text-near-black mb-1">{course.instructor}</h3>
                  <p className="text-accent font-medium mb-3">{instructor?.specialty}</p>
                  <p className="text-charcoal/70 mb-4">{instructor?.bio}</p>
                  <Link href="/instructors" className="text-accent font-medium text-small hover:underline">
                    See all instructors →
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="card p-8">
                <div className="mb-6">
                  <p className="text-charcoal/60 text-small mb-2">Course Price</p>
                  <div className="font-serif text-4xl font-semibold text-accent mb-1">${course.price}</div>
                  <p className="text-small text-charcoal/60">Lifetime access</p>
                </div>

                <CourseActions courseId={course.id} />

                <div className="border-t border-beige mt-6 pt-6">
                  <p className="text-small text-charcoal/60 mb-4">This course includes:</p>
                  <ul className="space-y-3 text-small text-charcoal">
                    {[`${course.lessons} video lessons`, `${course.modules.length} step-by-step modules`, 'Certificate of completion', 'Lifetime access'].map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {more.length > 0 && (
        <section className="bg-ivory section-padding">
          <div className="container-custom">
            <h2 className="font-serif text-heading-lg md:text-4xl text-near-black mb-10">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {more.slice(0, 3).map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
