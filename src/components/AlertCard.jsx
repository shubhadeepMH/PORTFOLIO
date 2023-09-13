import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const AlertCard = ({ address, mobile, email ,handleContactAlert}) => {
  return (
    <div className="bg-orange-500 md:shadow-lg   rounded-lg overflow-hidden w-[22rem] h-[14rem] md:h-[12rem] md:w-[24rem] fixed md:top-1/3 left-[.90rem] top-[10rem] md:left-[35%]">
      <div className=' px-2 mt-1 flex justify-end' onClick={()=>handleContactAlert()}>
      <RxCross1 className='cursor-pointer' size={24} />

      </div>
      <div className="px-3 ">
        <h2 style={{fontFamily:'monospace'}} className="text-xl font-bold text-center text-gray-800">CONTACT INFO</h2>
        <div className="mt-4 space-y-2">
          <p className="text-black">
            <span  className="font-extrabold">Address:</span> <span className='font-bold'>{address}</span> 
          </p>
          <p className="text-black">
            <span className="font-extrabold">Mobile No :</span>  <span className='font-bold'>{mobile}</span> 
          </p>
          <p className="text-black">
            <span className="font-extrabold ">Email :</span>  <span className='font-bold'> {email}</span>  
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
