
import moment from 'moment';
import React from 'react';
import Marquee from 'react-fast-marquee';

const HomeTop = () => {
    return (
        <div className='font-poppins text-center md:mt-[50px] mt-6'>
            <div className='flex justify-center '>
                <img className='max-w-full' src="https://i.ibb.co.com/W5C9J8v/logo.png" alt="" />
            </div>
            <p className='text-lg text-[#706F6F] md:mt-5 mt-3'>Journalism Without Fear or Favour</p>
            <p className='text-[#403F3F] md:text-xl text-base font-medium md:mt-[10px] mt-1'>{moment().format('dddd, MMMM D, YYYY')}</p>
            <div className='flex items-center md:gap-5 gap-2 bg-[#F3F3F3] md:p-4 p-2 md:mt-[30px] mt-3'>
                <button className='bg-[#D72050] md:text-xl text-base font-medium text-[#FFFFFF] md:px-6 px-3 md:py-[9px] py-1'>Letest</button>
                <Marquee speed={80} pauseOnHover={true}>
                    <p className='text-[#403F3F] md:text-lg text-sm font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
            <div className='flex items-center justify-between mt-[21px]'>
                <div className='flex text-center md:gap-4 gap-2 text-[#706F6F] md:text-lg text-base xl:ml-[473px] lg:ml-[400px] md:ml-[260px]'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Career</p>
                </div>
                <div className='flex gap-[9px]'>
                    <img className='md:w-[41px] w-9 ' src="https://i.ibb.co.com/9nsZghD/user.png" alt="" />
                    <button className='bg-[#403F3F] text-white md:text-xl text-base font-semibold md:px-[42.5px] px-5 md:py-[7px] py-1'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default HomeTop;