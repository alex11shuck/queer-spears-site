import { EmailSignupForm } from "@/components/email-signup-form"
import { ProductCard } from "@/components/product-card"
import { BrandStory } from "@/components/brand-story"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-display text-xl md:text-2xl">Queer Spears</span>
        </div>
        <nav>
          <a href="#products" className="font-medium hover:text-primary transition-colors">
            Products
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-white">
            <h1 className="font-display text-4xl md:text-6xl mb-4">Pickles With Personality</h1>
            <p className="text-xl md:text-2xl mb-8 font-medium">
              Get ready to get brined. Queer Spears is coming soon.
            </p>
            <EmailSignupForm buttonText="Get First Dibs" />
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src="/images/website-hero.jpg"
                alt="Queer Spears Product Lineup"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Sparkles className="absolute -top-4 -right-4 text-yellow-300 w-10 h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section id="products" className="py-16 md:py-24 bg-[#f5f0e5]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl text-center mb-12">Meet The Crew</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              name="Sassy Spears"
              flavor="Sassy Pickles"
              description="The attitude pickle. Crunchy, loud, and full of flair. Great for sandwich drama or diva-level snacking."
              imageSrc="/images/sassyspears.jpg"
              bgColor="bg-[#f5f0e5]"
            />
            <ProductCard
              name="Rim Reaper"
              flavor="Spicy Pickles"
              description="Scary hot. A five-alarm chili blast. Painful, addictive, and not for the faint of heart."
              imageSrc="/images/rimreaper.jpg"
              bgColor="bg-[#f5f0e5]"
            />
            <ProductCard
              name="Leather Daddy Dills"
              flavor="Dill Pickles"
              description="Brined to dominate. Thick-cut dill spears with a salty bite. Crunch like you mean it."
              imageSrc="/images/leatherdaddy.jpg"
              bgColor="bg-[#f5f0e5]"
            />
            <ProductCard
              name="Sugar Tits"
              flavor="Sweet Pickles"
              description="Sweet. Dirty. Unapologetic. Bread & butter with a twist. Sugar, spice, and everything risqué."
              imageSrc="/images/sugar.jpg"
              bgColor="bg-[#f5f0e5]"
            />
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <BrandStory />

      {/* Footer with CTA */}
      <Footer />
    </div>
  )
}
