import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHouseUser, FaRegBuilding, FaAddressBook } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-100">
                    {/* Sidebar content here */}
                    <li><NavLink><FaHouseUser /> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/mycollege"><FaRegBuilding /> My College</NavLink></li>
                    <li><NavLink><FaHouseUser /> Payment</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHouseUser /> Home</NavLink></li>
                    <li><NavLink><FaAddressBook/> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;