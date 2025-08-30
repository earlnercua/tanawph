import { ChevronLeft, Lightbulb, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";


import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar";
import { services } from "../lib/servicesUtils"
import SharePopup from "../components/SharePopup";

const ElectionInfoPage = () => {


    const content = services[2];
    const [countdownType, setCountdownType] = useState(0);
    const [posterPopup, setPosterPopup] = useState(null);

    return (
        <div className="h-screen">
            <Navbar/>

            <div className="w-full flex items-start justify-center py-12">
                <div className="w-2xl">
                    <Link className="flex basis-full items-center justify-start pb-4" to='/government'>
                        <ChevronLeft className="size-6 stroke-[#F57F6D] stroke-3" />
                        <h3 className="text-2xl font-bold">Election Information</h3>
                    </Link>
                    <SearchBar/>

                    <div className="w-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.125)] rounded-2xl p-2">
                        <div className="flex items-center m-4">
                            <Lightbulb className='size-5 stroke-2'/>
                            <h4 className='text-xl font-bold'>Alam mo Ba?</h4>
                        </div>
                        <p className="m-8">Mahigit 70% ng mga mambabatas sa Pilipinas ay galing sa mga political dynasty; mga pamilya kung saan maraming kapamilya ang may hawak ng posisyon sa pamahalaan. Dahil dito, nagiging limitado ang pagkakataon para sa mga bagong lider at nagiging mahirap ang patas na representasyon.
                        </p>
                    </div>

                    <div className="w-full my-12">
                        <h3 className='font-bold text-2xl'>Posters</h3>
                        <div className='w-full grid grid-cols-2 grid-flow-row gap-8 '>
                            <div className='rounded-2xl overflow-hidden' onClick={()=>setPosterPopup(1)}>
                                <img className='w-full' src='../../assets/images/image_votingposter1.svg' />
                                <div className="relative bottom-28 w-full h-[20%] bg-[linear-gradient(to_bottom,rgba(235,94,85,0),rgba(235,94,85,1),rgba(255,199,88,1))] rounded-2xl">
                                    <h3 className='font-bold text-2xl text-white mx-6 pt-6'>How to vote for the first time</h3>
                                </div>
                            </div>
                            <div className='rounded-2xl overflow-hidden' onClick={()=>setPosterPopup(2)}>
                                <img className='w-full' src='../../assets/images/image_votingposter2.svg' />
                                <div className="relative bottom-28 w-full h-[20%] bg-[linear-gradient(to_bottom,rgba(235,94,85,0),rgba(235,94,85,1),rgba(255,199,88,1))] rounded-2xl">
                                    <h3 className='font-bold text-2xl text-white mx-6 pt-6'>How to vote for the first time</h3>
                                </div>
                            </div>
                            <div className='rounded-2xl overflow-hidden' onClick={()=>setPosterPopup(3)}>
                                <img className='w-full' src='../../assets/images/image_votingposter3.svg' />
                                <div className="relative bottom-28 w-full h-[20%] bg-[linear-gradient(to_bottom,rgba(235,94,85,0),rgba(235,94,85,1),rgba(255,199,88,1))] rounded-2xl">
                                    <h3 className='font-bold text-2xl text-white mx-6 pt-6'>How to vote for the first time</h3>
                                </div>
                            </div>
                            <div className='rounded-2xl overflow-hidden' onClick={()=>setPosterPopup(4)}>
                                <img className='w-full' src='../../assets/images/image_votingposter4.svg' />
                                <div className="relative bottom-28 w-full h-[20%] bg-[linear-gradient(to_bottom,rgba(235,94,85,0),rgba(235,94,85,1),rgba(255,199,88,1))] rounded-2xl">
                                    <h3 className='font-bold text-2xl text-white mx-6 pt-6'>How to vote for the first time</h3>
                                </div>
                            </div>
                           
                        </div>
                    </div>

                    <div className="w-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.125)] rounded-2xl px-8 py-4 mb-12">
                        <div className="w-full flex items-center justify-start my-4">
                            <MapPin className='size-5 mr-2'/>
                            <p className='font-bold text-xl'>Find your voting precinct</p>
                        </div>
                        <input placeholder='Input precinct number to find location' 
                        type="text"
                        className='w-full text-gray-400 shadow-[0px_0px_5px_2px_rgba(0,0,0,0.125)] rounded-full py-2 px-6' />
                    </div>

                    <div className="w-full shadow-[0px_15vh_5px_2px_rgba(0,0,0,0.125)]">
                        <div className='w-full h-[15vh] grid grid-cols-3 grid-flow-col gap-1'>
                            <div className={`flex items-start justify-center shadow-[0px_0px_5px_2px_rgba(0,0,0,0.125)] rounded-3xl pt-4 cursor-pointer ${countdownType === 0 ? 'bg-[linear-gradient(to_right,#EB5E55,#FFC758)] text-white font-bold' : ''}`}
                            onClick={()=>setCountdownType(0)}>
                                National Elections
                            </div>
                            <div className={`flex items-start justify-center shadow-[0px_0px_5px_2px_rgba(0,0,0,0.125)] rounded-3xl pt-4 cursor-pointer ${countdownType === 1 ? 'bg-[linear-gradient(to_right,#EB5E55,#FFC758)] text-white font-bold' : ''}`}
                            onClick={()=>setCountdownType(1)}>
                                Regional Elections
                            </div>
                            <div className={`flex items-start justify-center shadow-[0px_0px_5px_2px_rgba(0,0,0,0.125)] rounded-3xl pt-4 cursor-pointer ${countdownType === 2 ? 'bg-[linear-gradient(to_right,#EB5E55,#FFC758)] text-white font-bold' : ''}`}
                            onClick={()=>setCountdownType(2)}>
                                Provincial Elections
                            </div>

                        </div>


                        <div className="relative bottom-10 flex items-center flex-wrap justify-center w-full h-[50vh] shadow-[0px_-5px_5px_2px_rgba(0,0,0,0.125)] rounded-3xl bg-white">
                            <h3 className='font-bold text-2xl text-center basis-full' >Next Election</h3>
                            <div className="grid grid-cols-3 grid-flow-row gap-4">
                                <div className="h-[25vh] flex flex-col items-center justify-center text-2xl shadow-[0px_0px_5px_2px_rgba(0,0,0,0.125)] rounded-2xl p-4 gap-4">
                                    <p className='font-bold'>3</p>
                                    <p>Years</p>
                                </div>
                                <div className="h-[25vh] flex flex-col items-center justify-center text-2xl shadow-[0px_0px_5px_2px_rgba(0,0,0,0.125)] rounded-2xl p-4 gap-4">
                                    <p className='font-bold'>6</p>
                                    <p>Months</p>
                                </div>
                                <div className="h-[25vh] flex flex-col items-center justify-center text-2xl shadow-[0px_0px_5px_2px_rgba(0,0,0,0.125)] rounded-2xl p-4 gap-4">
                                    <p className='font-bold'>24</p>
                                    <p>Days</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
            

            <div className={`${posterPopup === null ? 'hidden':'fixed' } top-0 left-0 flex items-center w-screen h-screen bg-black opacity-50`} onClick={()=>setPosterPopup(null)} />

            <SharePopup imgUrl={`../../assets/images/image_votingposter${posterPopup}.svg`} popup={posterPopup}/>
            
        </div>
    )
}

export default ElectionInfoPage
