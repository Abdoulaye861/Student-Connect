import React from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideBar from './components/Sidebar/SideBar';
import MainContent from './components/Maincontent/MainContent';


 class Layout extends React.Component{

  render() {
    	
    const wrapperStyle = {
    width:"100%",
    margin:"0",
    padding:"0",
    marginBottom:"0px"

    }

   return (
 
   <div>
   <Header/>

   <div className="container" style={wrapperStyle}>
      <MainContent />
      <SideBar />
      <Footer/>
  </div>
    

    
  </div>

   );
  }

} 

export default Layout;