export const courses = [
  {
    id: 1,
    title: 'Traditional Bridal Makeup Mastery',
    instructor: 'Sarah Mitchell',
    level: 'Intermediate',
    duration: '6 weeks',
    students: 342,
    rating: 4.9,
    price: 199,
    image: '/images/1.jpg',
    category: 'Bridal',
    description: 'Master traditional bridal makeup with warm gold tones, perfect eyebrows, and timeless elegance for your special day.',
    lessons: 24,
    modules: [
      'Bridal consultation & skin prep',
      'Long-wear base and colour correction',
      'Warm gold & bronze eye looks',
      'Defined brows and lash application',
      'Bridal lips, blush and highlight',
      'Setting for 12+ hour wear & final look',
    ],
    outcomes: [
      'Plan a bridal look around outfit and jewellery',
      'Build a flawless, long-wearing base',
      'Blend warm gold and bronze eye shadow',
      'Shape brows and apply lashes',
      'Choose lip and blush shades that photograph well',
      'Set makeup to last through the whole ceremony',
    ],
  },
  {
    id: 2,
    title: 'Haldi Ceremony Makeup',
    instructor: 'Priya Sharma',
    level: 'Beginner',
    duration: '3 weeks',
    students: 428,
    rating: 4.95,
    price: 149,
    image: '/images/2.jpg',
    category: 'Ceremonial',
    description: 'Learn fresh, radiant makeup for Haldi ceremonies with golden undertones and natural glow.',
    lessons: 12,
    modules: [
      'Skin prep for a dewy, natural finish',
      'Sheer base, flushed cheeks and golden glow',
      'Soft eyes, glossy lips and floral styling',
    ],
    outcomes: [
      'Create a fresh, dewy base',
      'Use golden highlight for a natural glow',
      'Apply soft, flushed cheek colour',
      'Match makeup to yellow Haldi outfits',
      'Choose products that survive turmeric paste',
      'Finish the look with glossy lips',
    ],
  },
  {
    id: 3,
    title: 'Mehndi Makeup Magic',
    instructor: 'Jessica Rodriguez',
    level: 'Intermediate',
    duration: '4 weeks',
    students: 521,
    rating: 4.8,
    price: 169,
    image: '/images/3.jpg',
    category: 'Ceremonial',
    description: 'Create elegant and glowy mehndi makeup looks with sophisticated color palettes and modern techniques.',
    lessons: 16,
    modules: [
      'Colour palettes for mehndi outfits',
      'Glowing base and soft sculpting',
      'Green, gold and jewel-tone eyes',
      'Lips, finishing and photo-ready touches',
    ],
    outcomes: [
      'Pick colours that complement mehndi outfits',
      'Sculpt the face with soft contour',
      'Work confidently with jewel-tone shadows',
      'Balance bold eyes with soft lips',
      'Keep skin glowing, not greasy',
      'Make the look camera-ready',
    ],
  },
  {
    id: 4,
    title: 'Evening & Party Makeup',
    instructor: 'Alex Thompson',
    level: 'Intermediate',
    duration: '5 weeks',
    students: 356,
    rating: 4.93,
    price: 179,
    image: '/images/4.jpg',
    category: 'Party',
    description: 'Master glamorous evening makeup with smokey eyes, bold lips, and showstopping looks for special events.',
    lessons: 20,
    modules: [
      'Full-coverage base for night light',
      'Classic and coloured smokey eyes',
      'Cut crease and glitter placement',
      'Bold lips that stay put',
      'Contour, highlight and setting',
    ],
    outcomes: [
      'Build a base that looks great under night lighting',
      'Blend a classic smokey eye',
      'Create a sharp cut crease',
      'Apply glitter without fallout',
      'Wear bold lip colours cleanly',
      'Sculpt with contour and highlight',
    ],
  },
  {
    id: 5,
    title: 'Bridal Elegance & Romance',
    instructor: 'Emma Williams',
    level: 'Advanced',
    duration: '7 weeks',
    students: 289,
    rating: 4.87,
    price: 229,
    image: '/images/5.jpg',
    category: 'Bridal',
    description: 'Timeless bridal looks with rose and mauve tones, perfect for creating your most elegant wedding day makeup.',
    lessons: 28,
    modules: [
      'Understanding undertones and bridal palettes',
      'Luminous skin and advanced colour correction',
      'Rose and mauve eye looks',
      'Soft-focus brows and lashes',
      'Romantic lips and cheek draping',
      'Makeup for photography and video',
      'Trials, timelines and working with brides',
    ],
    outcomes: [
      'Match rose and mauve tones to any undertone',
      'Create luminous, soft-focus skin',
      'Master cheek draping',
      'Adapt looks for photography and video',
      'Run a professional bridal trial',
      'Plan a wedding-day makeup timeline',
    ],
  },
  {
    id: 6,
    title: 'Everyday Glam Made Simple',
    instructor: 'David Park',
    level: 'Beginner',
    duration: '3 weeks',
    students: 612,
    rating: 4.92,
    price: 99,
    image: '/images/6.jpg',
    category: 'Everyday',
    description: 'Soft, elegant everyday makeup with subtle glow and natural tones for work, brunch, and daily confidence.',
    lessons: 12,
    modules: [
      'Your everyday kit and skin prep',
      'Natural base, brows and a 5-minute eye',
      'Soft glow, lips and taking it from day to night',
    ],
    outcomes: [
      'Build a simple, effective everyday kit',
      'Apply a natural base in minutes',
      'Groom and fill brows',
      'Create a quick, polished eye look',
      'Add a soft, healthy glow',
      'Turn a day look into an evening look',
    ],
  },
  {
    id: 7,
    title: 'Professional Makeup Application',
    instructor: 'Victoria Lee',
    level: 'Advanced',
    duration: '8 weeks',
    students: 267,
    rating: 4.96,
    price: 249,
    image: '/images/7.jpg',
    category: 'Professional',
    description: 'Learn professional makeup application techniques used by makeup artists at events and photoshoots.',
    lessons: 32,
    modules: [
      'Hygiene, kit building and client consultation',
      'Face shapes, skin types and colour theory',
      'Base techniques for every skin tone',
      'Eyes: from natural to editorial',
      'Brows, lashes and lips',
      'Makeup for photoshoots and lighting',
      'Speed, timing and working at events',
      'Building your portfolio and business',
    ],
    outcomes: [
      'Work to professional hygiene standards',
      'Apply colour theory to any client',
      'Match foundation for every skin tone',
      'Adapt makeup for camera and lighting',
      'Work quickly under event pressure',
      'Build a portfolio that wins clients',
    ],
  },
]

