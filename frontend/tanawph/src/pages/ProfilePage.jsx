import React from 'react';
import { useState } from 'react'
import { useParams, Link } from 'react-router';
import {FlagTriangleRight, UserRound, Landmark, Clock, Forward, ChevronLeft, Cake, House, GraduationCap, Briefcase, Building2} from 'lucide-react'

import Navbar from '../components/Navbar';
import Accordion from '../components/Accordion';
import { officialsArray } from '../lib/officialsUtilities';
import { formatDate, yearsFromNow } from '../lib/dateUtils';


const HomePage = () => {

  const [selectedSection, setSelectedSection] = useState(0);
  const paramId = useParams().id;

  const handleSelect = (i) => {setSelectedSection(i)}

  function getOfficial(paramId){
    return officialsArray.tabs.find(e => {
      return e.id === paramId;
    });
  }

  const currentOfficial = getOfficial(paramId);


  return (
    <div className='h-screen'>
      <Navbar /> 
      <div className="h-full flex flex-col items-center justify-start py-8">


        {/* PROFILE CARD */}
        <div className="flex flex-wrap items-center justify-center w-2xl max-h-50 px-4">


          <div className="w-full h-fit basis-full flex justify-between">
            <Link to='/government/officials'>
              <ChevronLeft className="size-6 stroke-[#F57F6D] stroke-3" />
            </Link>
              <div  className='h-fit flex justify-end text-white bg-[linear-gradient(to_right,#EB5E55,#FFC758)] rounded-xl px-3 shadow-[0px_3px_2px_2px_rgb(0,0,0,0.1)]'>
            <Forward className='size-5 mr-2 stroke-4'/>
            <button className='font-bold'>Share</button>
            </div>
            
          </div>


          <div className='w-fit h-fit bg-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.30)] rounded-full overflow-hidden'>
            <img src={`../../${currentOfficial.img}`} className='size-36 rounded-xl' />
          </div>
          
          <div className='h-full flex-1 px-8 py-8 items-start justify-start text-gray-600'>


            <h1 className='uppercase font-bold pb-2 text-black'>{currentOfficial.name}</h1>

            <div className="flex items-center pb-1">
              <UserRound className='size-5 mr-2'/>
              <p>{currentOfficial.position}</p>
            </div>
            <div className="flex items-center pb-1">
              <Landmark className='size-5 mr-2'/>
              <p>{currentOfficial.level}</p>
            </div>
            <div className="flex items-center pb-1">
              <Clock className='size-5 mr-2'/>
              <p className='text-gray-600'>{currentOfficial.duration}</p>
            </div>
          </div>


          <div className='h-full flex items-end py-8'>
          </div>
        </div>


        {/* INFO SELECTOR */}
        <div className='flex items-center justify-center w-full h-30 my-12 '>

          <div className="flex justify-around w-2xl space-x-2 pb-8 border-b-1 border-gray-400">
            <button className={`px-4 py-2 ${selectedSection === 0 ? 'rounded-full btn-main text-white': 'btn-ghost'}`} onClick={()=>handleSelect(0)}>Background</button>
            <button className={`px-4 py-2 ${selectedSection === 1 ? 'rounded-full btn-main text-white': 'btn-ghost'}`} onClick={()=>handleSelect(1)}>Political Platform</button>
            <button className={`px-4 py-2 ${selectedSection === 2 ? 'rounded-full btn-main text-white': 'btn-ghost'}`} onClick={()=>handleSelect(2)}>Other Info</button>
          </div>
        </div>


        
        <div className="flex w-full h-200 justify-center items-center">


          <div className={`${selectedSection  === 0 ? '': 'hidden'} w-2xl h-full shadow-[0px_0px_5px_5px_rgba(0,0,0,0.125)] rounded-2xl pb-12 my-4`}>
            <div className="w-full-h-full items-start justify-start mx-4 mt-8">
              <h2 className='font-bold text-xl pb-2'>Basic Info</h2>

              <div className="flex items-center pb-4">
                <Cake className='size-6 mr-2'/>
                <p className='font-bold mr-2'>Age: {yearsFromNow(currentOfficial.birthday)}</p>
                <p>{`(${formatDate(currentOfficial.birthday)})`}</p>
              </div>
              
              <div className="flex items-center pb-4">
                <House className='size-6 mr-2'/>
                <p className='font-bold mr-2'>Residence: </p>
                <p>{currentOfficial.residence}</p>
              </div>
              
              <div className="flex flex-wrap items-center pb-4">
                <GraduationCap className='size-6 mr-2'/>
                <p className='font-bold mr-2 pb-4'>Education: </p>
                <div className='basis-full flex-1'>
                  {currentOfficial.education.map((item, i)=>{
                    return (<div key={i} className='ml-8'>
                      <div className='flex items-center'>
                        <div className='size-4 rounded-full bg-[#F57F6D]'/>
                        <p className='ml-2'>{item.institution}</p>
                        <p className='italic ml-2'>{` (${item.status})`}</p>
                      </div>
                      <p className='text-gray-400 ml-6'>{item.taking}</p>
                    </div>)
                  })}
                </div>
              </div>

              <h2 className='font-bold text-xl py-4'>Background</h2>
              {currentOfficial.background.map((item, i)=>{
                return (
                  <div key={i} className='pb-8'>
                    <div className="flex items-center pb-4"> 
                      {item.title === 'Other Professional Experience' ? <Briefcase className='mr-2'/>: <Building2 className='mr-2'/>}
                      <p className='font-bold mr-2'>{item.title}:</p>
                    </div>
                    {item.content.map((entry, j)=>{
                      return <ul className='list-disc' key={j}>
                        <li className='ml-12'>
                          {entry}
                        </li>
                      </ul>
                      })}
                  </div>
                )
              })}

            </div>
          </div>


          <div className={`${selectedSection  === 1 ? '': 'hidden'}`}>
            <Accordion />
          </div>

          <div className={`${selectedSection  === 2 ? '': 'hidden'}`}>

          </div>
          
        </div>

      </div>
      

    </div>
  )
}

export default HomePage