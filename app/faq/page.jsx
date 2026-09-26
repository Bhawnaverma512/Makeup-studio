import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../lib/data'

export const metadata = {
  title: 'FAQ | Makeup Academy',
  description: 'Answers to common questions about Makeup Academy courses.',
}

export default function FaqPage() {
  return (
    <>
      <div className="bg-ivory border-b border-beige">
        <div className="container-custom py-16">
          <h1 className="font-serif text-display-lg md:text-display text-near-black mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-charcoal/70 max-w-xl">Everything you need to know before you start learning.</p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="card group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center gap-4 font-serif text-subheading text-near-black">
                {q}
                <ChevronDown size={20} className="text-accent flex-shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 text-charcoal/70 leading-relaxed">{a}</p>
            </details>
          ))}

          <div className="text-center pt-8">
            <Link href="/courses" className="btn btn-primary px-8">Browse courses</Link>
          </div>
        </div>
      </div>
    </>
  )
}
