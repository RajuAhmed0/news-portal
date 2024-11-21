import React from 'react';
import HomeTop from '../../Pages/HomeTop/HomeTop';
import Home from '../../Pages/Home/Home';
import TopNav from '../../Pages/Shared/TopNav/TopNav';
import TopMarquee from '../../Pages/Shared/TopMarquee/TopMarquee';
import HomeLeft from '../../Pages/Home/HomeLeft/HomeLeft';
import HomeRight from '../../Pages/Home/HomeRight/HomeRight';
import { Outlet } from 'react-router-dom';


const HomeLayout = () => {
    return (
        <div>
            <HomeTop></HomeTop>
            <TopMarquee></TopMarquee>
            <TopNav></TopNav>
            <div className='flex justify-between gap-6 mt-[76px] '>
                <div className='w-[267px]'>
                    <HomeLeft></HomeLeft>
                </div>
                <Outlet></Outlet>
                <div className='w-[267px]'>
                    <HomeRight></HomeRight>
                </div>
            </div>
            <Home></Home>
        </div>
    );
};

export default HomeLayout;