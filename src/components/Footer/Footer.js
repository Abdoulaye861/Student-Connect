import React from 'react';

class Footer extends React.Component {
   
   render(){

  const containerStyle = {
	  background: "#191918",
	  height: "80px",
	  color:"white",
	  fontSize:"14",
	  paddingTop:"29px",
	  paddingLeft:"690px"
}

const footerStyle = {
    marginTop:"-20px",
      //marginButtom:"-20px"


}

    return(

    	<div>
            
            <div className="myfooter" style={footerStyle}>
            <h1 style={containerStyle} >He is my footer </h1>
            </div>
       </div>
    );
   }

}

export default Footer;