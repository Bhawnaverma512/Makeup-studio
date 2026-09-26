'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PhoneCall, ShoppingBag, Trash2 } from 'lucide-react'
import { getCourse, site } from '../../lib/data'
import { useAcademy } from '../../lib/store'

export default function CartPage() {
  const router = useRouter()
  const cart = useAcademy((s) => s.cart)
  const removeFromCart = useAcademy((s) => s.removeFromCart)
  const checkout = useAcademy((s) => s.checkout)

  const items = cart.map(getCourse).filter(Boolean)
  const total = items.reduce((sum, c) => sum + c.price, 0)

  return (
    <>
      <div className="bg-ivory border-b border-beige">
        <div className="container-custom py-12">
          <h1 className="font-serif text-display-lg md:text-display text-near-black mb-2">Your Cart</h1>
          <p className="text-lg text-charcoal/70">
            {items.length ? `${items.length} course${items.length > 1 ? 's' : ''} ready to enrol` : 'Your cart is empty'}
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {items.length === 0 ? (
          <div className="card p-12 text-center">
            <ShoppingBag size={40} className="text-accent mx-auto mb-4" />
            <h2 className="font-serif text-heading text-near-black mb-2">Nothing here yet</h2>
            <p className="text-charcoal/60 mb-8">Find a course you love and tap “Enroll Now”.</p>
            <Link href="/courses" className="btn btn-primary px-8">Browse courses</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ul className="lg:col-span-2 space-y-4">
              {items.map((course) => (
                <li key={course.id} className="card p-4 flex gap-4 items-center">
                  <Link href={`/courses/${course.id}`} className="w-20 flex-shrink-0">
                    <img src={course.image} alt="" className="w-full aspect-[2/3] object-cover rounded-md" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/courses/${course.id}`} className="font-serif text-subheading text-near-black hover:text-accent">
                      {course.title}
                    </Link>
                    <p className="text-small text-charcoal/60">
                      {course.instructor} · {course.lessons} lessons · {course.level}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-lg font-semibold text-accent">${course.price}</p>
                    <button
                      onClick={() => removeFromCart(course.id)}
                      className="text-small text-charcoal/50 hover:text-red-600 inline-flex items-center gap-1 mt-1"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="card p-8 h-fit lg:sticky lg:top-24">
              <h2 className="font-serif text-heading text-near-black mb-6">Summary</h2>
              <div className="flex justify-between text-charcoal mb-2">
                <span>Courses</span>
                <span>{items.length}</span>
              </div>
              <div className="flex justify-between font-semibold text-near-black text-lg border-t border-beige pt-4 mt-4 mb-6">
                <span>Total</span>
                <span className="text-accent font-serif text-2xl">${total}</span>
              </div>
              <button
                onClick={() => {
                  checkout()
                  router.push('/dashboard')
                }}
                className="w-full btn btn-primary"
              >
                Complete enrolment
              </button>
              <Link href="/courses" className="block text-center text-small text-accent mt-4 hover:underline">
                Continue browsing
              </Link>
              <p className="border-t border-beige mt-6 pt-6 text-small text-charcoal/70 flex gap-2">
                <PhoneCall size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span>
                  Need help enrolling? Call our 24/7 voice agent:{' '}
                  <a href={site.voiceAgentPhoneHref} className="font-medium text-accent hover:underline whitespace-nowrap">
                    {site.voiceAgentPhone}
                  </a>
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
