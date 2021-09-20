import React from 'react'
import './maincontent.css'
const Maincontent =()=> {
    return (
        <div>
           <div className="row">
               <div className="left-side col-sm-4 col-md-6 col-lg-6">
                   <h1 className="heaidngone">
                   Why become a Brellaneer?

                   </h1>
                   <p className="left-side-paragraph col-4">
                   It’s all about the bigger purpose.
                   <br/>
                   </p>
                   <p className="left-side-paragraph col-4">
We all have different roles and responsibilities, but sometimes it is good to <br/>stop for a moment to remind ourselves of the bigger purpose of all this.
<br/>
</p >
<p className="left-side-paragraph col-4">
At Brella, we are on a mission to help people find life-altering connections.
</p>
    
    <div className="button-container">
                  
                  <button className="left-buttton">
                      Open Position
                  </button>
    </div>
               </div>
               <div className="right-side col-sm-4 col-md-6 col-lg-6">
                   
                   <img
                src={process.env.PUBLIC_URL + "/images/img2.jpg"}
                className="righth-side-img"
              />
                   

               </div>
               
           </div>
            
        </div>
    )
}

export default Maincontent;
