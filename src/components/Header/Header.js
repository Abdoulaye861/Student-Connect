import React from 'react';
import './header.css';
//import profile from '../img/profile.png';
//import logout from '../img/logout.png';



class Header extends React.Component {
  render() {

   return (
    <div className="Header">
      <h1> Dashboard </h1>
      
      <div className="img1">
       <a href="#"><img src={'../img/profile.png'} /> </a>  
      </div>
       
       <div className="img2">
        <a href="#"> <img src={'../img/logout.png'} /> </a> 
      </div>

    
      </div>

   	);
  }
}

export default Header;
