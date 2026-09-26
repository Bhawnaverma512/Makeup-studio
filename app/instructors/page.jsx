import Link from 'next/link'
import { Star, Users } from 'lucide-react'
import Avatar from '../../components/avatar'
import { instructors } from '../../lib/data'

export const metadata = {
  title: 'Instructors | Makeup Academy',
  description: 'Meet the professional makeup artists who teach at Makeup Academy.',
}

export default function InstructorsPage() {
  return (
    <>
      <div className="bg-ivory border-b border-beige">
        <div className="container-custom py-16">
          <h1 className="font-serif text-display-lg md:text-display text-near-black mb-4">Our Instructors</h1>
          <p className="text-lg text-charcoal/70 max-w-xl">
            Learn from working makeup artists who teach the looks they create for real clients.
          </p>
        </div>
      </div>

      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.name} className="card card-hover h-full flex flex-col p-8">
              <div className="flex items-center gap-4 mb-6">
                <Avatar name={instructor.name} className="w-16 h-16 text-xl flex-shrink-0" />
                <div>
                  <h2 className="font-serif text-subheading text-near-black">{instructor.name}</h2>
                  <p className="text-accent text-small font-medium">{instructor.specialty}</p>
                </div>
              </div>
              <p className="text-charcoal/70 mb-6">{instructor.bio}</p>

              <div className="mt-auto">
                <p className="text-small text-charcoal/50 mb-2">Teaches</p>
                <ul className="space-y-1 mb-6">
                  {instructor.courses.map((c) => (
                    <li key={c.id}>
                      <Link href={`/courses/${c.id}`} className="text-charcoal font-medium hover:text-accent">
                        {c.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center text-small text-charcoal/60 pt-4 border-t border-beige">
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {instructor.students.toLocaleString('en-US')} students
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={14} className="fill-accent text-accent" />
                    {instructor.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
