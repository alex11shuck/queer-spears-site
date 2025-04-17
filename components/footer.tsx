import { EmailSignupForm } from "./email-signup-form"
import { Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="font-display text-3xl mb-6">Get First Dibs</h2>
            <p className="mb-6">Sign up to be notified when Queer Spears launches and get special offers.</p>
            <EmailSignupForm buttonText="Sign Me Up" />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-display text-2xl mb-6">Follow Us</h3>
            <div className="flex gap-4 mb-8">
              <Link href="https://instagram.com/queerspears" className="hover:text-pink-300 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <p className="text-sm">@queerspears</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-purple-800 flex flex-col md:flex-row justify-between items-center">
          <p>Made with pride (and vinegar) in Westport, MA</p>
          <p className="text-sm mt-4 md:mt-0 italic">No cucumbers were harmed in the making of these jokes</p>
        </div>
      </div>
    </footer>
  )
}
