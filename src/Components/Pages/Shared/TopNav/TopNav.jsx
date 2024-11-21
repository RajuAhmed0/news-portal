import React from 'react';

const TopNav = () => {
    return (
        <div>
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

export default TopNav;