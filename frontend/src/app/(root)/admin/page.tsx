'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import Sidebar from '../../../components/ui/Slidebar'
import CaseDetails from '../case-details/page'
import LawyersInfo from '../lawye-info/page'

export default function AdminPortal() {
  const [activeTab, setActiveTab] = useState('case-details')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex h-screen bg-white text-blue-900">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        sidebarOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto bg-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-900">Admin Portal</h1>
          <Button variant="ghost" size="icon" className="md:hidden text-blue-900" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {activeTab === 'case-details' && <CaseDetails />}
        {activeTab === 'lawyers-info' && <LawyersInfo />}
      </main>
    </div>
  )
}