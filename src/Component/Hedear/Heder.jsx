import React from 'react';
import './Heder.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Heder = () => {
    return (
        <div className='Header'>
         <div className='HeaderNav'>
            <div>
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <ul className='menoPart'>
                        <Link className='links' to="/">Shop</Link>
                        <Link className='links' to="/order">Orders</Link>
                        <Link className='links' to="/inventory">Manage Inventory</Link>
                        <Link className='links' to="/login">Login</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Heder;