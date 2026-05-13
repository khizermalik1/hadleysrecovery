"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import { QuoteForm } from "./quote-form"

export function CallToAction() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <>
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Need Vehicle Recovery or Transport?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get an instant quote or speak directly with our team. We&apos;re available 24/7 for emergency
              breakdowns and during business hours for transport enquiries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" variant="secondary" onClick={() => setIsQuoteFormOpen(true)} className="w-full sm:w-auto text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get a Quote
              </Button>
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto text-lg px-8 py-6 bg-[#25D366] border-[#25D366] text-white hover:bg-[#128C7E] hover:border-[#128C7E]"
              >
                <a href="https://wa.me/447404387679" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Us on WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
              <ArrowRight className="w-4 h-4" />
              <span>Free quotes - No obligation - Competitive rates</span>
            </div>
          </div>
        </div>
      </section>

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </>
  )
}
