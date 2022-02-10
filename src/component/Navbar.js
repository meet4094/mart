import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-2" href="/">LA COLLECTION</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Product">
                                    Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/About">
                                    About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Contact">
                                    Contact</a>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <a href='/Login' className='btn btn-outline-dark'>Login
                                {/* <i className="fas fa-sign-in"></i> */}
                            </a>
                            <a href='/Register' className='btn btn-outline-dark ms-2'>Register
                                {/* <i className="fas fa-user-plus"></i> */}
                            </a>
                            <a href='/Cart' className='btn btn-outline-dark ms-2'>Cart (0)
                                {/* <i className="fas fa-shopping-cart"></i> */}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
