
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bell, Search, MoreHorizontal, Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const HeaderBox = () => {
  return (
    <header className="border-b">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Dashboard</Button>
            <Button variant="ghost">
              Notifications
              <Bell className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="ghost">
              <Search className="mr-1 h-4 w-4" />
              Search
            </Button>
            <Button variant="ghost">
              <MoreHorizontal className="mr-1 h-4 w-4" />
              More
            </Button>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
              <DropdownMenuItem>Notifications</DropdownMenuItem>
              <DropdownMenuItem>Search</DropdownMenuItem>
              {/* <DropdownMenuItem>More</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="hidden sm:inline-flex">About</Button>
            <Button variant="default">Back</Button>
          </div>
        </div>
      </header>
  )
}

export default HeaderBox