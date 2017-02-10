import React from 'react';
import'./side.css';


export default class SideBar extends React.Component {
   render() {
   return(
         <div>
<nav className="navigate">
     	    <ul>
     	    	<li> <a href="#">ADD STUDENT</a> </li>
     	   	    <li><a href="#">VIEW STUDENTS</a></li>
     	   	    <li><a href="#">ADD A COACH </a></li>
     	   	    <li><a href="#">VIEW A COACH </a></li>
     	   	    <li><a href="#">TEAMS</a></li>
            </ul>
       </nav> 
     </div>
   	);

  }
}