import React, { useState, useEffect } from "react";

function Home() {
  return (
    <div>
      <Carousel />
    </div>
  );
}

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://rastaclat.com/cdn/shop/files/ORIGINALSHOMEPAGE_valentines_2000x.jpg?v=1704919432",
    "https://rastaclat.com/cdn/shop/files/flashsale_1800_800_2000x.jpg?v=1708016407",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <img className="home-pic" src={images[currentIndex]} alt="Carousel" />;
}

export default Home;
