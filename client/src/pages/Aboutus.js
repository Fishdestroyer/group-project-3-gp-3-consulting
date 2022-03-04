import React from 'react';
import coverImage from "../Cows-1.jpg";

function Aboutus() {
    return (
      <section className="my-5">
        <h1 id="about">All About Us!</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%"}} alt="cover" />
      </section>
  
  
    );
  }
 
export default Aboutus;