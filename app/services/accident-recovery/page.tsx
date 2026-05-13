"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Shield, FileText, Truck, Clock, CheckCircle } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"

export default function AccidentRecoveryPage() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  const features = [
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Quick arrival at accident scenes to secure your vehicle safely",
    },
    {
      icon: FileText,
      title: "Insurer Coordination",
      description: "We work directly with insurance companies to streamline the process",
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description: "Safe, secure storage facilities while claims are processed",
    },
    {
      icon: Truck,
      title: "Onward Transport",
      description: "Transport to approved repairers or your preferred garage",
    },
  ]

  const services = [
    "Recovery from collision scenes",
    "Liaising with police and emergency services",
    "Direct billing to insurance companies",
    "Secure compound storage",
    "Transport to approved bodyshops",
    "Multi-vehicle recovery capability",
    "Documentation and photographic evidence",
    "24/7 availability for accident callouts",
    "Vehicle salvage services",
    "Hazardous material cleanup coordination",
  ]

  return (
    <>
      <main className="min-h-screen">
        <Header />
        
        <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Accident Recovery
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              If you&apos;ve been involved in a road traffic accident, the last thing you need is additional stress.
              Our professional accident recovery service handles everything, from recovering your vehicle safely
              to coordinating with your insurance company.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
              <div>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We operate throughout the West Midlands, providing expert accident recovery in Birmingham, Redditch, Bromsgrove,
                  Worcester, Warwick, Evesham, Gloucester, and all surrounding areas. Our experienced operators are
                  trained to handle vehicles of all types and conditions, ensuring your car is recovered with care.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                      <feature.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground text-sm mb-1">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
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

              <Card className="bg-card border-border">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Our Accident Recovery Services Include:</h3>
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
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </>
  )
}
