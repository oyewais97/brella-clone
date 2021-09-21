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
       
       

       <div className="content-second">
           <hr />
           <Secondmaincontent />
       </div>

       <br />
       <div>
           <Thirdcontent />
       </div>
            
            <div>
                <Fourthcontent />
            </div>
            <br />
            <div>
                <Openposition />
            </div>
            <div>
                <SixthComponent />
            </div>
            <br />
            <br />
            <div className="perksbene">
                <Seventhcontent />
            </div>
            <div className="footermain">
                <Footer />
            </div>
        </div>
    )
}
export default Home;
