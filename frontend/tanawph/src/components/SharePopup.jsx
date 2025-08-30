import React from 'react'

const SharePopup = ({imgUrl, popup}) => {

    console.log(imgUrl)
  return (
            <div className={`${(popup === false || popup === null) ? 'hidden' : 'fixed'} w-[30vw] h-[90vh] flex flex-col left-[calc(50vw-15vw)] top-[5vh] bg-white opacity-100`}>
                <img className='w-auto h-[75%] flex-2' src={imgUrl}/>
                <div className="w-full h-full flex-1 grid grid-cols-4 grid-flow-row bg-[#2F2F2F] py-4 px-8 gap-2">

                    <div className='flex flex-col items-center justify-center'>
                        <img className='size-6' src="../../../src/assets/images/icon_copy.svg"/>
                        <p className='text-white text-xs pt-2'>Copy Link</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='size-6' src="../../../src/assets/images/icon_instagram.svg"/>
                        <p className='text-white text-xs pt-2'>Messages</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='size-6' src="../../../src/assets/images/icon_instagram.svg"/>
                        <p className='text-white text-xs pt-2'>Stories</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='size-6' src="../../../src/assets/images/icon_facebook.svg"/>
                        <p className='text-white text-xs pt-2'>Stories</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='size-6' src="../../../src/assets/images/icon_facebook.svg"/>
                        <p className='text-white text-xs pt-2'>Feed</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='size-6' src="../../../src/assets/images/icon_messenger.svg"/>
                        <p className='text-white text-xs pt-2'>Messages</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='size-6' src="../../../src/assets/images/icon_x.svg"/>
                        <p className='text-white text-xs pt-2'>Posts</p>
                    </div>
                </div>

        </div>
  )
}

export default SharePopup