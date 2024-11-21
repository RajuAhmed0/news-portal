import React from 'react';

const HomeMiddle = () => {
    return (
        <div>
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

export default HomeMiddle;