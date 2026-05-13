"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MessageCircle, Shield, Zap, MapPin, CheckCircle } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"

export default function BreakdownRecoveryPage() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  const features = [
    {
      icon: Clock,
      title: "Rapid Response Times",
      description: "Typical arrival within 30-60 minutes across the West Midlands",
    },
    {
      icon: Shield,
      title: "Fully Insured Service",
      description: "Complete peace of mind with comprehensive insurance coverage",
    },
    {
      icon: Zap,
      title: "Any Vehicle, Any Time",
      description: "Cars, vans, motorcycles, and light commercial vehicles",
    },
  ]

  const services = [
    "Roadside breakdown recovery",
    "Motorway and dual carriageway recovery",
    "Car park and private land recovery",
    "Home start assistance",
    "Fuel drainage services",
    "Battery jump starts",
    "Wheel changes",
    "Lockout assistance",
    "Transport to garage of your choice",
    "Relay service for long-distance breakdowns",
  ]

  const coverageAreas = [
    "Birmingham", "Solihull", "Wolverhampton", "Coventry", "Dudley", "Walsall",
    "Redditch", "Bromsgrove", "Worcester", "Warwick", "Evesham", "Gloucester",
    "Stratford-upon-Avon", "Kidderminster", "Leamington Spa", "Alcester",
  ]

  return (
    <>
      <main className="min-h-screen">
        <Header />
        
        <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Available 24/7</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              24/7 Breakdown Recovery
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              When your vehicle breaks down, you need fast, reliable assistance. Our emergency breakdown
              recovery service operates around the clock, 365 days a year, providing professional roadside
              assistance whenever and wherever you need it across the West Midlands.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
              <div>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you&apos;re stranded on the motorway, stuck in a car park, or broken down outside your home,
                  our trained operators will reach you quickly and get you back on the road or safely transported
                  to your preferred destination or garage.
                </p>

                <div className="grid gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={() => setIsQuoteFormOpen(true)}>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get a Quote
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

              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Our Breakdown Services</h3>
                    <div className="grid gap-3">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Coverage Areas</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {coverageAreas.map((area, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-foreground text-sm">{area}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
