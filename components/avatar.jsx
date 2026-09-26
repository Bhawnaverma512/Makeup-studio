export default function Avatar({ name, className = 'w-24 h-24 text-3xl' }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <div
      aria-hidden="true"
      className={`rounded-full bg-gradient-to-br from-accent to-[#a8845a] text-cream font-serif font-semibold flex items-center justify-center ${className}`}
    >
      {initials}
    </div>
  )
}
