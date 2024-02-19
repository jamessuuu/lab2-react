import React, { useState, useEffect } from "react";

function HeaderNotif() {
  const [content, setContent] = useState({
    text: "FREE SHIPPING ORDERS 75+ (US)",
    backgroundColor: "black",
    textColor: "white",
  });

  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalContent = setInterval(() => {
      setContent({
        text: "GET IT FOR $5 - CODE: LOVE",
        backgroundColor: "red",
        textColor: "white",
      });
    }, 2000);

    const intervalDateTime = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(intervalContent);
      clearInterval(intervalDateTime);
    };
  }, []);

  return (
    <div
      className="header-notif"
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: content.backgroundColor,
        color: content.textColor,
      }}
    >
      <span style={{ flex: 1, textAlign: "center", marginLeft: "200px" }}>
        {content.text}
      </span>
      <span style={{ marginRight: "20px" }}>{dateTime}</span>
    </div>
  );
}

export default HeaderNotif;
