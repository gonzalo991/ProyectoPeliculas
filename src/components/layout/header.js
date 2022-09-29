import { Link, Outlet } from 'react-router-dom';
import React from 'react';

function Header() {
    return (
        <header className='nav-header'>
                <h1 className='titulo'>Cinema<span className='span-titulo'>Center</span></h1>
        
            <nav className='navbar' style={{display:'flex',justifyContent:'space-around'}}>
                <Link className='navbar-link' to='/home'>Home</Link>
                <Link className='navbar-link' to='/movies'>Peliculas</Link>
            </nav>

            <Outlet />
        </header>
    )
}

export default Header;