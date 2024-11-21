'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area' // Assuming ScrollArea is imported

interface LawyerProfileProps {
  profile: string
  barNumber: string
  name: string
  domain: string
  region: string
  contact: string
  email: string
  experience: string
  specialization: string
  availability: string
}

export function LawyerProfile({
  profile,
  barNumber,
  name,
  domain,
  region,
  contact,
  email,
  experience,
  specialization,
  availability,
}: LawyerProfileProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-blue-600 border-blue-600 hover:bg-blue-50 font-semibold text-md py-2 px-4 rounded-md"
        >
          View Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto">
        <DialogHeader>
          <DialogTitle className="text-blue-600 text-2xl font-bold">Lawyer Profile</DialogTitle>
        </DialogHeader>

        {/* Lawyer Profile Details */}
        <div className="mt-4 flex items-center space-x-4">
          <div className="bg-blue-100 text-blue-800 rounded-full w-24 h-24 flex items-center justify-center text-3xl font-bold">
            {profile}
          </div>
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-600">{domain} Lawyer</p>
          </div>
        </div>

        {/* Scrollable area for Lawyer Information */}
        <ScrollArea className="mt-6 max-h-80 overflow-y-auto">
          <table className="min-w-full table-auto border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-gray-700">Attribute</th>
                <th className="text-left text-sm font-medium text-gray-700">Details</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="text-gray-600 py-2 font-medium">BAR Number</td>
                <td className="text-gray-800 py-2">{barNumber}</td>
              </tr>
              <tr>
                <td className="text-gray-600 py-2 font-medium">Domain</td>
                <td className="text-gray-800 py-2">{domain}</td>
              </tr>
              <tr>
                <td className="text-gray-600 py-2 font-medium">Region</td>
                <td className="text-gray-800 py-2">{region}</td>
              </tr>
              <tr>
                <td className="text-gray-600 py-2 font-medium">Contact</td>
                <td className="text-gray-800 py-2">{contact}</td>
              </tr>
              <tr>
                <td className="text-gray-600 py-2 font-medium">Email</td>
                <td className="text-gray-800 py-2">{email}</td>
              </tr>
              <tr>
                <td className="text-gray-600 py-2 font-medium">Experience</td>
                <td className="text-gray-800 py-2">{experience}</td>
              </tr>
              <tr>
                <td className="text-gray-600 py-2 font-medium">Specialization</td>
                <td className="text-gray-800 py-2">{specialization}</td>
              </tr>
              <tr>
                <td className="text-gray-600 py-2 font-medium">Availability</td>
                <td className="text-gray-800 py-2">{availability}</td>
              </tr>
            </tbody>
          </table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
