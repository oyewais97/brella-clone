import React from 'react'

const Contact =()=> {
    return (
        <div>
               <div className="row third-r">
              <div class="card2 col-sm-12 col-lg-6">
                    
                   
                     
                    </div>
                    <div class="card3 col-sm-12 col-lg-6">
                    <div class="card-body form-card">
                        <div className="form-content">
                        <form className="form">
                          
                         
                        <div className="inline-input">
                         <label for="rg-form" className="Name-label">First Name</label>
    <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
    <label for="exampleInputEmail1"className="Name-label2" >Last Name </label>
    <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
                         </div>
                        <div className="in-row">
                         <label for="exampleSelect1">Seniority</label>
                         <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                         <option selected>Choose...</option>
                         <option value="1">One</option>
                         <option value="2">Two</option>
                         <option value="3">Three</option>
                         </select>
                        
                         <div></div>
                         <label for="exampleSelect1">Department</label>
                         <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
    <label for="exampleInputEmail1" className="mb-2 mr-sm-2 mb-sm-0">Work Email</label>
    <input type="email" className="form-control input " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <label for="example-tel-input" className="mb-2 mr-sm-2 mb-sm-0">Telephone</label>
  <div className="col-10">
  <input type="tel" className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g 4-55-555-55"/>
  </div>
  <label for="example-text-input" className="mb-2 mr-sm-2 mb-sm-0">Company Name</label>
  <div className="col-10">
    <input className="form-control input" type="text" value="Artisanal kale" id="example-text-input"></input>
  </div>
  <label for="exampleSelect1">Have you used shift2net before?</label>
                         <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
    <option selected>Choose...</option>
    <option value="1">Yes</option>
    <option value="2">No</option>
    </select>
    <br/>
    <label for="exampleTextarea">Comment</label>
    <textarea className="form-control" id="exampleTextarea" rows="5"></textarea>
    <label className="form-check-label">
      <input type="checkbox" className="form-check-input"/>
      Yes, Subscribe me to the Shift2Net blog
    </label>
    </div>
    <br/>
    <br></br>
    <div>
    
  <button type="submit" className="btn btn-success">Submit</button>
    </div> 
                        </form>
                        </div>
                        
                  </div>
  
              </div>
              </div>
        </div>
    )
}

export default Contact;
