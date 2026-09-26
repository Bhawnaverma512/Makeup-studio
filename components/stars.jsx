import { Star } from 'lucide-react'

export default function Stars({ rating, size = 14 }) {
  return (
    <div className="flex gap-1" aria-label={`Rated ${rating} out of 5`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? 'fill-accent text-accent' : 'text-beige'}
        />
      ))}
    </div>
  )
}
