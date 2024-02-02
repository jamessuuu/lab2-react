import React, { useState, useEffect } from 'react';

function HeaderNotif() {
    const [content, setContent] = useState({
        text: "FREE SHIPPING ORDERS 75+ (US)",
        backgroundColor: "black",
        textColor: "white"
    });

    useEffect(() => {
        const interval = setInterval(() => {
            // Change the content every 2 seconds
            setContent({
                text: "GET IT FOR $5 - CODE: LOVE",
                backgroundColor: "red",
                textColor: "white"
            });
        }, 2000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run effect only once

    return (
        <div className="header-notif" style={{ backgroundColor: content.backgroundColor, color: content.textColor }}>
            {content.text}
        </div>
    );
}

export default HeaderNotif;
