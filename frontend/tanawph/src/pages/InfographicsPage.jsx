import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router'



import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

const InfographicsPage = () => {

  return (
   <div className='h-screen'>
    <Navbar />

      <div className="w-full h-fit flex items-start justify-center mt-12">
        <div className="w-2xl h-fit flex flex-wrap items-start justify-center">
          <Link className="flex basis-full items-center justify-start pb-4" to='/mil'>
            <ChevronLeft className="size-6 stroke-[#F57F6D] stroke-3" />
            <h3 className="text-2xl font-bold">Infographic Posters</h3>
          </Link>

          <SearchBar />


          <div className="w-full h-fill grid grid-cols-2 grid-flow-row gap-2 my-6">
            <Link to='/mil/infographics/view/0001' className='size-full'>
              <img className='size-full' src="../src/assets/images/image_infographics1.svg" />
            </Link>
            <Link to='/mil/infographics/view/0002' className='size-full'>
              <img className='size-full' src="../src/assets/images/image_infographics1.svg" />
            </Link>
            <Link className='size-full'>
              <img className='size-full' src="../src/assets/images/image_infographics1.svg" />
            </Link>
            <Link className='size-full'>
              <img className='size-full' src="../src/assets/images/image_infographics1.svg" />
            </Link>
            <Link className='size-full'>
              <img className='size-full' src="../src/assets/images/image_infographics1.svg" />
            </Link>
            <Link className='size-full'>
              <img className='size-full' src="../src/assets/images/image_infographics1.svg" />
            </Link>

          </div>
        </div>
      </div>
    

        
    </div>
  )
}

export default InfographicsPage