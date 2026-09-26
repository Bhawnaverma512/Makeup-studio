'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { AlertCircle, CheckCircle2, PackageSearch, PhoneCall, Search } from 'lucide-react'
import { getCourse, site } from '../../lib/data'
import { ORDER_NUMBER_PATTERN, useAcademy } from '../../lib/store'

const dateFormat = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' })

function VoiceAgentLink({ className = '' }) {
  return (
    <a href={site.voiceAgentPhoneHref} className={`font-medium text-accent hover:underline whitespace-nowrap ${className}`}>
      {site.voiceAgentPhone}
    </a>
  )
}

function OrderCard({ order, enrolled, highlight }) {
  const items = order.courseIds.map(getCourse).filter(Boolean)
  return (
    <article className={`card p-6 sm:p-8 ${highlight ? 'border-accent' : ''}`}>
      <header className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <p className="text-small uppercase tracking-widest text-charcoal/50">Order</p>
          <h3 className="font-serif text-heading text-near-black">{order.number}</h3>
          <p className="text-small text-charcoal/60">Placed {dateFormat.format(new Date(order.createdAt))}</p>
        </div>
        <span className="rounded-full px-3 py-1 text-small font-medium bg-green-100 text-green-800">
          Confirmed · Access granted
        </span>
      </header>

      <ul className="divide-y divide-beige">
        {items.map((course) => {
          const progress = enrolled.find((e) => e.id === course.id)
          const done = progress?.completedLessons ?? 0
          return (
            <li key={course.id} className="flex items-center gap-4 py-3">
              <img src={course.image} alt="" className="w-12 aspect-[2/3] object-cover rounded" />
              <div className="flex-1 min-w-0">
                <Link href={`/courses/${course.id}`} className="font-medium text-charcoal hover:text-accent">
                  {course.title}
                </Link>
                <p className="text-small text-charcoal/60">
                  {done >= course.lessons ? 'Completed' : `${done}/${course.lessons} lessons watched`}
                </p>
              </div>
              <span className="text-charcoal">${course.price}</span>
            </li>
          )
        })}
        <li className="flex justify-between pt-3 font-semibold text-near-black">
          <span>Total</span>
          <span className="text-accent">${order.total}</span>
        </li>
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/dashboard" className="btn btn-primary py-2 px-4 text-sm">Go to my courses</Link>
        <a href={site.voiceAgentPhoneHref} className="btn btn-outline py-2 px-4 text-sm gap-2">
          <PhoneCall size={16} /> Call 24/7 voice agent: {site.voiceAgentPhone}
        </a>
      </div>
    </article>
  )
}

function TrackOrder() {
  const params = useSearchParams()
  const fromUrl = params.get('order') ?? ''
  const justPlaced = params.get('new') === '1'
  const orders = useAcademy((s) => s.orders)
  const enrolled = useAcademy((s) => s.enrolled)

  const [input, setInput] = useState(fromUrl)
  const [searched, setSearched] = useState(fromUrl)
  const [error, setError] = useState(null)

  useEffect(() => {
    setInput(fromUrl)
    setSearched(fromUrl)
  }, [fromUrl])

  function handleSubmit(e) {
    e.preventDefault()
    const value = input.trim().toUpperCase()
    if (!ORDER_NUMBER_PATTERN.test(value)) {
      setError('Enter your order number exactly as shown on your confirmation, e.g. MA-7K4P-M2XD.')
      return
    }
    setError(null)
    setInput(value)
    setSearched(value)
  }

  const result = searched ? orders.find((o) => o.number === searched) : null
  const others = orders.filter((o) => o.number !== result?.number)

  return (
    <section className="container-custom max-w-3xl py-16 space-y-10">
      {justPlaced && result && (
        <div className="card p-6 flex gap-3 border-green-200 bg-green-50">
          <CheckCircle2 className="text-green-600 flex-shrink-0" />
          <div>
            <p className="font-medium text-near-black">Thank you! Your enrolment is confirmed.</p>
            <p className="text-small text-charcoal/70">
              Keep your order number <span className="font-semibold">{result.number}</span> — you'll need it if you call us.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
        <label htmlFor="order-number" className="block font-medium text-charcoal mb-2">Order number</label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="order-number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="MA-7K4P-M2XD"
            autoComplete="off"
            spellCheck={false}
            className="input bg-white uppercase tracking-wider"
          />
          <button type="submit" className="btn btn-primary gap-2 whitespace-nowrap">
            <Search size={18} /> Track order
          </button>
        </div>
        {error && (
          <p role="alert" className="mt-4 flex gap-2 text-small text-red-600">
            <AlertCircle size={16} className="flex-shrink-0 mt-0.5" /> {error}
          </p>
        )}
        {searched && !result && !error && (
          <p role="alert" className="mt-4 flex gap-2 text-small text-red-600">
            <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
            <span>
              We couldn't find order {searched} on this device. Orders are saved in the browser you enrolled with — for help, call
              our 24/7 voice agent on <VoiceAgentLink />.
            </span>
          </p>
        )}
        <p className="mt-4 flex items-center gap-2 text-small text-charcoal/70">
          <PhoneCall size={16} className="text-accent flex-shrink-0" />
          <span>
            Prefer to call? Our 24/7 voice agent can check your order status: <VoiceAgentLink />
          </span>
        </p>
      </form>

      {result && <OrderCard order={result} enrolled={enrolled} highlight />}

      <div>
        <h2 className="font-serif text-heading-lg text-near-black mb-6">{result ? 'Other orders' : 'Your orders'}</h2>
        {others.length === 0 ? (
          <div className="card p-10 text-center">
            <PackageSearch size={36} className="text-accent mx-auto mb-3" />
            <p className="text-charcoal/70 mb-6">
              {result ? 'No other orders on this device.' : 'No orders on this device yet.'}
            </p>
            <Link href="/courses" className="btn btn-outline px-6">Browse courses</Link>
          </div>
        ) : (
          <div className="space-y-6">
            {others.map((order) => (
              <OrderCard key={order.number} order={order} enrolled={enrolled} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default function TrackPage() {
  return (
    <>
      <div className="bg-ivory border-b border-beige">
        <div className="container-custom py-16">
          <p className="text-accent font-medium text-small mb-2">Orders</p>
          <h1 className="font-serif text-display-lg md:text-display text-near-black mb-4">Track your order</h1>
          <p className="text-lg text-charcoal/70 max-w-xl">
            Enter the order number from your enrolment confirmation to see its status.
          </p>
        </div>
      </div>
      <Suspense fallback={<div className="container-custom py-16 text-charcoal/60">Loading…</div>}>
        <TrackOrder />
      </Suspense>
    </>
  )
}
