import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const AlertCard = ({ address, mobile, email ,handleContactAlert}) => {
  return (
    <div className="bg-white md:shadow-lg  rounded-lg overflow-hidden w-[22rem] h-[14rem] md:h-[12rem] md:w-[24rem] fixed md:top-1/3 left-3 top-[10rem] md:left-[35%]">
      <div className=' p-2 flex justify-end' onClick={()=>handleContactAlert()}>
      <RxCross1 className='cursor-pointer' size={24} />

      </div>
      <div className="px-3 ">
        <h2 style={{fontFamily:'monospace'}} className="text-xl font-bold text-center text-gray-800">CONTACT INFO</h2>
        <div className="mt-4 space-y-2">
          <p className="text-gray-600">
            <span className="font-bold">Address:</span> <span className=''>{address}</span> 
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Mobile No :</span> {mobile}
          </p>
          <p className="text-gray-600">
            <span className="font-bold ">Email :</span> {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
