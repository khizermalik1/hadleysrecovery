"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react"
import { QuoteForm } from "./quote-form"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { name: "24/7 Breakdown Recovery", href: "/services/breakdown-recovery" },
    { name: "Accident Recovery", href: "/services/accident-recovery" },
    { name: "Vehicle Transport", href: "/services/vehicle-transport" },
    { name: "Specialist Transport", href: "/services/specialist-transport" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">HR</span>
              </div>
              <span className="font-bold text-lg text-foreground hidden sm:block">Hadleys Recovery</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[220px]">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Reviews
              </Link>
              <Link href="/why-choose-us" className="text-muted-foreground hover:text-foreground transition-colors">
                Why Choose Us
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button onClick={() => setIsQuoteFormOpen(true)} className="hidden sm:flex">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
              <button
                className="lg:hidden p-2 text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-2">
                <button
                  className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 flex flex-col gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-muted-foreground hover:text-foreground transition-colors py-2 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </Link>
                <Link
                  href="/why-choose-us"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Choose Us
                </Link>
                <Button onClick={() => { setIsQuoteFormOpen(true); setIsMenuOpen(false); }} className="w-full mt-2">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get a Quote
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </>
  )
}
