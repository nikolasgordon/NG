import "../App.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import art1 from "../imgs/art.jpg";
import art2 from "../imgs/art2.jpg";
import art3 from "../imgs/art3.jpg";


function Home() {
  const [value, setInt] = useState(1);
  useEffect(() => {
    //god bless setInterval
    document.title ="Nikolas Gordon - Home"
    const interval = setInterval(() => setInt(value===3?1:value+1), 8000);
    let last = value===1?3:value-1;
    console.log(`image${last}`);
    document.getElementById(`image${last}`).style.display = "none";
    document.getElementById(`image${value}`).style.display = "block";
    return () => {
      clearInterval(interval);
    };
  }, [value]);
  
  return (
      <div className="">         
          <div className= "cool-beans img-fluid">
            <img src={art1} alt="Pictures" className="responsive w-100 h-auto"  id="image1"/>
            <img src={art2} alt="Pictures" className="responsive w-100 h-auto"  id="image2"/>
            <img src={art3} alt="Pictures" className="responsive w-100 h-auto"  id="image3"/>
          </div>
      </div>
  );
}

export default Home;