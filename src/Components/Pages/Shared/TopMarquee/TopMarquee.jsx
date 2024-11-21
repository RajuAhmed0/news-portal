import React from 'react';
import Marquee from 'react-fast-marquee';

const TopMarquee = () => {
    return (
        <div>
            <div className='flex items-center md:gap-5 gap-2 bg-[#F3F3F3] md:p-4 p-2 md:mt-[30px] mt-3'>
                <button className='bg-[#D72050] md:text-xl text-base font-medium text-[#FFFFFF] md:px-6 px-3 md:py-[9px] py-1'>Letest</button>
                <Marquee speed={80} pauseOnHover={true}>
                    <p className='text-[#403F3F] md:text-lg text-sm font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
        </div>
    );
};

export default TopMarquee;