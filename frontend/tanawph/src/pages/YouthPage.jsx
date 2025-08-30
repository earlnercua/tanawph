import React from 'react'
import { CalendarDays, Clock, Video, Forward } from 'lucide-react'
import { useState } from 'react'

import Navbar from '../components/Navbar'
import TopMenu from '../components/TopMenu'
import SearchBar from '../components/SearchBar'
import { notes, randomizeColors, randomizeRotation } from '../lib/noteUtilities'

const YouthPage = () => {





  const handleSelect = (i) => {
    setNote(i);
  }

  const exitNote = () => {
    setNote(null);

  }

  const [noteIndex, setNote] = useState(null);




  return (
    <div className='h-screen'>
        <Navbar />

        <div className="h-fit flex flex-col items-center justify-start py-8">
            <TopMenu />
        
        <SearchBar />


        {/* SECTION 1 */}
        <div className='w-2xl h-fit flex flex-wrap items-start justify-center '>

          <div className="flex flex-wrap basis-full items-center justify-center">
            <h2 className='text-2xl align-middle font-bold'>Opinion Wall from The Youth</h2>
            <p className='text-gray-600 align-middle'>Share thoughts, reflections, or solutions about digital dangers and politics.</p>
          </div>

          <div className="w-full h-fill grid grid-flow-row grid-cols-4 my-12">
            {notes.map((note, i)=>{

              return <div key={i} className={`size-full comic-neue ${note.color} rotate-${note.rotation} m-4 p-2 shadow-2xl`} onClick={()=>handleSelect(i)}>
                <h4 className='pb-2 font-bold'>{note.name}</h4>
                <p className='comic-neue-regular'>{note.content}</p>
              </div>
            })}
          </div>

          <button className='text-white font-bold bg-[linear-gradient(to_right,#EB5E55,#FFC758)] px-8 py-4 rounded-full my-6 mt-12'>Submit a Note</button>

          <p className='text-gray-400 text-center py-6'>We post the wall on our social media pages every month. We also combine inputs into one and turn it into Youth Resolution document that can be presented to schools, LGUs, or even UNESCO.</p>

          <div className="w-full h-0 b-gray-400 b-bottom-1 py-4 my-6"></div>

        </div>

        {/* SECTION 2 */}
        <div className='w-2xl h-100 flex flex-wrap items-start justify-center '>
          <div className="flex flex-wrap basis-full items-center justify-start">
            <h2 className='text-2xl basis-full align-middle font-bold'>Youth Talks</h2>
            <p className='text-gray-600'>Let’s talk about current issues that matter!.</p>
          </div>

          <div className="flex flex-wrap w-full h-fill rounded-xl overflow-hidden shadow-[0px_0px_4px_4px_rgba(0,0,0,0.25)] my-6">
            <img className='basis-full' src="./src/assets/images/image_youthtalks1.svg" alt="" />
            <div className="w-full h-fill">
              <h4 className='font-bold text-xl p-4'>Sara Duterte Impeachment</h4>
              <p className='text-gray-400 p-4'>Exploring its political impact, how media frames the issue, and what it means for young people’s role in democracy.</p>

              <div className="flex items-center px-4">
                <CalendarDays className='size-4 mr-2'/>
                <p className=''>August 30, 2025</p>
              </div>
              <div className="flex items-center px-4">
                <Clock className='size-4 mr-2'/>
                <p className=''>7pm - 8pm</p>
              </div>
              <div className="flex items-center justify-start px-4">
                <Video className='size-4 mr-2'/>
                <p className=''>Google Meet</p>
              </div>

              <button className='relative bottom-10 left-145 text-white font-bold bg-[linear-gradient(to_right,#EB5E55,#FFC758)] px-4 py-2 rounded-full'>Join</button>
              <button className='relative bottom-105 left-130 text-white font-bold bg-[linear-gradient(to_right,#EB5E55,#FFC758)] px-4 py-2 rounded-full'><Forward /></button>

            </div>
          </div>

          <div className="h-20 pb-4"></div>
        </div>

        

      </div>

      <div className={`${noteIndex === null ? 'hidden':'fixed' } top-0 left-0 flex items-center w-screen h-screen bg-black opacity-50`} onClick={exitNote}>
            
      </div> 
      <div className={`${noteIndex === null ? 'hidden':'fixed' } left-[calc(50vw-200px)] top-[calc(50vh-200px)] w-100 h-100  ${noteIndex === null ? 'bg-yellow-400' : notes[noteIndex].color} opacity-100 comic-neue shadow-sm`}>
          <h4 className='text-4xl pb-2 font-bold mx-8 mt-12 mb-4'>{noteIndex === null ? '' : notes[noteIndex].name}</h4>
          <p className='text-4xl leading-14 comic-neue mx-8'>{noteIndex === null ? '' : notes[noteIndex].content}</p>
      </div>
    </div>
  )
}

export default YouthPage