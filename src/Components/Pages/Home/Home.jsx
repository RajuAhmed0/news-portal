import React from 'react';
import { BsBookmark } from 'react-icons/bs';
import { IoMdShare } from 'react-icons/io';

import { IoCalendarClearOutline } from 'react-icons/io5';


const Home = () => {
    return (
        <div className='flex mt-[76px] gap-6'>
            <div className='max-w-[267px]  font-poppins'>
                <h2 className='text-[#403F3F] text-xl font-semibold mb-5'>All Caterogy</h2>
                <h2 className='text-[#403F3F] text-xl font-semibold bg-[#E7E7E7] py-[17px] pl-[50px] rounded-[5px]'>National News</h2>
                <div className='flex flex-col ml-[50px] gap-[30px] mt-[30px]'>
                    <p className='text-[#9F9F9F] text-xl font-medium'>Breaking News</p>
                    <p className='text-[#9F9F9F] text-xl font-medium'>Regular News</p>
                    <p className='text-[#9F9F9F] text-xl font-medium'>International News</p>
                    <p className='text-[#9F9F9F] text-xl font-medium'>Sports</p>
                    <p className='text-[#9F9F9F] text-xl font-medium'>Entertainment</p>
                    <p className='text-[#9F9F9F] text-xl font-medium'>Culture</p>
                    <p className='text-[#9F9F9F] text-xl font-medium'>Arts</p>
                    <p className='text-[#9F9F9F] text-xl font-medium'>All News</p>
                </div>
                <div>
                    <div className='mt-[30px]'>
                        <img src="https://i.ibb.co.com/Nt5H7GX/1.png" alt="" />
                        <p className='text-[#403F3F] text-xl font-semibold my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className='flex gap-5'>
                            <p className='text-[#403F3F] font-medium'>Sports</p>
                            <div className='flex items-center text-[#9F9F9F] gap-[10px]'>
                                <IoCalendarClearOutline />
                                <p className='font-medium'>Jan 4, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <img src="https://i.ibb.co.com/ftXmGqd/2.png" alt="" />
                        <p className='text-[#403F3F] text-xl font-semibold my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className='flex gap-5'>
                            <p className='text-[#403F3F] font-medium'>Sports</p>
                            <div className='flex items-center text-[#9F9F9F] gap-[10px]'>
                                <IoCalendarClearOutline />
                                <p className='font-medium'>Jan 4, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <img src="https://i.ibb.co.com/W0FcbR5/3.png" alt="" />
                        <p className='text-[#403F3F] text-xl font-semibold my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className='flex gap-5'>
                            <p className='text-[#403F3F] font-medium'>Sports</p>
                            <div className='flex items-center text-[#9F9F9F] gap-[10px]'>
                                <IoCalendarClearOutline />
                                <p className='font-medium'>Jan 4, 2022</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='max-w-[558px] font-poppins'>
                <h2 className='text-[#403F3F] text-xl font-semibold'>Dragon News Home</h2>
                <div className="rounded-[5px] border border-[#E7E7E7] mt-5">
                    <div className="flex items-center p-4 bg-[#F3F3F3] justify-between">
                        <div className="ml-4">
                            <img src="" alt="" />
                            <h2 className="text-[#403F3F] font-semibold">Awlad Hossain</h2>
                            <p className="text-sm text-[#706F6F]">2022-08-21</p>
                        </div>
                        <div className='flex gap-[10px]'>
                        <BsBookmark className='text-2xl' />
                        <IoMdShare className='text-2xl' />
                        </div>
                    </div>
                    <div className='p-5'>
                        <h3 className="text-xl font-bold text-[#403F3F] mb-5">
                            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
                            Aid Package Yet</h3>
                        <img src="" alt="" />
                        <div className="mt-8">
                            <p className="text-[#706F6F] leading-[26px]">
                                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
                                Joe Biden, Military, News, Russia, Security, UK, Ukraine, United
                                States, Worthy News (Worthy News) – U.S. President Joe Biden has
                                announced nearly $3 billion in new U.S. military a...
                            </p>
                            <p className='text-[#FF8C47] font-semibold'>Read More</p>

                        </div>
                        <div className='border-t my-5'></div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-yellow-500">&#9733;</span>
                                <span className="ml-1 text-sm text-gray-600">4.9</span>
                            </div>
                            <span className="text-sm text-gray-500">499 views</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;