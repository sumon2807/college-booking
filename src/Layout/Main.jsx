import React from 'react';
import { Outlet, useLocation} from 'react-router-dom'
import Footer from '../Pages/Sheard/Footer';
import Navbar from '../Pages/Sheard/Navbar';

const Main = () => {
    const location=useLocation();
    const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;