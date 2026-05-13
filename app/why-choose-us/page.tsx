import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Award, PoundSterling, MapPin, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: Clock,
      title: "Rapid Response Times",
      description: "Our strategically located fleet ensures we reach you quickly. Typical response times of 30-60 minutes across the West Midlands. When you are stranded at the roadside, every minute counts and we understand the urgency of your situation.",
    },
    {
      icon: Users,
      title: "Experienced Operators",
      description: "All our recovery operators are fully trained and experienced with years of hands-on experience. We handle every vehicle with care and professionalism, treating your vehicle as if it were our own.",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete peace of mind with comprehensive insurance coverage for every vehicle we recover or transport. You can rest assured that your vehicle is protected throughout the entire process.",
    },
    {
      icon: Award,
      title: "Modern Equipment",
      description: "Our fleet features modern recovery vehicles with the latest equipment to handle any situation safely. From flatbed trucks to specialist recovery equipment, we have the right tools for every job.",
    },
    {
      icon: PoundSterling,
      title: "Competitive Pricing",
      description: "Transparent, competitive pricing with no hidden fees. We provide instant quotes so you know exactly what to expect before we even arrive. No nasty surprises on your invoice.",
    },
    {
      icon: MapPin,
      title: "Extensive Coverage",
      description: "Serving the entire West Midlands including Birmingham, Redditch, Bromsgrove, Worcester, Warwick, Evesham, Gloucester, Wolverhampton, Coventry, and all surrounding areas.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Why Choose <span className="text-primary">Hadleys Recovery</span>?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When you need vehicle recovery or transport, you want a company you can trust. Here&apos;s why
              thousands of customers across the West Midlands choose us for their recovery and transport needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reasons.map((reason, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="p-6 lg:p-8 rounded-2xl bg-secondary/50 border border-border mb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Emergency Availability</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">30min</div>
                <div className="text-muted-foreground">Average Response</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Vehicles Recovered</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">Contact us today for a free, no-obligation quote</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                <a href="https://wa.me/447404387679" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Us Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
