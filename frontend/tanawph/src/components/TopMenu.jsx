import React from 'react';
import { useState, useEffect } from 'react';
import { Landmark, LibraryBig, BookCheck, Megaphone } from 'lucide-react';
import { Link, useLocation } from 'react-router';


const TopMenu = () => {

    
  const location = useLocation();

//   useEffect(() => {
//     console.log("Page changed to:", location.pathname);
//   }, [location]);


  return (
    <div className="w-2xl h-fit flex items-center justify-around" >

          <Link to='/government' className={`flex items-center justify-center px-2 ${location.pathname === '/government' ? 'bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent' : ''}`}>
            <Landmark className= {`size-5 mr-1 ${location.pathname === '/government'  ? 'stroke-[#F57F6D] stroke-3' : 'stroke-black'}`}/>
            <p className={`${location.pathname === '/government'  ? 'font-bold' : ''}`}>Government</p>
          </Link>
          <Link to='/mil' className={`flex items-center justify-center px-2 ${location.pathname  === '/mil' ? 'bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent': ''}`}>
            <LibraryBig className= {`size-5 mr-1 ${location.pathname === '/mil' ? 'stroke-[#F57F6D] stroke-3' : 'stroke-black'}`}/>
            <p className={`${location.pathname === '/mil' ? 'font-bold' : ''}`}>MIL</p>
          </Link>
          <Link to='/fact-check' className={`flex items-center justify-center px-2 ${location.pathname  === '/fact-check' ? 'bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent': ''}`}>
            <BookCheck className= {`size-5 mr-1 ${location.pathname === '/fact-check' ? 'stroke-[#F57F6D] stroke-3' : 'stroke-black'}`}/>
            <p className={`${location.pathname === '/fact-check' ? 'font-bold' : ''}`}>Fact Check</p>
          </Link>
          <Link to='/youth' className={`flex items-center justify-center px-2 ${location.pathname  === '/youth' ? 'bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent': ''}`}>
            <Megaphone className= {`size-5 mr-1 ${location.pathname === '/youth' ? 'stroke-[#F57F6D] stroke-3' : 'stroke-black'}`}/>
            <p className={`${location.pathname === '/youth' ? 'font-bold' : ''}`}>Youth</p>
          </Link>



        </div>
  )
}

export default TopMenu