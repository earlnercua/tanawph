import React from 'react';
import { useState } from 'react'
import {FlagTriangleRight, UserRound, Landmark, Clock, Forward, Megaphone, LibraryBig, BookCheck, Search} from 'lucide-react'

import Navbar from '../components/Navbar';
import Accordion from '../components/Accordion';
import TopMenu from '../components/TopMenu';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const HomePage = () => {


  const [selectedSection, setSelectedSection] = useState(null);

  const handleSelect = (i) => {setSelectedSection(i)}


  return (
    <div className='h-screen'>
      <Navbar />
      <div className="h-full flex flex-col items-center justify-start py-8">


      {/* TOP MENU */}
      <TopMenu />


        {/* SEARCH BAR */}
        <SearchBar />

        {/* SPACER */}
        <div className="w-2xl h-2xl"></div>

        {/* HERO */}

        <div className="w-2xl h-fit flex flex-wrap items-center justify-center">

          <div className="w-2xl h-fit flex flex-wrap items-center justify-center">

            <div className="flex items-center justify-center basis-full">
              <h2 className='text-xl'>Powered By</h2>
            <img className='size-20 ml-2' src="./assets/images/icon_tawi.svg" alt="" />
            </div>

            <h1 className='text-7xl font-bold text-center pb-8'>Don't scroll blind. Take back your power.</h1>

            <p className='text-gray-500'>Your all-in-one tool for government and MIL information </p>
          
          </div>

          {/* IMAGES */}
          <div className="w-4xl h-fit flex items-center justify-around py-12">


            <div className="w-1/3 flex flex-col items-center justify-center">
              <img className='size-50 w-auto' src="./assets/images/image_hero1.svg"/>
              <h4 className='text-2xl font-bold text-center bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent pb-8'>4 Volunteers In Action</h4>
            </div>
            
            <div className="w-1/3 flex flex-col items-center justify-center">
              <img className='size-50 w-auto' src="./assets/images/image_hero2.svg"/>
              <h4 className='w-sm text-2xl font-bold text-center bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent pb-8'>+1M Unique User Reached</h4>
            </div>

            <div className="w-1/3 flex flex-col items-center justify-center">
              <img className='size-50 w-auto' src="./assets/images/image_hero3.svg"/>
              <h4 className='text-2xl font-bold text-center bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent pb-8'>5 Min. Average Session Time</h4>
            </div>

         </div>


        {/* SECTION 2 */}
        <h1 className='text-4xl font-bold text-center pb-8'>How We Keep It 100% Verified.</h1>
        <div className="w-2xl grid  gap-y-4">
          <div className="flex w-full text-white bg-[linear-gradient(to_right,#EB5E55,#FFC758)] rounded-full px-8 py-4">
            <img className='h-full 'src="./assets/images/image_homeverified1.png" alt="" />
            <div>
              <h4 className="font-bold text-xl">Research</h4>
              <p>Our team gathers information only from credible sources like government sites, news, and public records.</p>
            </div>
          </div>
          <div className="flex w-full text-white bg-[linear-gradient(to_right,#EB5E55,#FFC758)] rounded-full px-8 py-4">
            <img className='h-full 'src="./assets/images/image_homeverified2.png" alt="" />
            <div>
              <h4 className="font-bold text-xl">Verification</h4>
              <p>Every fact is double-checked by our head researchers to confirm accuracy. </p>
            </div>
          </div>
          <div className="flex w-full text-white bg-[linear-gradient(to_right,#EB5E55,#FFC758)] rounded-full px-8 py-4">
            <img className='h-full 'src="./assets/images/image_homeverified3.png" alt="" />
            <div>
              <h4 className="font-bold text-xl">Simplified for You</h4>
              <p>We rewrite complex data into clear, easy-to-read summaries without losing accuracy.</p>
            </div>
          </div>
          <div className="flex w-full text-white bg-[linear-gradient(to_right,#EB5E55,#FFC758)] rounded-full px-8 py-4">
            <img className='h-full 'src="./assets/images/image_homeverified4.png" alt="" />
            <div>
              <h4 className="font-bold text-xl">Citation</h4>
              <p>Each piece of information comes with a source link so you can check it yourself.</p>
            </div>
          </div>
          <div className="flex w-full text-white bg-[linear-gradient(to_right,#EB5E55,#FFC758)] rounded-full px-8 py-4">
            <img className='h-full 'src="./assets/images/image_homeverified5.png" alt="" />
            <div>
              <h4 className="font-bold text-xl">Regular Updates</h4>
              <p>We keep track of changes and update the platform so you’re always looking at the latest information.</p>
            </div>
          </div>
        </div>
          
        {/* SECTION 3 */}
        <div className="flex space-x-4 mt-[40vh] mb-6">
            <h1 className='text-4xl font-bold'>About</h1>
            <h1 className='text-4xl font-bold bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent'>TanawPH</h1>
        </div>
        
        <div className="w-2xl text-center inline space-x-2">
            <span className='font-bold bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent'>TanawPH</span>
            <span>is a youth-led platform that helps Filipinos stay informed and safe online. We provide verified civic information, tools, and resources that strengthen Media and Information Literacy (MIL) to fight misinformation and digital dangers.</span>
        </div>


        {/* SECTION 4 */}

        <div className="w-2xl mt-[40vh]">
          <h2 className='font-bold text-4xl text-center '>What we offer</h2>
          <div className="w-full grid space-y-12">

            <div className="flex">
              <div className="flex-1 mr-8">
                <h4 className='font-bold text-2xl bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent'>Officials & Candidates</h4>
                <p>Search verified profiles of leaders, parties, and candidates with their background, experience, and advocacies.</p>
              </div>
              <img src="./assets/images/image_homeoffer1.svg" alt="" />
            </div>
            <div className="flex">
              <img src="./assets/images/image_homeoffer2.svg" alt="" />
              <div className="flex-1 ml-8">
                <h4 className='font-bold text-2xl bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent'>MIL Resources</h4>
                <p>Access infographics, classroom-ready games, and real cases of digital dangers to learn smarter media habits.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 mr-8">
                <h4 className='font-bold text-2xl bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent'>Fact Check Tools</h4>
                <p>Search verified profiles of leaders, parties, and candidates with their background, experience, and advocacies.</p>
              </div>
              <img src="../assets/images/image_homeoffer2.svg" alt="" />
            </div>
            <div className="flex">
              <img src="../assets/images/image_homeoffer2.svg" alt="" />
              <div className="flex-1 ml-8">
                <h4 className='font-bold text-2xl bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent'>Youth Empowerment</h4>
                <p>Access infographics, classroom-ready games, and real cases of digital dangers to learn smarter media habits.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-1 mr-8">
                <h4 className='font-bold text-2xl bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent'>Tawi Assistant</h4>
                <p>Search verified profiles of leaders, parties, and candidates with their background, experience, and advocacies.</p>
              </div>
              <img className='h-full' src="../assets/images/image_homeoffer3.svg" alt="" />
            </div>

          </div>
        </div>

        {/* SECTION 5 */}
        <div className="w-2xl my-[40vh]">
          <div className="flex space-x-2">
            <h2 className='font-bold text-4xl'>Be a</h2>
            <h2 className='font-bold text-4xl bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent'>TanawPH</h2>
            <h2 className='font-bold text-4xl'>volunteer</h2>
          </div>
          <p className='py-6'>Join us in the fight against misinformation and digital dangers. As a volunteer, you’ll help create resources, share verified information, and empower fellow youth to think critically.</p>
          <p className='font-bold bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent py-6'> Stand with us—be part of the change today!</p>
          <p className='size-fit font-bold bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent cursor-pointer shadow-lg rounded-full px-4 py-2'> Become a Volunteer</p>
        </div>



      </div> 
              <Footer/>
    </div>

    


  </div>
  )
}

export default HomePage