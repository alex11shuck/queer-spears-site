import Image from "next/image"

export function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <Image
                src="/images/website-hero.jpg"
                alt="Queer Spears product lineup"
                width={500}
                height={400}
                className="rounded-lg shadow-lg brightness-95"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#f5f0e5] p-3 rounded-lg shadow-lg transform rotate-3">
                <div className="relative w-[100px] h-[100px]">
                  <Image src="/images/sassyspears.jpg" alt="Sassy Spears" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-display text-3xl md:text-5xl mb-6">Our Story</h2>
            <p className="text-lg">
              Queer Spears was born out of a love for brine and some COVID madness. We're the pickles your straight uncle can't
              stop staring at — and that's his problem. We believe flavor should be fabulous, packaging should be proud,
              and snacks should be as tasty as you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
