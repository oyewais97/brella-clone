import React from 'react'
import Nav from '../pages/navbar'
import Maincontent from './maincontent';
import Secondmaincontent from './Secondmaincontent';
import './home.css';
import Thirdcontent from './thirdcontent';
import Footer from './Footer';
import Fourthcontent from './fourthcontent';
import Openposition from './openposition';
import SixthComponent from './sixthComponent';
import Seventhcontent from './seventhcontent';
const Home =()=> {
    return (
        <div>
       <Nav  />
       <div>
           <Maincontent />
       </div>
       
       

       

       <br />
       
            
            <br />
          
            
            <br />
            <br />
            
            <div className="footermain">
                <Footer />
            </div>
        </div>
    )
}
export default Home;
