import HeaderBox from '@/components/ui/HeaderBox'
import HomePage from '@/components/ui/HomePage'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import { Section } from 'lucide-react'
import React from 'react'
import AdminPortal from './admin/page'

const Home = () => {
  const loggedIn = {firstName : 'Shrawani', lastName : 'Wagh', email:"waghshrawani2003@gmail.com"}
  return (
    <section >
       <AdminPortal></AdminPortal>
       </section>
  )
}

export default Home