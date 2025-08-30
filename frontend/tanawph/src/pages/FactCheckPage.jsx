import React from 'react'
import { Dices } from 'lucide-react'
import { useState } from 'react'

import Navbar from '../components/Navbar'
import TopMenu from '../components/TopMenu'
import SearchBar from '../components/SearchBar'

const FactCheckPage = () => {

    const [selectedTip, setTip] = useState(null); 

    const handleSelect = (i)=>{
        console.log(i)
        setTip(i);
    }

  return (
    <div className='h-screen pb-8'>
        <Navbar />

        <div className="h-full flex flex-col items-center justify-start py-8">
            <TopMenu />
        
        <SearchBar />

        {/* SECTION 1 */}
            <div className='w-2xl h-3xl flex flex-wrap items-center justify-center m-12'>
                <h3 className="text-2xl font-bold basis-full pb-8">Online Tools for Quick Fact Checking</h3>
                <div className="w-full h-3xl grid grid-flow-row grid-cols-2 items-center justify-center gap-6">


                    <div className="flex flex-wrap items-start justify-center h-84 bg-[linear-gradient(to_right,#EB5E55,#FFC758)] pb-2 shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]">
                        <img className='w-full' src="../assets/images/image_tools1.svg"/>
                        <h4 className="text-lg font-bold text-white mt-4 ml-4 basis-full">Verafiles</h4>
                        <p className="text-md text-white mx-4 basis-full">PH-based fact-checking for politics & viral posts.</p>
                    </div>

                    <div className="flex flex-wrap items-start justify-center h-84 bg-[linear-gradient(to_right,#EB5E55,#FFC758)] pb-2 shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]">
                        <img className='w-full' src="../assets/images/image_tools2.svg"/>
                        <h4 className="text-lg font-bold text-white mt-4 ml-4 basis-full">TinEye</h4>
                        <p className="text-md text-white mx-4 basis-full">Check if images are reused or edited.</p>
                    </div>

                    <div className="flex flex-wrap items-start justify-center h-84 bg-[linear-gradient(to_right,#EB5E55,#FFC758)] pb-2 shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]">
                        <img className='w-full' src="../assets/images/image_tools3.svg"/>
                        <h4 className="text-lg font-bold text-white mt-4 ml-4 basis-full">Deepware</h4>
                        <p className="text-md text-white mx-4 basis-full">Scan & Detect Deepfake Videos</p>
                    </div>

                    <div className="flex flex-wrap items-start justify-center h-84 bg-[linear-gradient(to_right,#EB5E55,#FFC758)] pb-2 shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]" >
                        <img className='w-full' src="../assets/images/image_tools4.svg"/>
                        <h4 className="text-lg font-bold text-white mt-4 ml-4 basis-full">Ai or Not</h4>
                        <p className="text-md text-white mx-4 basis-full">AI-generated images, videos, text, music detection</p>
                    </div>
                </div>

                <div className='w-full flex items-center justify-center border-b border-gray-400 pb-2 my-12'>
                        <h4 className="text-gray-400 font-bold">More Coming Soon</h4>
                </div>

            </div>



            {/* SECTION 2 */}
            <div className='w-2xl h-3xl flex flex-wrap items-center justify-center m-12'>
                <h3 className="text-2xl font-bold basis-full pb-8">Quick Tips</h3>
                <div className="w-full h-3xl grid grid-flow-row grid-cols-2 items-center justify-center gap-6">


                    <div className="flex flex-wrap items-start justify-center h-100 bg-[linear-gradient(to_right,#EB5E55,#FFC758)] p-10 shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]  rounded-3xl cursor-pointer" onClick={()=>handleSelect(0)}>
                        <img className='w-full' src="../assets/images/images_tips1.svg"/>
                        <h4 className="text-2xl text-center font-bold text-white my-4">Viewing Social Media Posts</h4>
                    </div>
                    <div className="flex flex-wrap items-start justify-center h-100 bg-[linear-gradient(to_right,#EB5E55,#FFC758)] p-10 shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]  rounded-3xl cursor-pointer" onClick={()=>handleSelect(1)}>
                        <img className='w-full' src="../assets/images/images_tips2.svg"/>
                        <h4 className="text-2xl text-center font-bold text-white my-4">Viewing News Articles</h4>
                    </div>
                    <div className="flex flex-wrap items-start justify-center h-100 bg-[linear-gradient(to_right,#EB5E55,#FFC758)] p-10 shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]  rounded-3xl cursor-pointer" onClick={()=>handleSelect(2)}>
                        <img className='w-full' src="../assets/images/images_tips3.svg"/>
                        <h4 className="text-2xl text-center font-bold text-white my-4">Looking at Photos and Memes</h4>
                    </div>
                    <div className="flex flex-wrap items-start justify-center h-100 bg-[linear-gradient(to_right,#EB5E55,#FFC758)] p-10 shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]  rounded-3xl cursor-pointer" onClick={()=>handleSelect(3)}>
                        <img className='w-full' src="../assets/images/images_tips4.svg"/>
                        <h4 className="text-2xl text-center font-bold text-white my-4">Forwarded Messages</h4>
                    </div>

                   </div>

            </div>



            {/* SECTION 3 */}
            <div className='w-2xl h-3xl flex flex-wrap items-center justify-center m-12'>
                <h3 className="text-2xl font-bold basis-full pb-8">Test Your Skills</h3>
                <div className="w-full h-3xl grid grid-flow-row grid-cols-1 items-center justify-center gap-6 mb-12">


                    <div className="flex flex-wrap items-center justify-between h-60 bg-[linear-gradient(to_right,#EB5E55,#FFC758)] shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]  rounded-3xl">
                        
                        <div className='size-full flex flex-wrap items-center justify-between bg-[url(../assets/images/image_dices_faded.svg)] bg-no-repeat bg-cover bg-[50%_25%]'>
                            <div className="w-fit flex flex-wrap items-center justify-start  ml-8">
                                <h4 className="text-4xl text-start font-bold text-white my-4 basis-full">Guess if it's AI or not</h4>
                                <button className='text-lg font-bold bg-black py-3 px-6 text-white rounded-lg'>Play Now!</button>
                            </div>
                        <img className='relative mb-8 scale-180' src="../assets/images/images_test1.svg"/>
                        </div>
                        
                        
                    </div>
                    <div className="flex flex-wrap items-center justify-between h-60 bg-[linear-gradient(to_right,#EB5E55,#FFC758)] shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]  rounded-3xl">
                        
                        <div className='size-full flex flex-wrap items-center justify-between bg-[url(../assets/images/image_dices_faded.svg)] bg-no-repeat bg-cover bg-[50%_25%]'>
                            <div className="w-fit flex flex-wrap items-center justify-start  ml-8">
                                <h4 className="text-4xl text-start font-bold text-white my-4 basis-full">Real or Fake Posts?</h4>
                                <button className='text-lg font-bold bg-black py-3 px-6 text-white rounded-lg'>Play Now!</button>
                            </div>
                        <img className='relative mb-8 scale-180' src="../assets/images/images_test1.svg"/>
                        </div>
                        
                        
                    </div>


                   </div>

            </div>



        </div>

        <div className={`${selectedTip === null ? 'hidden':'fixed' } top-0 left-0 flex items-center w-screen h-screen bg-black opacity-50`} onClick={()=>setTip(null)} />


        {/* POPUP 1 */}
        <div className={`${selectedTip === 0 ? 'fixed' : 'hidden'} w-160 h-fit flex flex-col left-[calc(50vw-320px)] top-[calc(50vh-200px)] bg-white opacity-100 rounded-3xl`}>

            <div className='w-full h-full flex items-center'>
                <img className='relative w-[40%] top-10 right-10 scale-120' src="../assets/images/images_tips1.svg"/>
                <div className='pl-1 mt-8'>
                    <h3 className='text-2xl font-bold pb-6'> Viewing Social Media Posts</h3>

                    <div className='flex items-center py-2'>
                        <p className='pr-2'>✅</p>
                        <p className='text-gray-400'>Check the Source before Sharing.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>🔎</p>
                        <p className='text-gray-400'>Look for Verified Accounts.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>⚠️</p>
                        <p className='text-gray-400'>Be Cautious of Sensational Headlines.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>⏳</p>
                        <p className='text-gray-400'>Pause Before Reacting. Don't Be Mistaken By Emotions.</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit flex flex-1 justify-center items-center pb-8">
                <button className='text-xl text-white font-bold bg-[linear-gradient(to_right,#EB5E55,#FFC758)] px-12 py-4 rounded-full' onClick={()=>setTip(null)}>Got it</button>
            </div>

        </div>
        {/* POPUP 2 */}
        <div className={`${selectedTip === 1 ? 'fixed' : 'hidden'} w-160 h-fit flex flex-col left-[calc(50vw-320px)] top-[calc(50vh-200px)] bg-white opacity-100 rounded-3xl`}>

            <div className='w-full h-full flex items-center'>
                <img className='relative w-[40%] top-10 right-10 scale-100' src="../assets/images/images_tips2.svg"/>
                <div className='pl-1 mt-8'>
                    <h3 className='text-2xl font-bold pb-6'> Viewing News Articles</h3>

                    <div className='flex items-center py-2'>
                        <p className='pr-2'>📰</p>
                        <p className='text-gray-400'>Read beyond the headline.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>🔗</p>
                        <p className='text-gray-400'>Check multiple sources for the same story.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>👀</p>
                        <p className='text-gray-400'>Watch out for missing details or clickbait.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>🛡</p>
                        <p className='text-gray-400'>Verify if it comes from a credible news outlet.</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit flex flex-1 justify-center items-center pb-8">
                <button className='text-xl text-white font-bold bg-[linear-gradient(to_right,#EB5E55,#FFC758)] px-12 py-4 rounded-full' onClick={()=>setTip(null)}>Got it</button>
            </div>

        </div>
        {/* POPUP 3 */}
        <div className={`${selectedTip === 2 ? 'fixed' : 'hidden'} w-160 h-fit flex flex-col left-[calc(50vw-320px)] top-[calc(50vh-200px)] bg-white opacity-100 rounded-3xl`}>

            <div className='w-full h-full flex items-center'>
                <img className='relative w-[40%] top-10 right-10 scale-100' src="../assets/images/images_tips3.svg"/>
                <div className='pl-1 mt-8'>
                    <h3 className='text-2xl font-bold pb-6'> Looking at Photos and Memes</h3>

                    <div className='flex items-center py-2'>
                        <p className='pr-2'>📷</p>
                        <p className='text-gray-400'>Photos can be edited. don’t trust them at face value.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>🔎</p>
                        <p className='text-gray-400'>Use reverse image search if unsure.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>🤣</p>
                        <p className='text-gray-400'>Memes can distort facts, double-check.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>⚠️</p>
                        <p className='text-gray-400'>Watch out for misleading captions.</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit flex flex-1 justify-center items-center pb-8">
                <button className='text-xl text-white font-bold bg-[linear-gradient(to_right,#EB5E55,#FFC758)] px-12 py-4 rounded-full' onClick={()=>setTip(null)}>Got it</button>
            </div>

        </div>
        {/* POPUP 4 */}
        <div className={`${selectedTip === 3 ? 'fixed' : 'hidden'} w-160 h-100 flex flex-col left-[calc(50vw-320px)] top-[calc(50vh-200px)] bg-white opacity-100 rounded-3xl`}>

            <div className='w-full h-full flex items-center'>
                <img className='relative w-[40%] top-10 right-10 scale-110' src="../assets/images/images_tips4.svg"/>
                <div className='pl-1 mt-8'>
                    <h3 className='text-2xl font-bold pb-6'> Forwarded Messages</h3>

                    <div className='flex items-center py-2'>
                        <p className='pr-2'>✅</p>
                        <p className='text-gray-400'>“Forwarded many times” doesn’t mean it’s true.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>💯</p>
                        <p className='text-gray-400'>Verify with official sources before believing.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>🚫</p>
                        <p className='text-gray-400'> Don’t forward unless you’re sure it’s accurate.</p>
                    </div>
                    <div className='flex items-center py-2'>
                        <p className='pr-2'>🤔</p>
                        <p className='text-gray-400'>Always ask: “Who made this and why?”</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit flex flex-1 justify-center items-center pb-8">
                <button className='text-xl text-white font-bold bg-[linear-gradient(to_right,#EB5E55,#FFC758)] px-12 py-4 rounded-full' onClick={()=>setTip(null)}>Got it</button>
            </div>

        </div>


    </div>
  )
}

export default FactCheckPage