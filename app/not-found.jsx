import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-custom py-32 text-center">
      <p className="text-accent font-medium mb-4">404</p>
      <h1 className="font-serif text-display text-near-black mb-4">Page not found</h1>
      <p className="text-charcoal/70 mb-10">The page you're looking for doesn't exist or has moved.</p>
      <Link href="/courses" className="btn btn-primary px-8">Browse courses</Link>
    </div>
  )
}
