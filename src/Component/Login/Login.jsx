import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const {UserLogIn}=useContext(AuthContext)

    const [error, setError]=useState()

    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email, password);
        setError('')
        form.reset('')
        UserLogIn(email, password)
        .then(result => {
            const users =result.user;
            console.log(users);
        })
        .catch(error=>{
            console.error(error.massage);
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <form onSubmit={handleLogIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <p><small>{error}</small></p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <Link to='/signUp' className="label-text-alt link link-hover">Ema-john you new user? Please SignUp</Link>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;