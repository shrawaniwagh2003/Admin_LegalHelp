'use client'
import search from '../../public/icons/serach svg.png';
import SubHeader from '../SubHeader';
import disha from '../../public/icons/disha.jpg';
import aajat from '../../public/icons/aajad aadmi.png'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bell, Search, MoreHorizontal, Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function HomePage() {
  const [caseNo, setCaseNo] = useState('')
  const [year, setYear] = useState('')
  const [filteredData, setFilteredData] = useState(prisonerData)

  const handleSearch = () => {
    const filtered = prisonerData.filter(prisoner => 
      (caseNo === '' || prisoner.caseNo.includes(caseNo)) &&
      (year === '' || prisoner.dateOfArrest.includes(year))
    )
    setFilteredData(filtered)
  }

  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-8">
       <SubHeader title='Infromation of UTPs'/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1">
            <Image src={search} alt="Search Illustration" width={300} height={200} className="w-full" />
          </div>
          <div className="col-span-1 bg-orange-100 rounded-lg p-4 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2">Track Case</h3>
            <Button>Get Updates</Button>
          </div>
          <div className="col-span-1 bg-blue-100 rounded-lg p-4 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2">Lawyers Info</h3>
            <Button>Search</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="caseNo" className="block text-sm font-medium text-gray-700 mb-1">Search Case :</label>
            <Input 
              id="caseNo" 
              placeholder="Enter Case No." 
              value={caseNo}
              onChange={(e) => setCaseNo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year :</label>
            <Input 
              id="year" 
              placeholder="Search Year" 
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <Button onClick={handleSearch}>Search</Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name Of UTPs/ Accused</TableHead>
                <TableHead>Name of Police Station</TableHead>
                <TableHead>FIR / Crime number.</TableHead>
                <TableHead>Date of arrest / detention.</TableHead>
                <TableHead>Court name.</TableHead>
                <TableHead>Case no.</TableHead>
                <TableHead>Offence Under Select</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((prisoner, index) => (
                <TableRow key={index}>
                  <TableCell>{prisoner.name}</TableCell>
                  <TableCell>{prisoner.policeStation}</TableCell>
                  <TableCell>{prisoner.firNumber}</TableCell>
                  <TableCell>{prisoner.dateOfArrest}</TableCell>
                  <TableCell>{prisoner.courtName}</TableCell>
                  <TableCell>{prisoner.caseNo}</TableCell>
                  <TableCell>{prisoner.offence}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}

const prisonerData = [
  {
    name: "Pranav Pathekar",
    policeStation: "wardha",
    firNumber: "237/2023",
    dateOfArrest: "10/01/23",
    courtName: "Wardha Dist. court",
    caseNo: "",
    offence: "341"
  },
  {
    name: "Shrawani Wagh",
    policeStation: "Ram nagar",
    firNumber: "535/278731",
    dateOfArrest: "3/9/23",
    courtName: "Wardha Dist. court",
    caseNo: "-",
    offence: "420"
  },
  {
    name: "Pranav Ikhar",
    policeStation: "Nalwadi",
    firNumber: "509/723822",
    dateOfArrest: "5/7/23",
    courtName: "Wardha Dist. court",
    caseNo: "-",
    offence: "301"
  }
]