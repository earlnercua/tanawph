import React from 'react'
import{Triangle} from 'lucide-react';
import { useState } from 'react';


const politicalPlatformsArray = [
  {
    title:"Placeholder Title",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    title:"Placeholder Title 3",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    title:"Placeholder Title 3",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    title:"Placeholder Title 4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
];


function Accordion() {


  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(null);


  const toggle = (i) => {
    if(selected == i){
      return setSelected(null);
    }

    setSelected(i);
  }




  return (

    <div className='w-2xl h-auto py-8'>
    

      {politicalPlatformsArray.map((item, i)=>{

        return (
          <div className='my-4 border'>
            <div className='flex items-center justify-between border py-4' onClick={()=>toggle(i)}>
              <h2 className='pl-5 uppercase d-ni font-black'>{item.title}</h2>
              <span className='pr-5 font-bold'>
                <Triangle className={`size-4 stroke-0 fill-black transition-transform ${selected === i? 'rotate-180': 'rotate-270'}`}/>
              </span>
            </div>
            
            <div className={`transition-transform  ${selected === i ? 'w-fit': 'w-0'}`}>
              <p className={`${selected === i ? 'p-5' : 'hidden'}`}>{item.content}</p>
            </div>


          </div>
        )

})}
    </div>
  )
}



export default Accordion