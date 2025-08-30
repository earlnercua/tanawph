import { Moon } from 'lucide-react';
import { Link } from 'react-router';


const Navbar = () => {
  return (

    <header className='flex justify-center bg-base-300 shadow-[0px_1px_3px_3px_rgba(0,0,0,0.25)]'>
      <div className="w-2xl flex items-center justify-around p-4">
        <div className="w-100 flex items-center justify-start">
          
          <Link to='/' className="text-3xl font-bold text-primary bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent">
            TanawPH</Link> 
        </div>

        <p>About</p>
        <p>Organization</p>
        <Moon className='stroke-none fill-black'/>
      </div>
    </header>
  )
}

export default Navbar