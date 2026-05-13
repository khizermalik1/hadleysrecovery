import Link from "next/link"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export function Footer() {
  const services = [
    { name: "24/7 Breakdown Recovery", href: "/services/breakdown-recovery" },
    { name: "Accident Recovery", href: "/services/accident-recovery" },
    { name: "Vehicle Transport", href: "/services/vehicle-transport" },
    { name: "Specialist Transport", href: "/services/specialist-transport" },
  ]

  const quickLinks = [
    { name: "Gallery", href: "/gallery" },
    { name: "Customer Reviews", href: "/testimonials" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Get a Quote", href: "https://wa.me/447404387679" },
  ]

  const coverageAreas = [
    "Birmingham",
    "Solihull",
    "Wolverhampton",
    "Coventry",
    "Dudley",
    "Walsall",
    "West Bromwich",
    "Redditch",
    "Bromsgrove",
    "Worcester",
  ]

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">HR</span>
              </div>
              <span className="font-bold text-lg text-foreground">Hadleys Recovery</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Professional vehicle recovery and transport services across Birmingham and the West Midlands.
              Available 24/7 for all your recovery needs.
            </p>
            <div className="space-y-3">
              <a href="tel:07404387679" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                07404 387679
              </a>
              <a
                href="https://wa.me/447404387679"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-foreground mb-4 mt-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Coverage Areas</h3>
            <ul className="space-y-3">
              {coverageAreas.map((area, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-3 h-3 text-primary shrink-0" />
                  {area}
                </li>
              ))}
              <li className="text-muted-foreground text-sm pt-2">+ All surrounding areas</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium">Emergency Recovery</p>
                  <p className="text-muted-foreground">24 hours, 7 days a week</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium">Transport Enquiries</p>
                  <p className="text-muted-foreground">Mon-Fri: 8am-6pm</p>
                  <p className="text-muted-foreground">Sat: 9am-4pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hadleys Recovery. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
