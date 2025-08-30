import React from 'react'

import { ChevronLeft, CalendarDays } from 'lucide-react'
import { Link } from 'react-router'

import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import { fakeNewsAlerts } from '../lib/fakeNewsUtils'

const FakeNewsAlertsPage = () => {
  return (
     <div className="h-screen">
            <Navbar/>
        <div className="w-full flex items-start justify-center py-12">
            <div className="w-2xl">
                <Link className="flex basis-full items-center justify-start pb-4" to='/government'>
                    <ChevronLeft className="size-6 stroke-[#F57F6D] stroke-3" />
                    <h3 className="text-2xl font-bold">Fake News Alerts</h3>
                </Link>
                <SearchBar/>


                <div className="space-y-4">
                {fakeNewsAlerts.map((item, i) => (
                    <Link
                        key={i}
                        to={`/government/fake-news-alerts/${item.id}`}
                        className="w-full block bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex border-b border-gray-200">
                        <img className="w-24 h-24 object-cover" src={item.img} alt={item.title} />
                        <div className="flex-1 p-4">
                            <h4 className="font-bold text-xl">{item.title}</h4>
                            <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center text-gray-400 text-sm">
                                <CalendarDays className="w-4 h-4 mr-1" />
                                <span>{item.date}</span>
                            </div>
                            <span className="text-white bg-gradient-to-r from-[#EB5E55] to-[#FFC758] rounded-full px-2 text-sm">
                                {item.type}
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="p-4 text-gray-600">
                        <span>{item.content}</span>
                        <span className="text-gray-400"> ...more</span>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FakeNewsAlertsPage