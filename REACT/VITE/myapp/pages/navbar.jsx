import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className='flex justify-evenly bg-purple-500 text-white text-xl'>
                <Link to="/home">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Error</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
}

export default Navbar;