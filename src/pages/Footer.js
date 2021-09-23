import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import { BsArrowRight } from "react-icons/bs";
import TextField from "@mui/material/TextField";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="before-footer row">
      <div className="before-ftr-left col-6 ">
        <h3 className="subscribe-heading">Subscribe to our monthly newsletter</h3>
        <p>By clicking subscribe you’ll receive occasional emails from Brella.</p>
      </div>
      <div className="before-str-right col-6 ">
      <TextField  
      variant="outlined"
      type="email"
      size="medium"
      placeholder="user123@gmail.com"
      style={{
        height:"2vh"
      }}

      />
      <button  size="large" className="btn-blog-firstss btn-outlined-secondary ">LOAD MORE </button><span><BsArrowRight size={40} /></span>
      </div>

    </div>
      <footer className="font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row footer-row col-8 mx-auto">
            <div className="col-md-4 mt-md-0 mt-3">
              <h5 className="text-uppercase">BRELLA</h5>
              <div style={{padding:"10px"}}>
              <FaTwitter style={{padding:"10px"}} size={60} /><FaLinkedin style={{padding:"10px"}} size={60}/><FaFacebook style={{padding:"10px"}} size={60}/>
              </div>
            </div>

            
             
             <div className="col-md-2">
               <ul className="footer-ul">
                 <li className="footerlist">
                   Virtual Event
                 </li >
                 <li className="footerlist">
                   Virtual Event
                 </li>
                 <li className="footerlist">
                   Virtual Event
                 </li>
               </ul>
             </div>
             <div className="col-md-2">
               <ul className="footer-ul">
                 <li className="footerlist">
                   Virtual Event
                 </li >
                 <li className="footerlist">
                   Virtual Event
                 </li>
                 <li className="footerlist">
                   Virtual Event
                 </li>
               </ul>
             
             
             </div>
            {/* <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Company</h5>

              <ul className="list-unstyled">
                <li>
                  
                    <a href="#!">Contact Us </a>
                  
                </li>
                <li>
                  
                    <a href="#!">Privacy and Policy</a>
                  
                </li>
                <li>
                  
                    
                    <a href="#!">Terms Of Use</a>
                  
                </li>

                <li>
                  <a href="#!">GDPR and Compilance</a>
                </li>
                <li>
                  
                    <a href="#!">Partner</a>
                  \
                </li>
              </ul>
            </div> */}
            
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
        2021 Brella Oy, Inc. All rights reserved

        </div>
      </footer>
    </>
  );
};

export default Footer;