import React from 'react'
import './fourthcontent.css';

const Fourthcontent=()=> {
    return (
        <div>
            {/* <div className="fourt-container">
                <div className="leftSide-img-container">
                <img
                src={process.env.PUBLIC_URL + "/images/img1.jpg"}
                className="leftSide-img"
              />
                   
               
                </div>

                <div className="rigthSide-para">
                    <h1>HEllo</h1>

                </div>


                


            </div> */}
            <div className="row-fourth">
               <div className="leftSide col-sm-4 col-md-6 col-lg-6">
               <img
                src={process.env.PUBLIC_URL + "/images/img1.jpg"}
                className="leftSide-img"
                
              />
                   
    
    
               </div>
               <div className="rightSide">  
                   <p className="rightSide-para">
                   Since my first day at the company, I've been surrounded by support, 
                   endless possibilities and intelligent minds in the Brella family. 
                   Working at Brella 
                   has not only taught me the ABC of startups but given me important career skills for the future!
                   </p>
                   <p className="para-rightSide">Jenni Mämmi
                   
                   <br />
                  <span className="support-lead"> Technical Support Lead</span>
                   </p>
               </div>
               </div>

               </div>
                   

           
            
    )
}

export default Fourthcontent;
