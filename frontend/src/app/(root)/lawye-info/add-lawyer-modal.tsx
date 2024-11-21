'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'  // Assuming ScrollArea is imported from a component

interface AddLawyerModalProps {
  onAddLawyer: (lawyer: any) => void
}

export function AddLawyerModal({ onAddLawyer }: AddLawyerModalProps) {
  const [formData, setFormData] = useState({
    profile: '',
    barNumber: '',
    name: '',
    domain: '',
    region: '',
    contact: '',
    experience: '',
    email: '',
    specialization: '',
    availability: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddLawyer(formData)
    setFormData({
      profile: '',
      barNumber: '',
      name: '',
      domain: '',
      region: '',
      contact: '',
      experience: '',
      email: '',
      specialization: '',
      availability: '',
    }) // Reset form
    setIsOpen(false) // Close the dialog
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Add Lawyer</Button>
      </DialogTrigger>
      <DialogContent className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">Add Lawyer Details</DialogTitle>
        </DialogHeader>

        {/* Scroll Area */}
        <ScrollArea className="max-h-[80vh] overflow-y-auto mt-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="profile" className="text-sm font-medium text-gray-600">
                Profile Initials
              </Label>
              <Input id="profile" name="profile" value={formData.profile} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="barNumber" className="text-sm font-medium text-gray-600">
                BAR Number
              </Label>
              <Input id="barNumber" name="barNumber" value={formData.barNumber} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-600">
                Name
              </Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="domain" className="text-sm font-medium text-gray-600">
                Domain
              </Label>
              <Input id="domain" name="domain" value={formData.domain} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="region" className="text-sm font-medium text-gray-600">
                Region
              </Label>
              <Input id="region" name="region" value={formData.region} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="contact" className="text-sm font-medium text-gray-600">
                Contact
              </Label>
              <Input id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-600">
                Email
              </Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="experience" className="text-sm font-medium text-gray-600">
                Years of Experience
              </Label>
              <Input id="experience" name="experience" value={formData.experience} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="specialization" className="text-sm font-medium text-gray-600">
                Specialization
              </Label>
              <Input
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="availability" className="text-sm font-medium text-gray-600">
                Availability
              </Label>
              <Input
                id="availability"
                name="availability"
                placeholder="Full-time or Part-time"
                value={formData.availability}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
              Submit
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
