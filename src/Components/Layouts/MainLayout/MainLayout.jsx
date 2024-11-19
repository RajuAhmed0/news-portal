import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-[1140px] xl:mx-auto mx-2'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;