import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar";
import { services } from "../lib/servicesUtils"
import GenericList from "../components/GenericList";

const EServicesPage = () => {


    const content = services[1];
    return (
        <div className="h-screen">
            <Navbar/>

            <div className="w-full flex items-start justify-center pt-12">
                <div className="w-2xl">
                    <Link className="flex basis-full items-center justify-start pb-4" to='/government'>
                        <ChevronLeft className="size-6 stroke-[#F57F6D] stroke-3" />
                        <h3 className="text-2xl font-bold">E-Services</h3>
                    </Link>
                    <SearchBar/>
                    <GenericList array={content}/>
                </div>
            </div>
            
        </div>
    )
}

export default EServicesPage
