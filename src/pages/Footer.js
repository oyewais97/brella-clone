import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row footer-row col-8 mx-auto">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Shift2net Solution</h5>
              <p>Address</p>
              <p>Contact No</p>
              <p>Email</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3"></hr>

            <div className="col-md-3 mb-md-0 mb-3">
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
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 ">
              <div>
                <a
                  href="https://facebook.com/logicworksbt"
                  className="icon-class-footer"
                >
                  <h1 className="text-uppercase">
                    <FaFacebook />
                  </h1>
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/logicworksbt/"
                  className="icon-class-footer"
                >
                  <h1 className="text-uppercase">
                    {" "}
                    <FaTwitter />
                  </h1>
                </a>
              </div>
              <div>
                <a
                  href="http://linkedin.com/logicworksbt/"
                  className="icon-class-footer"
                >
                  <h1 className="text-uppercase">
                    {" "}
                    <FaLinkedin />
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
           Shift2Net
        </div>
      </footer>
    </>
  );
};

export default Footer;