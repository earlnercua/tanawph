import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router'

import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import { milGames } from '../lib/milGamesUtils'

const MilGamesPage = () => {
  return (
    <div className='h-screen'>
        <Navbar />
      <div className="w-full h-fit flex items-start justify-center mt-12">
        <div className="w-2xl h-fit flex flex-wrap items-start justify-center">
          <Link className="flex basis-full items-center justify-start pb-4" to='/mil'>
            <ChevronLeft className="size-6 stroke-[#F57F6D] stroke-3" />
            <h3 className="text-2xl font-bold">PPT MIL Games</h3>
          </Link>
          <SearchBar/>
          <div className="grid space-y-4 mt-12">
            {milGames.map((item, i)=>{
              return(
                <Link 
                key={i} 
                to={`${item.id}`}
                className='' > 
                    <img src={item.img} className='w-full rounded-2xl'/>
                </Link>
                
              )
            })}
          </div>
        </div> 
      </div>

    </div>
  )
}

export default MilGamesPage