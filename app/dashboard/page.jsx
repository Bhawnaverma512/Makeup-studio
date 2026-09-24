import Link from 'next/link'
import { Settings, Download, Play, CheckCircle2 } from 'lucide-react'

export default function Dashboard() {
  return (
    <>
      <div className="bg-ivory border-b border-beige">
        <div className="container-custom py-12 flex justify-between items-center">
          <div>
            <h1 className="font-serif text-display-lg md:text-display text-near-black mb-2">
              Welcome Back
            </h1>
            <p className="text-lg text-charcoal/70">
              Continue your makeup education journey
            </p>
          </div>
          <button className="btn btn-outline py-2 px-4 hidden md:block">
            <Settings size={18} className="mr-2" /> Settings
          </button>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="card p-8">
            <p className="text-charcoal/60 text-small mb-2">In Progress</p>
            <p className="font-serif text-4xl font-semibold text-accent">2</p>
          </div>
          <div className="card p-8">
            <p className="text-charcoal/60 text-small mb-2">Completed</p>
            <p className="font-serif text-4xl font-semibold text-accent">1</p>
          </div>
          <div className="card p-8">
            <p className="text-charcoal/60 text-small mb-2">Learning Hours</p>
            <p className="font-serif text-4xl font-semibold text-accent">18.5</p>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="font-serif text-heading-lg text-near-black mb-8">
            Continue Learning
          </h2>
          <div className="space-y-6">
            {[
              { id: 1, title: 'Bridal Makeup Mastery', progress: 65, lessons: '16/24' },
              { id: 3, title: 'Corrective & Contouring', progress: 42, lessons: '7/16' },
            ].map((course) => (
              <div key={course.id} className="card card-hover overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                  <div className="md:col-span-2">
                    <h3 className="font-serif text-subheading text-near-black mb-2">
                      {course.title}
                    </h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-small font-medium text-charcoal">
                        {course.lessons} Lessons
                      </span>
                      <span className="text-small text-charcoal/60">
                        {course.progress}% Complete
                      </span>
                    </div>
                    <div className="w-full bg-beige rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div></div>
                    <button className="btn btn-primary w-full flex items-center justify-center gap-2">
                      <Play size={18} /> Continue
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-heading-lg text-near-black mb-8">
            Completed Courses
          </h2>
          <div className="card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
              <div className="md:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={20} className="text-green-600" />
                    <h3 className="font-serif text-subheading text-near-black">
                      Color Theory & Skin Tones
                    </h3>
                  </div>
                </div>
                <p className="text-small text-charcoal/60">
                  Completed on Aug 15, 2024
                </p>
              </div>
              <div className="md:col-span-2 flex flex-col justify-between items-end">
                <span className="text-2xl font-serif font-semibold text-accent">
                  A+
                </span>
                <button className="btn btn-outline text-sm py-2 px-4 flex items-center gap-2">
                  <Download size={16} /> Certificate
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
