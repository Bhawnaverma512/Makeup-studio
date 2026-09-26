import Link from 'next/link'
import { Star, ArrowRight, Users } from 'lucide-react'
import CourseCard from '../components/course-card'
import Avatar from '../components/avatar'
import { courses, instructors, stats } from '../lib/data'

export default function Home() {
  const featuredCourses = [...courses].sort((a, b) => b.students - a.students).slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-block px-4 py-2 bg-accent/10 rounded-full">
                <p className="text-accent font-medium text-small">Welcome to Makeup Academy</p>
              </div>
              <h1 className="font-serif text-display-lg md:text-7xl leading-tight mb-6 text-near-black">
                Master the Art of <span className="text-accent">Professional Makeup</span>
              </h1>
              <p className="text-lg text-charcoal/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Learn from award-winning makeup artists. Transform your skills with our premium curriculum designed for aspiring and professional artists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link href="/courses" className="btn btn-primary px-8">
                  Explore Courses <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link href="/instructors" className="btn btn-outline px-8 flex items-center gap-2">
                  <Users size={18} /> Meet the Instructors
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/8.jpg"
                alt="Makeup artist applying bridal makeup in a studio"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-near-black text-cream py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-2">{stat.number}</div>
                <p className="text-cream/70 text-small">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-heading-lg md:text-5xl text-near-black mb-4">Featured Courses</h2>
            <p className="text-lg text-charcoal/70 max-w-xl mx-auto">
              Start your makeup education journey with our most popular and highly-rated courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses" className="btn btn-outline px-8">
              View All {courses.length} Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="bg-ivory section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-serif text-heading-lg md:text-5xl text-near-black mb-4">Learn From Industry Experts</h2>
            <p className="text-lg text-charcoal/70 max-w-xl mx-auto">
              Our instructors are working makeup artists who teach the looks they create for real clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {instructors.slice(0, 4).map((instructor) => (
              <Link key={instructor.name} href="/instructors" className="text-center card card-hover overflow-visible bg-white pb-6 px-4">
                <Avatar name={instructor.name} className="w-24 h-24 text-3xl mx-auto -mt-12 mb-4 border-4 border-cream" />
                <h3 className="font-serif text-subheading text-near-black mb-1">{instructor.name}</h3>
                <p className="text-accent text-small font-medium mb-3">{instructor.specialty}</p>
                <div className="flex justify-center gap-1 text-small text-charcoal/60">
                  <Star size={14} className="fill-accent text-accent" />
                  {instructor.rating}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/instructors" className="btn btn-outline px-8">
              Meet All Instructors
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal text-cream section-padding">
        <div className="container-custom text-center">
          <h2 className="font-serif text-display-lg md:text-display text-cream mb-6">
            Ready to Transform Your <span className="text-accent">Makeup Skills?</span>
          </h2>
          <p className="text-lg text-cream/80 mb-8 max-w-2xl mx-auto">
            Join thousands of makeup artists who have already elevated their careers through our professional education platform.
          </p>
          <Link href="/courses" className="inline-block btn btn-secondary px-8">
            Start Learning Today
          </Link>
        </div>
      </section>
    </>
  )
}
