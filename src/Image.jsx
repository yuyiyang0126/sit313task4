import React from 'react';
import logo from './img/Deakin1.jpg'; 

console.log(logo);

function Display() {

  return <img src={logo} alt="Display" width = {700} height={400} style={{ alignSelf: 'center' }}  />;
}

export default Display;