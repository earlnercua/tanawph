import React, { useState } from 'react'
import { useParams } from 'react-router';
import { ChevronLeft, Download, Forward } from 'lucide-react';
import { Link } from 'react-router';

import Navbar from '../components/Navbar';
import DownloadPage from './DownloadPage';
import SharePopup from '../components/SharePopup';

const InfographicsPosterViewPage = () => {

    const id = useParams().id;
    const [sharePopup, setPopup] = useState(false);
    const url = `../../../src/assets/images/image_infographics${id}.svg`

    console.log(sharePopup)

  return (

    

    <div className='h-screen'>
        <Navbar />

        <div className="w-full h-fit flex items-start justify-center mt-12">
            <div className="w-2xl h-fit">

                <div className='w-full h-fit flex-1'>

                    <div className="w-full flex items-center justify-between">
                        <Link to='/mil/infographics'>
                            <ChevronLeft className="size-6 stroke-[#F57F6D] stroke-3" />
                        </Link>
                            
                        <div className='flex'>
                            <Link to={`/download/image_infographics${id}.svg`}>
                                <Download className="size-6 stroke-[#F57F6D] stroke-3 mx-2"/>   
                            </Link>
                            <Forward className="size-6 stroke-[#F57F6D] stroke-3 mx-2" onClick={()=>setPopup(true)} />
                        </div>
                    </div>
                    

                </div>

                <img className='size-full my-6' src={url}/>

                <div className="w-full h-fit mt-6">
                    <h3 className='text-2xl font-bold'>How to Vote for the First Time</h3>
                    <p className='text-gray-400'>By Mike | 2020 - 2022</p>
                    <p className='text-gray-600 my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
        </div>



        <div className={`${sharePopup === false ? 'hidden':'fixed' } top-0 left-0 flex items-center w-screen h-screen bg-black opacity-50`} onClick={()=>setPopup(false)} />



        <SharePopup id={id} imgUrl={url} popup={sharePopup}/>

    </div>
    

  )
}

export default InfographicsPosterViewPage