import React from 'react';
import { CalendarDays, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router';

import Navbar from '../components/Navbar';
import TopMenu from '../components/TopMenu';
import SearchBar from '../components/SearchBar';
import OfficialsList from '../components/OfficialsList.jsx';

import { services } from '../lib/servicesUtils.js';
import { fakeNewsAlerts } from '../lib/fakeNewsUtils.js';



const GovernmentPage = () => {
    


    return (
        <div className="h-screen">
            <Navbar />
            <div className="h-full flex flex-col items-center justify-start py-8">
                <TopMenu />
                <SearchBar/>
                <div className="w-2xl h-fit flex flex-col items-center justify-center my-16 gap-12">

                <div className="w-full">
                        <Link to='/government/fake-news-alerts' className="flex items-center justify-start">
                            <h4 className="text-2xl font-bold pr-2">Officials</h4>
                            <ChevronRight className="size-6 stroke-[#F57F6D] stroke-3" />
                        </Link>
                    <OfficialsList />
                </div>




                 <div className="w-2xl">
                    <Link className="flex basis-full items-center justify-start pb-4" to='/government/fake-news-alerts'>
                        <h3 className="text-2xl font-bold">Fake News Alerts</h3>
                        <ChevronRight className="size-6 stroke-[#F57F6D] stroke-3" />
                    </Link>

                    <div className="space-y-4">

                    {fakeNewsAlerts.map((item, i) => (
                        <Link
                            key={i}
                            to={`/government/fake-news-alerts/${item.id}`}
                            className="w-full block bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
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
                    <div className="w-full">

                    <h4 className="text-2xl font-bold pr-2">Services</h4>

                        

                    <div className="w-full flex flex-col gap-1 mt-2">
                        {services.map((tab, i) => (
                            <Link to={tab.url} key={i} className="w-full rounded-xl flex shadow-[0px_0px_4px_2px_rgba(50,50,50,0.08)] p-6 my-1 bg-white">
                                <img src={tab.thumbnail}/>
                                <div className='ml-5'>
                                    <h5 className="text-lg font-semibold">{tab.title}</h5>
                                    <p className="text-gray-500">{tab.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
            {/* </div> */}
        </div>
    );
};

export default GovernmentPage;
