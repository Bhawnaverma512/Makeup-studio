import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-near-black text-cream mt-20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Makeup<span className="text-accent">.</span></h3>
            <p className="text-cream/70 text-small">Professional makeup education for artists worldwide.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-small text-cream/70">
              <li><Link href="#" className="hover:text-accent transition-colors">Bridal</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Editorial</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Special Effects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-small text-cream/70">
              <li><Link href="#" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-accent rounded-lg transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 hover:bg-accent rounded-lg transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 hover:bg-accent rounded-lg transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-small text-cream/60">
          <p>&copy; 2024 Makeup Academy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
