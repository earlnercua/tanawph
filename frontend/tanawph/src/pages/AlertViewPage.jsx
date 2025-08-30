import React, { useState } from 'react'
import { useParams } from 'react-router';
import { ChevronLeft, Download, Forward } from 'lucide-react';
import { Link } from 'react-router';

import Navbar from '../components/Navbar';
import DownloadPage from './DownloadPage';
import SharePopup from '../components/SharePopup';
import { fakeNewsAlerts } from '../lib/fakeNewsUtils';

const AlertViewPage = () => {

    const urlId = useParams().id;
    const [sharePopup, setPopup] = useState(false);

    const article = fakeNewsAlerts.find(e => e.id === urlId);
    const url = `../../${article.img}`;

    console.log(sharePopup)

  return (

    

    <div className='h-screen'>
        <Navbar />

        <div className="w-full h-fit flex items-start justify-center mt-12">
            <div className="w-2xl h-fit">

                <div className='w-full h-fit flex-1'>

                    <div className="w-full flex items-center justify-between">
                        <Link to='/government/fake-news-alerts'>
                            <ChevronLeft className="size-6 stroke-[#F57F6D] stroke-3" />
                        </Link>
                            
                        <div className='flex'>
                            <Link to={`/download/image_digitaldangers${urlId}.svg`}>
                                <Download className="size-6 stroke-[#F57F6D] stroke-3 mx-2"/>   
                            </Link>
                            <Forward className="size-6 stroke-[#F57F6D] stroke-3 mx-2" onClick={()=>setPopup(true)} />
                        </div>
                    </div>
                    

                </div>

                <img className='size-full my-6' src={url}/>

                <div className="w-full h-fit mt-6">
                    <h3 className='text-2xl font-bold'>{article.title}</h3>
                    <p className='text-gray-400'>{article.date}</p>
                    <p className='text-gray-600 my-8'>{article.content} </p>
                </div>
            </div>
        </div>

        <div className={`${sharePopup === false ? 'hidden':'fixed' } top-0 left-0 flex items-center w-screen h-screen bg-black opacity-50`} onClick={()=>setPopup(false)} />



        <SharePopup id={urlId} imgUrl={url} popup={sharePopup}/>

    </div>
    

  )
}

export default AlertViewPage