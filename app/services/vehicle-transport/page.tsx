"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin, Calendar, Truck, ArrowRight, CheckCircle } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"

export default function VehicleTransportPage() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  const transportTypes = [
    {
      title: "Local Transport",
      description: "Door-to-door vehicle transport within the West Midlands",
      areas: "Birmingham, Redditch, Bromsgrove, Worcester, Warwick, Evesham, Gloucester",
    },
    {
      title: "Long-Distance Transport",
      description: "Nationwide UK vehicle transport services",
      areas: "Any UK destination",
    },
    {
      title: "Dealership Transfers",
      description: "Reliable vehicle movements between dealerships",
      areas: "Trade-to-trade, auction pickups, fleet transfers",
    },
    {
      title: "Non-Running Vehicles",
      description: "Safe transport for vehicles that cannot be driven",
      areas: "Mechanical failures, project cars, damaged vehicles",
    },
  ]

  const services = [
    "Single vehicle transport",
    "Multi-vehicle transport",
    "Enclosed transport for prestige vehicles",
    "Same-day collection available",
    "Scheduled transport services",
    "eBay and online purchase collection",
    "Auction vehicle collection",
    "Private sales collection and delivery",
  ]

  return (
    <>
      <main className="min-h-screen">
        <Header />
        
        <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Vehicle Transport Services
            </h1>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Whether you need to move a vehicle across town or across the country, our professional car transport
              service provides safe, reliable transportation. We handle vehicles of all types, from everyday cars
              to prestige vehicles, with the same care and attention to detail.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {transportTypes.map((type, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Truck className="w-8 h-8 text-primary" />
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{type.areas}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <Card className="bg-card border-border">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Our Transport Services Include:</h3>
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

              <Card className="bg-secondary/50 border-border">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Book Your Vehicle Transport</h3>
                  <p className="text-muted-foreground mb-6">
                    Planning a vehicle move? We offer competitive rates for both scheduled and same-day transport.
                    Contact us with your requirements and we&apos;ll provide an instant quote.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button size="lg" onClick={() => setIsQuoteFormOpen(true)}>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Get Instant Quote
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="https://wa.me/447404387679" target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Transport
                      </a>
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-card">
                      <div className="text-3xl font-bold text-primary mb-1">30min</div>
                      <div className="text-sm text-muted-foreground">Typical Response</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card">
                      <div className="text-3xl font-bold text-primary mb-1">UK Wide</div>
                      <div className="text-sm text-muted-foreground">Coverage</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card">
                      <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Availability</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card">
                      <div className="text-3xl font-bold text-primary mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Insured</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </>
  )
}
