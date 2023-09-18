import React from 'react';
import './container.css';
import logo1 from "./imgs/logo1.png";
import logo2 from "./imgs/logo2.png";
import logo3 from "./imgs/logo3.png";
import logo4 from "./imgs/logo4.png";
import logo5 from "./imgs/logoc1.png";

const CurvedIconLayout = () => {
  return (
    <><div className="curved-icon-container">

      <div className="icon"><img src={logo1} alt="" height={55} width={55} /></div>
      <div className="icon"><img src={logo2} alt="" height={55} width={55} /></div>
      <div className="icon"><img src={logo3} alt="" height={55} width={55} /></div>
      <div className="icon"><img src={logo4} alt="" height={55} width={55} /></div>
      <div className="icon"><img src={logo5} alt="" height={55} width={55} /></div>
    </div>

    <div className='title'>
  
        <h1>Transform Text to Design</h1><h1>in Minutes, Powered by AI</h1>
        <span></span>
        <h3>Genrate beautiful and editable web designs from a simple text<h3>description.it empowers you to design faster than ever.</h3></h3>
        <span></span>
        <button className="btn btn-outline-success" type="submit">Generate Your Website</button>
      </div></>

  );
};

export default CurvedIconLayout;