const instructorProfiles = {
  'Sarah Mitchell': {
    specialty: 'Traditional Bridal',
    bio: 'Bridal artist specialising in warm, gold-toned traditional looks that last from ceremony to reception.',
  },
  'Priya Sharma': {
    specialty: 'Haldi & Ceremonial',
    bio: 'Known for fresh, radiant ceremony makeup with natural glow and golden undertones.',
  },
  'Jessica Rodriguez': {
    specialty: 'Mehndi & Colour',
    bio: 'Colour specialist who brings modern jewel-tone palettes to mehndi and festive looks.',
  },
  'Alex Thompson': {
    specialty: 'Evening & Party Glam',
    bio: 'Party and event artist known for smokey eyes, cut creases and bold, long-lasting lips.',
  },
  'Emma Williams': {
    specialty: 'Romantic Bridal',
    bio: 'Creates soft, romantic bridal looks in rose and mauve tones that work on camera and in person.',
  },
  'David Park': {
    specialty: 'Everyday Makeup',
    bio: 'Teaches simple, quick routines that make everyday makeup polished and effortless.',
  },
  'Victoria Lee': {
    specialty: 'Professional Artistry',
    bio: 'Working makeup artist for events and photoshoots who trains new artists to go pro.',
  },
}

export const instructors = Object.entries(instructorProfiles).map(([name, profile]) => {
  const taught = courses.filter((c) => c.instructor === name)
  return {
    name,
    ...profile,
    courses: taught,
    students: taught.reduce((sum, c) => sum + c.students, 0),
    rating: Math.max(...taught.map((c) => c.rating)),
  }
})

export const categories = [...new Set(courses.map((c) => c.category))]
export const levels = ['Beginner', 'Intermediate', 'Advanced']

export function getCourse(id) {
  return courses.find((c) => c.id === Number(id))
}

export function getInstructor(name) {
  return instructors.find((i) => i.name === name)
}

export const stats = [
  { number: `${courses.reduce((sum, c) => sum + c.students, 0).toLocaleString('en-US')}+`, label: 'Students Enrolled' },
  { number: `${courses.length}`, label: 'Professional Courses' },
  { number: `${courses.reduce((sum, c) => sum + c.lessons, 0)}`, label: 'Video Lessons' },
  { number: `${instructors.length}`, label: 'Expert Instructors' },
]

export const faqs = [
  {
    q: 'How do the courses work?',
    a: 'Every course is a set of online video lessons you can watch at your own pace. Lessons are grouped into modules so you build skills step by step.',
  },
  {
    q: 'How long do I have access?',
    a: 'Once you enrol you get lifetime access to the course.',
  },
  {
    q: 'Do I get a certificate?',
    a: 'Yes. Every course includes a certificate of completion once you have finished all lessons.',
  },
  {
    q: 'Which course should I start with?',
    a: 'If you are new to makeup, start with a Beginner course such as Everyday Glam Made Simple or Haldi Ceremony Makeup. Intermediate and Advanced courses assume you are comfortable with the basics.',
  },
  {
    q: 'What products do I need?',
    a: 'Each course starts with a kit lesson that explains what you need. You can follow along with the products you already own.',
  },
  {
    q: 'Can I save a course for later?',
    a: 'Yes. Tap the heart on any course to add it to your wishlist, and come back to it whenever you are ready.',
  },
]
