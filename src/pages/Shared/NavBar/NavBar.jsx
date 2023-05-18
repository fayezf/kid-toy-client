import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../assets/logo.svg';

const NavBar = () => {

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/all">All Toys</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {/* {user?.email ? <>
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><button>Log out</button></li>
        </>
            : <li><Link to="/login">Login</Link></li>
        } */}
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    {/* <img  src={logo} alt="" /> */}
                    <h3 className='text-2xl font-semibold'><span className='text-lime-400'>Edu</span><span className='text-orange-500'>K</span>it</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn btn-outline btn-accent'><Link to="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default NavBar;