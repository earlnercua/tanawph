import React from 'react'
import { Link } from 'react-router';

import { officialsArray } from '../lib/officialsUtilities'

const OfficialsList = () => {
  return (
    <div className='screen pb-12'>
            <div className="w-full">
                    <div className="w-full flex flex-wrap items-center justify-start gap-4">
                        {officialsArray.tabs.map((tab, i) => (
                            <div key={i} className="basis-full">
                                <Link to={`/government/officials/${tab.id}`} className="w-full h-2xl flex items-center justify-start rounded-2xl shadow-[0px_0px_3px_3px_rgba(50,50,50,0.125)] py-6 overflow-hidden">
                                    <img
                                        className="size-full scale-168 w-auto ml-8"
                                        src={tab.img}
                                        alt={tab.name}
                                    />
                                    <div className="ml-12">
                                        <h3 className="text-xl font-bold uppercase">{tab.name}</h3>
                                        <p className="pb-1">{tab.position}</p>
                                        <p className="text-sm text-gray-400">{tab.level}</p>
                                        <p className="text-sm text-gray-400">{tab.duration}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
            </div>
    </div>
  )
}

export default OfficialsList