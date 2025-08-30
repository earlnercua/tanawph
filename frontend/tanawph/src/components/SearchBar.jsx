import React from 'react'

import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className="w-2xl h-fit flex items-center justify-start border-2 border-gray-200 rounded-full my-6 py-2">

        <Search className=' size-4 mx-4 stroke-gray-400' />
        <input className='flex-1 text-gray-400' placeholder='Find verified information'/>
    </div>
  )
}

export default SearchBar