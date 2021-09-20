import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";

import { Dropdown, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFan,
  faPlus,
  faBookMedical,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";
const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="Main">
        <div className="navbar ">
          <div className="navbar-container">
            <Link to={"/"} className="navbar-logo">
             Brella
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              Events
              </li>
              <li className="nav-item">
              Products
              </li>
              <li className="nav-item">
              Company
              </li>
              <li className="nav-item">
              Pricing
              </li>
            
            <li className="nav-btn">
              <Link to={"/reqdemo"} className="Req-demo">
                <button className="demo-btn">Contact</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;