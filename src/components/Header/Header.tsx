import React from "react";
import './Header.css';
import BurgerMenu from "./BurgerMenu";

const Header = () => {
    return (
        <div className="wrapper">
            <BurgerMenu wrapClass={'wrapPage'} wrapperClass={'wrapper'}/>
            <div className="wrapPage">
            <div className="header">
                <span>
                    <i className="fa-regular fa-user headerItem"></i>
                </span>
                <span className="headerUser">Username</span>
            </div>
            </div>
        </div>
    );
};

export default Header;