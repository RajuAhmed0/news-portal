import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeLeftNav = ({ data }) => {
    return (
        <div className=''>

            <NavLink
                to={`/${data.route}`}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-[#E7E7E7] rounded-[5px] pl-[50px] pr-4 py-[17px] text-xl font-semibold text-[#403F3F]" : "ml-[50px] text-xl font-medium text-[#9F9F9F]"} >
                {data.name}
            </NavLink>
        </div>
    );
};

export default HomeLeftNav;