"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Bike, Car, Cog, ArrowDown, CheckCircle } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"

export default function SpecialistTransportPage() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  const specialistTypes = [
    {
      icon: Bike,
      title: "Motorcycle Transport",
      description: "Secure transport for motorcycles of all sizes, from scooters to touring bikes. Our specialist equipment ensures your bike arrives in perfect condition.",
      features: ["Wheel chocks and tie-downs", "Covered transport available", "Collection from any location"],
    },
    {
      icon: Car,
      title: "Prestige & Classic Cars",
      description: "Your prestige or classic vehicle deserves specialist care. We offer enclosed and covered transport options to protect your investment.",
      features: ["Enclosed trailer available", "Low-loading for ground clearance", "White glove service"],
    },
    {
      icon: ArrowDown,
      title: "Low-Clearance Vehicles",
      description: "Modified, lowered, or sports cars with minimal ground clearance require special handling. Our low-loading equipment makes transport simple.",
      features: ["Low-loading ramps", "Sports car specialists", "Careful handling"],
    },
    {
      icon: Cog,
      title: "Small Machinery",
      description: "Beyond vehicles, we also transport small machinery and equipment. If it needs moving safely, we can help.",
      features: ["Garden machinery", "Small plant equipment", "Agricultural vehicles"],
    },
  ]

  return (
    <>
      <main className="min-h-screen">
        <Header />
        
        <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Specialist Transport
            </h1>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Some vehicles need extra care. Our specialist transport services cater to motorcycles, prestige cars,
              classic vehicles, low-clearance vehicles, and small machinery. Available across Birmingham, Redditch, Bromsgrove,
              Worcester, Warwick, Evesham, Gloucester, and the wider West Midlands region.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {specialistTypes.map((type, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Have a specialist transport requirement? Get in touch to discuss your needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={() => setIsQuoteFormOpen(true)}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Discuss Your Requirements
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-[#25D366] border-[#25D366] text-white hover:bg-[#128C7E] hover:border-[#128C7E] hover:text-white"
                >
                  <a href="https://wa.me/447404387679" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </>
  )
}
