import { Star, Users } from 'lucide-react'

export default function InstructorsPage() {
  const instructors = [
    { id: 1, name: 'Sarah Mitchell', specialty: 'Bridal & Event', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop', students: 1200, rating: 4.9 },
    { id: 2, name: 'Marcus Chen', specialty: 'Editorial & Fashion', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', students: 950, rating: 4.95 },
    { id: 3, name: 'Jessica Rodriguez', specialty: 'Contouring & Color', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop', students: 1500, rating: 4.8 },
    { id: 4, name: 'Alex Thompson', specialty: 'Special Effects', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop', students: 650, rating: 4.93 },
  ]

  return (
    <>
      <div className="bg-ivory border-b border-beige">
        <div className="container-custom py-16">
          <h1 className="font-serif text-display-lg md:text-display text-near-black mb-4">
            Our Instructors
          </h1>
          <p className="text-lg text-charcoal/70 max-w-xl">
            Learn from award-winning makeup artists with decades of professional experience.
          </p>
        </div>
      </div>

      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="card card-hover h-full">
              <div className="aspect-square overflow-hidden bg-beige">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-subheading text-near-black mb-2">
                  {instructor.name}
                </h3>
                <p className="text-accent text-small font-medium mb-4">
                  {instructor.specialty}
                </p>
                <div className="flex justify-between items-center text-small text-charcoal/60 pt-4 border-t border-beige">
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {instructor.students}
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
