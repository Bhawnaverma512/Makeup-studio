export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal text-cream section-padding">
        <div className="container-custom text-center">
          <h1 className="font-serif text-display-lg md:text-display text-cream mb-6">
            About Makeup Academy
          </h1>
          <p className="text-lg text-cream/80 max-w-3xl mx-auto leading-relaxed">
            We're dedicated to elevating professional makeup education and empowering artists worldwide.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-heading-lg md:text-4xl text-near-black mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
              <p>
                Makeup Academy was founded with a simple vision: to democratize access to professional makeup education. We believed that aspiring makeup artists shouldn't have to travel or spend years finding mentorship—they should have access to world-class instruction whenever and wherever they need it.
              </p>
              <p>
                Our platform brings together award-winning makeup artists, educators, and industry professionals to create a curriculum that's both comprehensive and practical. Every course is designed with real-world application in mind, preparing students for successful careers in bridal, editorial, film, special effects, and beyond.
              </p>
              <p>
                Today, we're proud to support thousands of makeup artists at every stage of their journey—from complete beginners to established professionals refining their craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream section-padding">
        <div className="container-custom text-center">
          <h2 className="font-serif text-display text-cream mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-cream/80 mb-8 max-w-2xl mx-auto">
            Start your journey with thousands of makeup artists already transforming their careers.
          </p>
          <a href="/courses" className="btn btn-secondary">
            Explore Courses
          </a>
        </div>
      </section>
    </>
  )
}
