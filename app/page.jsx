import Link from 'next/link'
import { Star, ArrowRight, Play } from 'lucide-react'
import { courses, stats } from '../lib/data'

export default function Home() {
  const featuredCourses = courses.slice(0, 3)
  const instructors = [
    { id: 1, name: 'Sarah Mitchell', specialty: 'Bridal & Event Makeup', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop', rating: 4.9 },
    { id: 2, name: 'Marcus Chen', specialty: 'Editorial & Fashion', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', rating: 4.95 },
    { id: 3, name: 'Jessica Rodriguez', specialty: 'Contouring & Color', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop', rating: 4.8 },
    { id: 4, name: 'Alex Thompson', specialty: 'Special Effects', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop', rating: 4.93 },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block px-4 py-2 bg-accent/10 rounded-full">
              <p className="text-accent font-medium text-small">Welcome to Makeup Academy</p>
            </div>
            <h1 className="font-serif text-display-lg md:text-7xl leading-tight mb-6 text-near-black">
              Master the Art of <span className="text-accent">Professional Makeup</span>
            </h1>
            <p className="text-lg text-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Learn from award-winning makeup artists. Transform your skills with our premium curriculum designed for aspiring and professional artists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/courses" className="btn btn-primary px-8">
                Explore Courses <ArrowRight size={18} className="ml-2" />
              </Link>
              <button className="btn btn-outline px-8 flex items-center gap-2">
                <Play size={18} /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-near-black text-cream py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-2">
                  {stat.number}
                </div>
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
            <h2 className="font-serif text-heading-lg md:text-5xl text-near-black mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-charcoal/70 max-w-xl mx-auto">
              Start your makeup education journey with our most popular and highly-rated courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <div className="card card-hover overflow-hidden h-full flex flex-col">
                  <div className="relative w-full h-48 md:h-56 bg-beige overflow-hidden group">
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
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses" className="btn btn-outline px-8">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="bg-ivory section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-heading-lg md:text-5xl text-near-black mb-4">
              Learn From Industry Experts
            </h2>
            <p className="text-lg text-charcoal/70 max-w-xl mx-auto">
              Our instructors are award-winning makeup artists with decades of experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="text-center card card-hover bg-white">
                <div className="w-24 h-24 mx-auto -mt-12 mb-4 rounded-full overflow-hidden border-4 border-cream">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-subheading text-near-black mb-1">
                  {instructor.name}
                </h3>
                <p className="text-accent text-small font-medium mb-3">
                  {instructor.specialty}
                </p>
                <div className="flex justify-center gap-4 text-small text-charcoal/60">
                  <span className="flex items-center gap-1">
                    <Star size={14} className="fill-accent text-accent" />
                    {instructor.rating}
                  </span>
                </div>
              </div>
            ))}
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
