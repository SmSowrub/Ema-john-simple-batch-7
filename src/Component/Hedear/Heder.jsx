import React from 'react';
import './Heder.css'
import logo from '../../images/Logo.svg'

const Heder = () => {
    return (
        <div className='Header'>
         <div className='HeaderNav'>
            <div>
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <ul className='menoPart'>
                        <li><a href="./order">Order</a></li>
                        <li><a href="./Review">Order Review</a></li>
                        <li><a href="Manage-Inventory">Manage Inventory</a></li>
                        <li><a href="./Login">Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Heder;