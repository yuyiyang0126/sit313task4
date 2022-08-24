import React from 'react';
import logo from './img/footer.png'; 

console.log(logo);

function Footer() {

  return <img src={logo} alt="Display"  style={{ width:'100%', height:'300px',padding:'0px'}}  />;
}

export default Footer;