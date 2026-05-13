"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, MessageCircle } from "lucide-react"
import { QuoteForm } from "./quote-form"

export function HeroSection() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <>
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary rounded-full" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-primary/50 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">24/7 Emergency Recovery Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="text-primary">Hadleys Recovery</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              Vehicle Transport & Breakdown Recovery Specialists
            </p>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Trusted breakdown recovery, accident recovery, and vehicle transport services across Birmingham and the West Midlands.
              Fast response times, competitive prices, and reliable service you can count on.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => setIsQuoteFormOpen(true)} className="w-full sm:w-auto text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto text-lg px-8 py-6 bg-[#25D366] border-[#25D366] text-white hover:bg-[#128C7E] hover:border-[#128C7E] hover:text-white"
              >
                <a href="https://wa.me/447404387679" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </>
  )
}
