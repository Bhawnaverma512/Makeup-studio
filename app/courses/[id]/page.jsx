import { Star, Clock, Users, Award, Check, PlayCircle, Download } from 'lucide-react'
import { courses } from '../../../lib/data'

export default function CourseDetail({ params }) {
  const course = courses.find(c => c.id === parseInt(params.id))

  if (!course) {
    return <div className="container-custom py-20 text-center">Course not found</div>
  }

  return (
    <>
      <section className="bg-gradient-to-br from-near-black via-charcoal to-near-black text-cream relative overflow-hidden py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
                <span className="text-accent font-medium text-small">{course.level} Level</span>
              </div>
              <h1 className="font-serif text-display-lg md:text-5xl leading-tight mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-cream/80 mb-8 leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn btn-secondary px-8">Enroll Now</button>
                <button className="btn border border-cream text-cream hover:bg-cream/10 px-8">
                  Save for Later
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream -mt-10 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <Clock size={24} className="text-accent mx-auto mb-3" />
              <p className="text-small text-charcoal/60">Duration</p>
              <p className="font-serif text-lg font-semibold text-near-black">{course.duration}</p>
            </div>
            <div className="card p-6 text-center">
              <Award size={24} className="text-accent mx-auto mb-3" />
              <p className="text-small text-charcoal/60">Lessons</p>
              <p className="font-serif text-lg font-semibold text-near-black">{course.lessons}</p>
            </div>
            <div className="card p-6 text-center">
              <Users size={24} className="text-accent mx-auto mb-3" />
              <p className="text-small text-charcoal/60">Students</p>
              <p className="font-serif text-lg font-semibold text-near-black">{course.students}</p>
            </div>
            <div className="card p-6 text-center">
              <Star size={24} className="fill-accent text-accent mx-auto mb-3" />
              <p className="text-small text-charcoal/60">Rating</p>
              <p className="font-serif text-lg font-semibold text-near-black">{course.rating}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="font-serif text-heading-lg text-near-black mb-8">About Your Instructor</h2>
              <div className="card p-8">
                <h3 className="font-serif text-subheading text-near-black mb-2">
                  {course.instructor}
                </h3>
                <p className="text-accent font-medium mb-3">Professional Makeup Artist</p>
                <p className="text-charcoal/70">
                  Award-winning makeup artist with 15+ years of experience teaching and creating looks.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-heading-lg text-near-black mb-8">Course Curriculum</h2>
              <div className="space-y-3">
                {[...Array(course.lessons / 4)].map((_, i) => (
                  <div key={i} className="card p-6 flex items-center justify-between hover:bg-ivory transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <PlayCircle size={20} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal">Lesson {i + 1}</h4>
                        <p className="text-small text-charcoal/60">{20 + i * 5} min</p>
                      </div>
                    </div>
                    <Download size={18} className="text-charcoal/40 hover:text-accent transition-colors cursor-pointer" />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-heading-lg text-near-black mb-8">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Professional application techniques',
                  'Color theory and undertones',
                  'Working with different skin types',
                  'Product knowledge',
                  'Photography and lighting',
                  'Client consultation skills',
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="card p-8">
                <div className="mb-6">
                  <p className="text-charcoal/60 text-small mb-2">Course Price</p>
                  <div className="font-serif text-4xl font-semibold text-accent mb-1">
                    ${course.price}
                  </div>
                  <p className="text-small text-charcoal/60">Lifetime access</p>
                </div>

                <button className="w-full btn btn-primary mb-3">
                  Enroll Now
                </button>
                <button className="w-full btn btn-outline">
                  Add to Wishlist
                </button>

                <div className="border-t border-beige mt-6 pt-6">
                  <p className="text-small text-charcoal/60 mb-4">This course includes:</p>
                  <ul className="space-y-3 text-small text-charcoal">
                    <li className="flex gap-2">
                      <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{course.lessons} video lessons</span>
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>Downloadable resources</span>
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>Lifetime access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
