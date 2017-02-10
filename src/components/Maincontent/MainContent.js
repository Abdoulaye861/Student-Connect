import React from 'react';

const mainStyle = {

     main:{

     width:"80%",
     position:"relative",
     float:"right",
     
     height: "508px",
     paddingLeft:"120",
     paddingTop: "100"

   },
 inputs:{
 width: "820px",
    boxSizing: "border-box",
    border: "1px solid #444",
    borderRadius: "3px",
    fontSize:" 16px",
    backgroundColor:" white",
    backgroundImage: "url(img/icon.png)",
    backgroundPosition:" 8px 18px", 
    padding:  "14px 7px 9px 27px",
    fontFamily: "Helvetica Neue",
    color: "#bbb",
    border: "1px solid #d7254e",
    backgroundRepeat: "no-repeat"
 },

   };

export default class MainContent extends React.Component{
   render(){

    return(
      <div>

    <div style={mainStyle.main}> 
    
    <form>
      <input type="text" name="search" placeholder="Search.." style={mainStyle.inputs} />
     </form>
   
  
    </div>

    </div>
    );
   }

} 

