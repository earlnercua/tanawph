import React from 'react'
import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';

import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import OfficialsList from '../components/OfficialsList';

const OfficialsPage = () => {
  return (
    <div className='h-screen'>
        <Navbar />
      <div className="w-full h-fit flex items-start justify-center mt-12">
        <div className="w-2xl h-fit flex flex-wrap items-start justify-center">
          <Link className="flex basis-full items-center justify-start pb-4" to='/government'>
            <ChevronLeft className="size-6 stroke-[#F57F6D] stroke-3" />
            <h3 className="text-2xl font-bold">Officials</h3>
          </Link>

          <SearchBar />

          <OfficialsList/>

          <div className="w-full h-fit flex justify-center mt-8">
              <h4 className='text-md text-gray-400'>Showing 3 of 3</h4>
          </div>
            </div> 
        </div>
    </div>
  )
}

export default OfficialsPage