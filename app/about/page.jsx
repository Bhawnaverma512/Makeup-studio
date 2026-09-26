import Link from 'next/link'
import { Sparkles, Clock, Award, Users } from 'lucide-react'
import { stats } from '../../lib/data'

export const metadata = {
  title: 'About | Makeup Academy',
  description: 'Why Makeup Academy exists and how we teach.',
}

const values = [
  { icon: Sparkles, title: 'Real-world looks', text: 'Bridal, ceremonial, party and everyday looks taught exactly the way artists create them for clients.' },
  { icon: Clock, title: 'Learn at your pace', text: 'Short video lessons grouped into modules, with lifetime access so you can revisit them any time.' },
  { icon: Award, title: 'Certified', text: 'Finish every lesson in a course and earn a certificate of completion.' },
  { icon: Users, title: 'Expert instructors', text: 'Every course is led by a working makeup artist who specialises in that style.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal text-cream section-padding">
        <div className="container-custom text-center">
          <h1 className="font-serif text-display-lg md:text-display text-cream mb-6">About Makeup Academy</h1>
          <p className="text-lg text-cream/80 max-w-3xl mx-auto leading-relaxed">
            We're dedicated to elevating professional makeup education and empowering artists worldwide.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-heading-lg md:text-4xl text-near-black mb-8">Our Mission</h2>
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  Makeup Academy was founded with a simple vision: to make professional makeup education available to everyone. Aspiring artists shouldn't have to travel or spend years finding mentorship—they should have access to world-class instruction whenever and wherever they need it.
                </p>
                <p>
                  Our instructors are working makeup artists. Every course is designed around real-world application, preparing students for bridal, ceremonial, party and professional work.
                </p>
                <p>
                  Today, we support makeup artists at every stage of their journey—from complete beginners to established professionals refining their craft.
                </p>
              </div>
            </div>
            <img
              src="/images/8.jpg"
              alt="Makeup artist working with a client in the studio"
              className="block w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-ivory section-padding">
        <div className="container-custom">
          <h2 className="font-serif text-heading-lg md:text-4xl text-near-black mb-12 text-center">How We Teach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-8">
                <Icon size={28} className="text-accent mb-4" />
                <h3 className="font-serif text-subheading text-near-black mb-2">{title}</h3>
                <p className="text-charcoal/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl font-semibold text-accent mb-2">{stat.number}</div>
              <p className="text-charcoal/60 text-small">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-cream section-padding">
        <div className="container-custom text-center">
          <h2 className="font-serif text-display text-cream mb-4">Join Our Community</h2>
          <p className="text-lg text-cream/80 mb-8 max-w-2xl mx-auto">
            Start your journey with thousands of makeup artists already transforming their careers.
          </p>
          <Link href="/courses" className="btn btn-secondary">Explore Courses</Link>
        </div>
      </section>
    </>
  )
}
