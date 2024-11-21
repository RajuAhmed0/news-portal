
import moment from 'moment';
import React from 'react';


const HomeTop = () => {
    return (
        <div className='font-poppins text-center md:mt-[50px] mt-6'>
            <div className='flex justify-center '>
                <img className='max-w-full' src="https://i.ibb.co.com/W5C9J8v/logo.png" alt="" />
            </div>
            <p className='text-lg text-[#706F6F] md:mt-5 mt-3'>Journalism Without Fear or Favour</p>
            <p className='text-[#403F3F] md:text-xl text-base font-medium md:mt-[10px] mt-1'>{moment().format('dddd, MMMM D, YYYY')}</p>

        </div>
    );
};

export default HomeTop;