import React, { useRef, useEffect } from 'react'
import Fourthcontent from './fourthcontent';
import './maincontent.css'
import { Link } from 'react-scroll';
import Openposition from './openposition';
import Secondmaincontent from './Secondmaincontent';
import Seventhcontent from './seventhcontent';
import SixthComponent from './sixthComponent';
import Thirdcontent from './thirdcontent';



const Maincontent =()=> {

    

    
    
 
    
    return (
        <div>
           <div className="row">
               <div className="left-side col-sm-12 col-md-6 col-lg-6">
                   <h1 className="heaidngone col-sm-6 col-md-8 col-lg-12 mx-auto">
                   Why become a Brellaneer?

                   </h1>
                   <p className="left-side-paragraph mx-auto">
                   It’s all about the bigger purpose.
                   
We all have different roles and responsibilities, but sometimes it is good to <br/>stop for a moment to remind ourselves of the bigger purpose of all this.


At Brella, we are on a mission to help people find life-altering connections.
</p>
    
    <div className="button-container col-4 mx-auto">
                  
                 <Link to="position" smooth={true} duration={100}>
                  <button className="left-buttton">
                      Open Position
                  </button>
                  </Link>
    </div>
               </div>
               <div className="right-side col-sm-12 col-md-6 col-lg-6">
                   
                   <img
                src={process.env.PUBLIC_URL + "/images/img2.jpg"}
                className="righth-side-img"
              />
                   

               </div>
               
           </div>

            <Secondmaincontent />
            <Thirdcontent />
            <Fourthcontent />
            <Openposition />
            <SixthComponent />
            <Seventhcontent />
        </div>
    )
}

export default Maincontent;
