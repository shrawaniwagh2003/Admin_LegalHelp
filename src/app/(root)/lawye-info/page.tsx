'use client'

import { useState } from 'react'
import { AddLawyerModal } from './add-lawyer-modal'
import { LawyerProfile } from './lawyer-profile'
import { Button } from '@/components/ui/button'

export default function AdminPortal() {
  const [lawyers, setLawyers] = useState([
    { profile: 'KP', barNumber: '8618238', name: 'K.D Pathak', domain: 'UTPx', region: 'Wardha', contact: '9427XXXXXX' },
    { profile: 'JLL', barNumber: '8618238', name: 'Jolly L. Lawrencx', domain: 'Domestic Violence', region: 'Nagpur', contact: '9427XXXXXX' },
    { profile: 'LI', barNumber: '8618238', name: 'Lorem Ipsum', domain: 'Lorem Ipsum', region: 'Pune', contact: '9427XXXXXX' },
    { profile: 'TS', barNumber: '8618238', name: 'Thomas Shelby', domain: 'Lorem Ipsum', region: 'Mumbai', contact: '9427XXXXXX' },
    { profile: 'SP', barNumber: '8618238', name: 'Sayali Pimpalkar', domain: 'Lorem Ipsum', region: 'Nashik', contact: '9427XXXXXX' },
  ])

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Lawyers</h2>
      <div className="flex justify-end mb-4">
        <AddLawyerModal onAddLawyer={(lawyer) => setLawyers([...lawyers, lawyer])} />
      </div>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-blue-50">
            <th className="border p-2 text-left">Profile</th>
            <th className="border p-2 text-left">BAR No.</th>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Domain</th>
            <th className="border p-2 text-left">Region</th>
            <th className="border p-2 text-left">Contact</th>
            <th className="border p-2 text-left">View</th>
          </tr>
        </thead>
        <tbody>
          {lawyers.map((lawyer, index) => (
            <tr key={index} className="border-b">
              <td className="border p-2">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center">
                  {lawyer.profile}
                </div>
              </td>
              <td className="border p-2">{lawyer.barNumber}</td>
              <td className="border p-2">{lawyer.name}</td>
              <td className="border p-2">{lawyer.domain}</td>
              <td className="border p-2">{lawyer.region}</td>
              <td className="border p-2">{lawyer.contact}</td>
              <td className="border p-2">
                <LawyerProfile {...lawyer} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

