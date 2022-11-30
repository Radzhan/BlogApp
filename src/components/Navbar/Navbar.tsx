import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar navbar-expand-sm" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <span className="navbar-brand">Blog</span>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/add" className="nav-link">
                                    Add
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contacts" className="nav-link">
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;