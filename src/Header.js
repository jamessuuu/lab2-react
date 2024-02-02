import React, { useState, useEffect } from "react";
import HeaderNotif from "./HeaderNotif";

function Header() {
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolledDown(currentScrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`header-container ${isScrolledDown ? "scrolled" : ""}`}>
            {!isScrolledDown && <HeaderNotif />}
            <div className="header">
                <img
                    className="logo"
                    src="https://rastaclat.com/cdn/shop/files/rastaclat-logo_5385c37a-59ee-4191-9f16-78c966417a8f_140x.png?v=1697310816"
                    alt="Rastaclat Logo"
                />
                <div className="side-option">
                    <div className="header-light">ACCOUNT</div>
                    <div className="header-light">SEARCH</div>
                    <div className="cart">CART &#x28; 0 &#x29;</div>
                </div>
            </div>

            <div className="menu">
                <div>
                    VALENTINES EXCLUSIVE <span>ORIGINALS</span>
                    <span>PREMIUM</span>
                    <span>CUSTOM</span>
                </div>
            </div>
        </div>
    );
}

export default Header
