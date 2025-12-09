import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";
// import aboutImage from "./your-about-image.jpg"; 

const about = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    // check user already in local storage
    const name = localStorage.getItem('name');
    if(name){
      navigate('/Gallery')
      return;
    }
    else{
      alert("LogIn is required for viewing the Gallery!")
      navigate('/LogIn')
      return;
    }
  }
  return (
    <>
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At FloraFable, we are passionate about bringing the beauty of nature into your everyday life.
          Our floral creations are carefully curated to inspire joy, color and serenity. Whether it’s fresh blooms,
          arrangements or floral-inspired designs, our mission is to make every moment blossom with happiness.
        </p>
        {/* <img src={aboutImage} alt="Beautiful flowers or team" /> */}
        <button onClick={handleClick}>View Our Products</button>
      </section>
    </>
  );
};

export default about;
