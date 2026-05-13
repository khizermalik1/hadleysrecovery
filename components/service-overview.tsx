import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, AlertTriangle, Car, Wrench, ArrowRight } from "lucide-react"

export function ServiceOverview() {
  const services = [
    {
      icon: AlertTriangle,
      title: "24/7 Breakdown Recovery",
      description: "Emergency roadside assistance whenever you need it, day or night.",
      href: "/services/breakdown-recovery",
    },
    {
      icon: Car,
      title: "Accident Recovery",
      description: "Safe, professional recovery after collisions with full insurer coordination.",
      href: "/services/accident-recovery",
    },
    {
      icon: Truck,
      title: "Vehicle Transport",
      description: "Local and long-distance vehicle transport for any requirement.",
      href: "/services/vehicle-transport",
    },
    {
      icon: Wrench,
      title: "Specialist Transport",
      description: "Motorcycles, prestige cars, classics, and low-clearance vehicles.",
      href: "/services/specialist-transport",
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional vehicle recovery and transport services across Birmingham and the West Midlands.
            Our experienced team is ready to assist you 24 hours a day, 7 days a week.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="block group">
              <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
