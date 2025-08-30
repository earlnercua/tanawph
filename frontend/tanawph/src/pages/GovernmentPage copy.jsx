import React from 'react'
import { ChevronRight } from 'lucide-react';
import { Link} from 'react-router'

import Navbar from '../components/Navbar';
import TopMenu from '../components/TopMenu';


const content =[
    {
        title:'Officials',
        tabs: [
        {
            name:'Manuelito Cruz',
            position:'President',
            level: 'National',
            duration:'2022-2028',
            img: '../assets/images/image_official_placeholder1.png'
        },
        {
            name:'Maria Elena Dizon',
            position:'Vice President',
            level: 'National',
            duration:'2022-2028',
            img: '../assets/images/image_official_placeholder2.png'
        }]
    },
    {
        title:'Services',
        tabs:[
            {
                label:'Government Help',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                label:'E-Services',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                label:'Election Information',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        ]
    }
]

const GovernmentPage = () => {

  return (
    <div className='h-screen'>
        <Navbar />

        <div className="h-full flex flex-col items-center justify-start py-8">
            <TopMenu />

            <div className="w-2xl h-fit flex items-center justify-center my-16">
                {content.map((section, i)=>{
                    return (
                    
                        <div>
                                <div className='flex items-center justify-start basis-full'>
                                    <h4 className='text-2xl font-bold pr-2'>{section.title}</h4>
                                    <ChevronRight className='size-6 stroke-[#F57F6D] stroke-3'/>
                                </div>

                                


                                {if(section.title === 'Officials'){


                                    <div key={i} className="w-full h-fit flex flex-wrap items-center justify-center">

                                    
                                    
                                        <div className='w-full flex flex-wrap items-center justify-start'>

                                            {section.tabs.map((tab, j)=>(
                                                <div key={j} className='basis-full'>


                                                    <div className='w-full h-2xl flex items-center justify-start rounded-2xl shadow-[0px_0px_4px_4px_rgba(50,50,50,0.125)] py-6 my-4 overflow-hidden'>

                                                        <img className='size-full scale-168 w-auto ml-8' src={tab.img}/>
                                                        <div className='ml-12'>
                                                        <h3 className="text-xl font-bold uppercase">{tab.name}</h3>
                                                        <p className='pb-1'>{tab.position}</p>
                                                        <p className='text-sm text-gray-400'>{tab.level}</p>
                                                        <p className='text-sm text-gray-400'>{tab.duration}</p>
                                                    </div>

                                                    </div>
                                        
                                                    
                                                </div>
                                                

                                            ))}
                                    </div>

                    
                                    
                        }else if(section.title === 'Services'){}
                    }
                    </div>
                )})}        


                        </div>
                    

                        
            </div>
        </div>
    </div>
    
            )
}

export default GovernmentPage