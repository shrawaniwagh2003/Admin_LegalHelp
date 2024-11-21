import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { lawyersData } from '../../../../lib/data'
// import { caseData, getStatusColor } from '../../../../lib/data'


export default function LawyersInfo() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h2 className="text-xl font-semibold text-blue-900">Lawyers</h2>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">Add Lawyer</Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-50">
              <TableHead className="text-blue-900">Profile</TableHead>
              <TableHead className="text-blue-900">BAR No.</TableHead>
              <TableHead className="text-blue-900">Name</TableHead>
              <TableHead className="text-blue-900">Domain</TableHead>
              <TableHead className="text-blue-900">Region</TableHead>
              <TableHead className="text-blue-900">Contact</TableHead>
              <TableHead className="text-blue-900">View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lawyersData.map((lawyer) => (
              <TableRow key={lawyer.barNo} className="hover:bg-blue-50">
                <TableCell>
                  <Avatar>
                    <AvatarImage src={lawyer.profileImage} alt={lawyer.name} />
                    <AvatarFallback className="bg-blue-200 text-blue-900">{lawyer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{lawyer.barNo}</TableCell>
                <TableCell>{lawyer.name}</TableCell>
                <TableCell>{lawyer.domain}</TableCell>
                <TableCell>{lawyer.region}</TableCell>
                <TableCell>{lawyer.contact}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">View Profile</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}