import { Button } from "@/components/ui/button"
import { LayoutDashboard, FileText, Users, X } from 'lucide-react'

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ activeTab, setActiveTab, sidebarOpen, toggleSidebar }: SidebarProps) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 p-4 transition-transform duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
      <Button variant="ghost" size="icon" className="absolute right-4 top-4 md:hidden text-gray-700" onClick={toggleSidebar}>
        <X className="h-6 w-6" />
      </Button>
      <nav className="space-y-2 mt-12 md:mt-0">
        <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-200" onClick={() => { setActiveTab('dashboard'); toggleSidebar(); }}>
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-200" onClick={() => { setActiveTab('utp-applications'); toggleSidebar(); }}>
          <FileText className="mr-2 h-4 w-4" />
          UTP Applications
        </Button>
        <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-200" onClick={() => { setActiveTab('case-details'); toggleSidebar(); }}>
          <FileText className="mr-2 h-4 w-4" />
          Case Info
        </Button>
        <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-200" onClick={() => { setActiveTab('lawyers-info'); toggleSidebar(); }}>
          <Users className="mr-2 h-4 w-4" />
          Lawyers Info
        </Button>
      </nav>
    </aside>
  )
}