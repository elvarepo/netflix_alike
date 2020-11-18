import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll", handleShow, false);
        };
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
                src="https://pngimg.com/uploads/netflix/netflix_PNG23.png"
                alt="Netflix Logo"
            />
            <img className="nav_avator"
                src="https://pngimg.com/uploads/netflix/netflix_PNG23.png"
                alt="Netflix Logo" />
        </div >
    );
}

export default Nav;