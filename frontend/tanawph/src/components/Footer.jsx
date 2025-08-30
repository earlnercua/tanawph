import React from 'react'

const Footer = () => {
  return (
    <div className='w-2xl'>
        <div className="flex items-center justify-end border-b-1 border-gray-400 space-x-4 py-4">

            <a href=''>
                <img src="../assets/images/icons_facebook_colored.svg" className='size-6'/>
            </a>
            <a href=''>
                <img src="../assets/images/icons_tiktok_colored.svg" className='size-6'/>
            </a>
            <a href=''>
                <img src="../assets/images/icons_instagram_colored.svg" className='size-6'/>
            </a>
            <a href=''>
                <img src="../assets/images/icons_x_colored.svg" className='size-6'/>
            </a>
        </div>
        <div className="w-full flex items-center justify-between py-6">
            <p>© 2025 TanawPH. All rights reserved.</p>
            <h4 className='font-bold text-2xl bg-[linear-gradient(to_right,#EB5E55,#FFC758)] bg-clip-text text-transparent'>TanawPH</h4>
        </div>
    </div>
  )
}

export default Footer