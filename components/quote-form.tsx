"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Send, MessageCircle } from "lucide-react"

interface QuoteFormProps {
  isOpen: boolean
  onClose: () => void
}

export function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    pickupPostcode: "",
    dropoffPostcode: "",
    vehicleMake: "",
    vehicleModel: "",
    transmission: "",
    runsAndDrives: "",
    hasDamage: "",
    damageLocation: "",
    wheelsIntact: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `*New Quote Request - Hadleys Recovery*

*Customer Details:*
Name: ${formData.name}
Contact Number: ${formData.contactNumber}

*Location:*
Pick Up Postcode: ${formData.pickupPostcode}
Drop Off Postcode: ${formData.dropoffPostcode}

*Vehicle Details:*
Make: ${formData.vehicleMake}
Model: ${formData.vehicleModel}
Transmission: ${formData.transmission}

*Vehicle Condition:*
Runs and Drives: ${formData.runsAndDrives}
Has Damage: ${formData.hasDamage}${formData.hasDamage === "Yes" ? `\nDamage Location: ${formData.damageLocation}` : ""}
All 4 Wheels Intact & Rolling Free: ${formData.wheelsIntact}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/447404387679?text=${encodedMessage}`
    
    window.open(whatsappUrl, "_blank")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-bold text-foreground">Get a Quote</CardTitle>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number *</Label>
              <Input
                id="contactNumber"
                type="tel"
                value={formData.contactNumber}
                onChange={(e) => handleChange("contactNumber", e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickupPostcode">Pick Up Postcode *</Label>
                <Input
                  id="pickupPostcode"
                  value={formData.pickupPostcode}
                  onChange={(e) => handleChange("pickupPostcode", e.target.value)}
                  placeholder="e.g. B1 1AA"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dropoffPostcode">Drop Off Postcode *</Label>
                <Input
                  id="dropoffPostcode"
                  value={formData.dropoffPostcode}
                  onChange={(e) => handleChange("dropoffPostcode", e.target.value)}
                  placeholder="e.g. B45 8RS"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vehicleMake">Vehicle Make *</Label>
                <Input
                  id="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={(e) => handleChange("vehicleMake", e.target.value)}
                  placeholder="e.g. Ford"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicleModel">Vehicle Model *</Label>
                <Input
                  id="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={(e) => handleChange("vehicleModel", e.target.value)}
                  placeholder="e.g. Focus"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Transmission *</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="transmission"
                    value="Manual"
                    checked={formData.transmission === "Manual"}
                    onChange={(e) => handleChange("transmission", e.target.value)}
                    className="w-4 h-4 text-primary"
                    required
                  />
                  <span className="text-foreground">Manual</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="transmission"
                    value="Automatic"
                    checked={formData.transmission === "Automatic"}
                    onChange={(e) => handleChange("transmission", e.target.value)}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="text-foreground">Automatic</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Does it run and drive? *</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="runsAndDrives"
                    value="Yes"
                    checked={formData.runsAndDrives === "Yes"}
                    onChange={(e) => handleChange("runsAndDrives", e.target.value)}
                    className="w-4 h-4 text-primary"
                    required
                  />
                  <span className="text-foreground">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="runsAndDrives"
                    value="No"
                    checked={formData.runsAndDrives === "No"}
                    onChange={(e) => handleChange("runsAndDrives", e.target.value)}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="text-foreground">No</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Is there any damage? *</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasDamage"
                    value="Yes"
                    checked={formData.hasDamage === "Yes"}
                    onChange={(e) => handleChange("hasDamage", e.target.value)}
                    className="w-4 h-4 text-primary"
                    required
                  />
                  <span className="text-foreground">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasDamage"
                    value="No"
                    checked={formData.hasDamage === "No"}
                    onChange={(e) => handleChange("hasDamage", e.target.value)}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="text-foreground">No</span>
                </label>
              </div>
            </div>

            {formData.hasDamage === "Yes" && (
              <div className="space-y-2">
                <Label htmlFor="damageLocation">Where is the damage? *</Label>
                <Textarea
                  id="damageLocation"
                  value={formData.damageLocation}
                  onChange={(e) => handleChange("damageLocation", e.target.value)}
                  placeholder="Describe the location and extent of damage"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label>Are all 4 wheels intact and rolling free with no obstructions? *</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="wheelsIntact"
                    value="Yes"
                    checked={formData.wheelsIntact === "Yes"}
                    onChange={(e) => handleChange("wheelsIntact", e.target.value)}
                    className="w-4 h-4 text-primary"
                    required
                  />
                  <span className="text-foreground">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="wheelsIntact"
                    value="No"
                    checked={formData.wheelsIntact === "No"}
                    onChange={(e) => handleChange("wheelsIntact", e.target.value)}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="text-foreground">No</span>
                </label>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full mt-6">
              <Send className="w-5 h-5 mr-2" />
              Send via WhatsApp
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              <MessageCircle className="w-3 h-3 inline mr-1" />
              Your quote request will be sent directly to our WhatsApp
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
