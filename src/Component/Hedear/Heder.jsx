import React, { useContext } from 'react';
import './Heder.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Heder = () => {
    const {user, LogOut} = useContext(AuthContext)

    const LogOutUser=()=>{
         LogOut()
        .then(()=>{})
        .catch(error=>console.log(error.massage))
    }
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
                        <Link className='links btn btn-primary' to="/signUp">SignIn</Link>
                        <button onClick={LogOutUser} className="btn btn-primary links ml-5">LogOut</button>
                        {user && <button className="btn btn-primary links">{user.email}</button>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Heder;