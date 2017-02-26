import React from 'react';
import './main.css';


   
   

export default class MainContent extends React.Component{
   render(){

    return(
      <div>

        <div className="main-content"> 
        
            <form>
              <input className="input-search" type="text" name="search" placeholder="Search.."  />
            </form>
             
        </div>

    </div>
    );
   }

} 

