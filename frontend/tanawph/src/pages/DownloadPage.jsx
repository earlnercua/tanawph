import React from 'react'
import { useParams } from 'react-router';


const DownloadPage = () => {
  const { imageName } = useParams();
  const imageUrl = `../src/assets/images/${imageName}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#2F2F2F]">
      <img src={imageUrl} alt={imageName} className="mb-4" />
      <a href={imageUrl} download className="text-2xl font-bold px-8 py-4 bg-[linear-gradient(to_right,#EB5E55,#FFC758)] text-white rounded-full">
        Download
      </a>
    </div>
  );
}


export default DownloadPage