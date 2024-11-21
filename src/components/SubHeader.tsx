import React from 'react'
import Image from 'next/image'
import { title } from 'process'
import disha from '../public/icons/disha.jpg';
import aaa from '../public/icons/aajad aadmi.png'
const SubHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">{title}</h1>
          <div className="flex items-center space-x-4">
            <Image src={disha} alt="75 Years Logo" width={100} height={50} />
            <Image src={aaa} alt="DISHA Logo" width={100} height={50} />
          </div>
        </div>
  )
}

export default SubHeader