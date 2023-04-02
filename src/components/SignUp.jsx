import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    const [username, setUsername] = useState('mor_2314');
    const [password, setPassword] = useState('83r5^_');
    const [confirmPassword, setConfirmPassword] = useState('83r5^_');
    const [loading, setloading] = useState(
            <button type="submit">
                <span>Sign Up</span>
            </button>
        )

    const handleSubmit = (event) => {
        event.preventDefault();
        getLogin()
        setloading(<div className="lds-ring"><div></div><div></div><div></div><div></div></div>)
    };

    const body = {
        username: username,
        password: password
    }
    function getLogin() {
        axios.post('https://fakestoreapi.com/auth/login', body)
            .then(data => {
                console.log(data)
                window.localStorage.setItem('token', data.data.token)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="inner">
            <Link to="/" className="logo">
                <img src="https://www.svgrepo.com/show/228332/shopping-cart.svg" className="bi me-2" width="80" height="80" aria-label="Bootstrap" alt="logo" />
            </Link>
            <div className="sign-up-page">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder='Username'
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder='Password'
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        placeholder='Confirm Password'
                        required
                    />
                    </div>
                    {
                        loading
                    }
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;