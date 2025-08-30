import React from 'react'



const GenericList = ({array}) => {

  return (


    <div className='flex flex-col'>
        {array.tabs.map((tab, i)=>{
        return (
            <div key={i} >
                <p className='font-bold text-xl'>{tab.type}</p>

                <div className="grid grid-cols-2 gap-6 my-12">
                    {tab.content.map((service, j)=>{
                        return (
                            <a href={service.link} 
                            target={service.link === '' ? '' : '_blank'} 
                            rel="noopener noreferrer" 
                            key={j} 
                            className='w-auto h-[60vh] bg-[linear-gradient(to_right,#EB5E55,#FFC758)] rounded-4xl overflow-hidden shadow-[0px_0px_5px_2px_rgba(0,0,0,0.25)] text-white'>
                                <img src={service.img} alt={`${service.name}_Logo.svg`} className='w-full' />
                                <h4 className='font-bold text-xl m-4'>{service.name}</h4>
                                <p className='mx-4'>{service.description}</p>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    })}
    </div>
  )
}

export default GenericList