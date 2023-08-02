import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import logo from '../../../assets/images/toy.png';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const navItems = <>
        <li><Link to="/" className='font-medium'>Home</Link></li>
        <li><Link to="/allToys" className='font-medium'>All Toys</Link></li>
        <li><Link to="/addToys" className='font-medium'>Add a Toy</Link></li>
        <li><Link to="/myToys" className='font-medium'>My Toy</Link></li>
        <li><Link to="/blogs" className='font-medium'>Blogs</Link></li>
        <li><Link to="/about" className='font-medium'>About</Link></li>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-violet-200 h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <img style={{ width: '160px' }} src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                {
                    user &&
                    <div className="avatar online">
                        <div className="w-18 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img title={user.displayName} style={{ height: '30px' }} src={user.photoURL} />
                        </div>
                    </div>
                }

                {user ? <button onClick={handleLogout} className="btn">Log Out</button> :
                    <Link to='/login'> <button className="btn">Login</button></Link>}

            </div>
        </div>
    );
};

export default NavBar;