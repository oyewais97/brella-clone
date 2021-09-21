import React from 'react'

import './sixthcontent.css'

const SixthComponent=()=> {
    return (
        <div>
           <div className="col-6  mx-auto">
        <h1 style={{ fontSize: "6rem", fontWeight: "770", color: "black" }}>
          The healthiest growth company in Finland
        </h1>
      </div>

      <div className="last-content-main">
        <div className="div-last-left col-sm-12 col-md-10 col-lg-8 ">
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "700",
              paddingTop: "5rem",
            }}
          >
            With our people-first culture we strive to:
          </p>

          <ul className="list_left mx-auto">
            <li className="list_one mx-auto col-5 ">
              1.
              <span /> Drive and coach culture that demands growth and ambition.
            </li>
            <li className="list_one mx-auto col-5">
              2.
              <span />
              Attract, recruit and nurture the best possible talent
            </li>
            <li className="list_one mx-auto col-5">
              3.
              <span />
              Support a safe and encouraging work place, where everyone can feel
              confident, trusted and respected.
            </li>
          </ul>

          <p style={{ fontSize: "1rem" }}>
            Our goal is to be the healthiest tech growth company in Finland!
          </p>
        </div>
        <div className="div-last-right col-sm-12 col-md-10 col-lg-12">
          <img
            src={process.env.PUBLIC_URL + "/images/img6.jpg"}
            className="rightSide1-img"
          />
        </div>
      </div>
      <div>
        </div>
        <br />
        <div className="vv">
            <div className="scnd-last-left">
            <img
            src={process.env.PUBLIC_URL + "/images/img8.jpg"}
            className="leftSide12-img col-sm-12 col-md-6 col-lg-6"
          />
        </div>
        <div className="scnd-last-right">
        <p className="rightpara-side col-sm-12 col-md-6 col-lg-9">
        We are convinced that top quality individuals with diverse minds make all the difference.
         We want diversity, equity and inclusion to be a natural part of our DNA.

        </p>
        <p className="rightpara-side2 col-sm-12 col-md-6 col-lg-10">
        Each individual on our team is truly important, 
        and we have high expectations for each and every one of our employees.
        </p>
        </div>
        </div>

        <div style={{paddingTop:"40rem", textAlign:"center",width:"100%"}} className="col-12">
            <div className="col-6" style={{float:"left"}}>
            <p className="rightpara-side33 col-sm-12 col-md-6 col-lg-8 mx-auto">
            But we know that being the best is not something that ‘just happens’ - it requires constant effort,
             learning and iteration. 
            So we want our company and workplace to be an environment where everyone can flourish and thrive.
            <br />
            <br />
            There’s a reason why they call them ‘growing pains’, 
            but we are determined to grow rapidly without compromising our culture,
             employees or quality of work.


        </p>

            </div>
            <div className="col-6" style={{float:"right"}}>
            <img
            src={process.env.PUBLIC_URL + "/images/img9.jpg"}
            className="leftSide12-img col-sm-12 col-md-6 col-lg-10"
          />

            </div>
        </div>

        </div>
    )
}

export default SixthComponent;
