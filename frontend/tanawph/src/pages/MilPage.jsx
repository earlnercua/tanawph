import React from 'react'
import { ChevronRight, CalendarDays } from 'lucide-react'

import Navbar from '../components/Navbar'
import TopMenu from '../components/TopMenu'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router'

const MilPage = () => {
  return (
    <div className='h-screen'>
        <Navbar />

        <div className="h-full flex flex-col items-center justify-start py-8">
            <TopMenu />
        
        <SearchBar />


        {/* SECTION 1 */}
        <div className='w-2xl h-3xl flex flex-wrap items-center justify-center m-12'>

          <Link className="flex basis-full items-center justify-start pb-8" to='/mil/infographics'>
            <h3 className="text-2xl font-bold">Infographic Posters</h3>
            <ChevronRight className="size-6 stroke-[#F57F6D] stroke-3" />
          </Link>
            
          <div className="w-full h-3xl grid grid-flow-row grid-cols-2 items-center justify-center mb-12">
            <img src="../assets/images/image_infographics1_tilted.svg" className='relative left-8 size-full' />
            <img src="../assets/images/image_infographics1_tilted.svg" className='relative right-2 size-full' />
          </div>
        </div>


         {/* SECTION 2 */}
        <Link to='/mil/games' className='w-2xl h-3xl flex flex-wrap items-center justify-center m-12'>
          <div className="flex basis-full items-center justify-start pb-8">
            <h3 className="text-2xl font-bold">PPT MIL Games</h3>
            <ChevronRight className="size-6 stroke-[#F57F6D] stroke-3" />
          </div>

            <div className="w-full flex items-center justify-center mb-12">
              <img src='../assets/images/image_pptmilgames1.svg' className='size-full'/>
            </div>


        </Link>


        {/* SECITON 3 */}
        <div className='w-2xl h-3xl flex flex-wrap items-center justify-center m-12'>

          <div className="flex basis-full items-center justify-start pb-8">
              <h3 className="text-2xl font-bold">Digital Dangers Archive</h3>
              <ChevronRight className="size-6 stroke-[#F57F6D] stroke-3" />
          </div>

          <div className="w-full h-3xl grid grid-flow-row grid-cols-1 items-center justify-center mb-12">

            <div className="flex flex-wrap items-center justify-center rounded-2xl overflow-hidden shadow-[0_0_8px_2px_rgba(0,0,0,0.125)] mb-8">
              <div className="flex basis-full items-center justify-start border-b-1 border-gray-400">
                <img src="../assets/images/image_digitaldangers1.svg" className='size-50' />
                <div className="flex flex-wrap items-center justify-start ml-4">
                  <h2 className='basis-full text-2xl font-bold'>COVID-19 Infodemic</h2>
                  <CalendarDays className='size-5 stroke-gray-600 mr-2' />
                  <p className='text-lg text-gray-600'>2020-2022</p>
                </div>
              </div>
              <p className='text-lg text-gray-600 p-4'>Massive spread of fake cures, anti-vaccine disinformation, and conspiracy theories online, leading to public health risks.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center rounded-2xl overflow-hidden shadow-[0_0_8px_2px_rgba(0,0,0,0.125)] mb-8">
              <div className="flex basis-full items-center justify-start border-b-1 border-gray-400">
                <img src="../assets/images/image_digitaldangers2.svg" className='size-50' />
                <div className="flex flex-wrap items-center justify-start ml-4">
                  <h2 className='basis-full text-2xl font-bold'>Fake news & The 2016 US Elections </h2>
                  <CalendarDays className='size-5 stroke-gray-600 mr-2' />
                  <p className='text-lg text-gray-600'>2016</p>
                </div>
              </div>
              <p className='text-lg text-gray-600 p-4'>False stories on Social Media reached millions, shaping voter perception and fueling division. It exposed how misinformation spreads faster than fact-checking.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center rounded-2xl overflow-hidden shadow-[0_0_8px_2px_rgba(0,0,0,0.125)] mb-8">
              <div className="flex basis-full items-center justify-start border-b-1 border-gray-400">
                <img src="../assets/images/image_digitaldangers3.svg" className='size-50' />
                <div className="flex flex-wrap items-center justify-start ml-4">
                  <h2 className='basis-full text-2xl font-bold'>The Blue Whale Challenge</h2>
                  <CalendarDays className='size-5 stroke-gray-600 mr-2' />
                  <p className='text-lg text-gray-600'>2016-2017</p>
                </div>
              </div>
              <p className='text-lg text-gray-600 p-4'>An online “game” that spread on social media manipulating teens into dangerous tasks. It revealed how viral digital content can exploit vulnerable youth and cause real-world harm.</p>
            </div>

          </div>


        </div>

        </div>
    </div>
  )
}

export default MilPage