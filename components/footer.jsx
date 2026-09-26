import Link from 'next/link'
import { PhoneCall } from 'lucide-react'
import { categories, site } from '../lib/data'

export default function Footer() {
  return (
    <footer className="bg-near-black text-cream mt-20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Makeup<span className="text-accent">.</span></h3>
            <p className="text-cream/70 text-small mb-4">Professional makeup education for artists worldwide.</p>
            <a href={site.voiceAgentPhoneHref} className="flex items-center gap-2 text-small hover:text-accent transition-colors">
              <PhoneCall size={16} className="text-accent" />
              <span>
                <span className="block text-cream/60">24/7 voice agent</span>
                {site.voiceAgentPhone}
              </span>
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-small text-cream/70">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link href={`/courses?category=${encodeURIComponent(cat)}`} className="hover:text-accent transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Academy</h4>
            <ul className="space-y-2 text-small text-cream/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/instructors" className="hover:text-accent transition-colors">Instructors</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">My learning</h4>
            <ul className="space-y-2 text-small text-cream/70">
              <li><Link href="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link></li>
              <li><Link href="/track" className="hover:text-accent transition-colors">Track Order</Link></li>
              <li><Link href="/wishlist" className="hover:text-accent transition-colors">Wishlist</Link></li>
              <li><Link href="/cart" className="hover:text-accent transition-colors">Cart</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-small text-cream/60">
          <p>&copy; {new Date().getFullYear()} Makeup Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
