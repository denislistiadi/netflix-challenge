import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const[show, handleShow] = useState();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        };
    };

    useEffect(() =>{
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
                <img 
                    className="nav__logo" 
                    src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png"
                    alt="logo"
                /> 

                <img 
                    className="nav__avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                    alt="avatar"
                />
            </div>
        </div>
    )
}

export default Nav;
