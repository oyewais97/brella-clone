import React from 'react'
import './openposition.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const departments = [
    {
      value: 'Customer Support',
      label: 'Customer Support',
    },
    {
      value: 'Customer Success',
      label: 'Customer Success',
    },
    {
      value: 'Design',
      label: 'Design',
    },
    {
      value: 'Marketing',
      label: 'Marketing',
    },
  ];
  const locations = [
    {
      value: 'helsinki',
      label: 'helsinki',
    },
    {
      value: 'All USA',
      label: 'All USA',
    },
    {
      value: 'jyvaskyla',
      label: 'jyvaskyla',
    },
    
  ];
const Openposition=()=> {
    const [department, setDepartment] = React.useState('Alldepartments');
   const[location, setLocation] = React.useState('Alllocations');

    const handleChange = (event) => {
      setDepartment(event.target.value);

    };
    const hanleChangelocation = e =>{
        setLocation(e.target.value)
    }
    return (
        <div>
            <br/>
            <div className="openContainer">

            <h1 className="position-haeding">OPEN POSITIONS</h1>

           
            </div>
            <div className="text-div-container">
            <TextField
          id="standard-select-currency"
          select
          
          value={department}
          onChange={handleChange}
          
          variant="standard"
          style={{
              width:"30%",
              justifyItems:"center",
              paddingLeft:"14rem"
              
          }}
        >
          {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency"
          select
          
          value={location}
          onChange={hanleChangelocation}
          
          variant="standard"
          style={{
              width:"30%",
              justifyItems:"center",
              paddingLeft:"10rem"
          }}
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            </div>
            <hr className="hr-line"/>
            <div className="heading-one-open">
                <h1>Customer Support Representative</h1>
                <p style={{color:"#888", fontSize:"2rem"}}>Customer Support - the USA</p>
            </div>
            <hr className="hr-line"/>
            <div className="heading-one-open">
                <h1>Sales Development Representative
</h1>
                <p style={{color:"#888", fontSize:"2rem"}}>Sales - Sales Development Representative - the USA</p>
            </div>
            <hr className="hr-line"/>
            <div className="heading-one-open">
                <h1>Account Executive

</h1>
                <p style={{color:"#888", fontSize:"2rem"}}>Sales - Account Executive - the USA</p>
            </div>
            <hr className="hr-line"/>
            <div className="heading-one-open">
                <h1>Product Designer

</h1>
                <p style={{color:"#888", fontSize:"2rem"}}>Design - Product Designer - Helsinki</p>
            </div>
            <hr className="hr-line"/>
            <div className="heading-one-open">
                <h1>Visual Designer

</h1>
                <p style={{color:"#888", fontSize:"2rem"}}>Design - Visual Designer - Helsinki</p>
            </div>
            <hr className="hr-line"/>
            <div className="heading-one-open">
                <h1>Front-end Developer (React)
</h1>
                <p style={{color:"#888", fontSize:"2rem"}}>
Tech - Frontend Development - Helsinki, Jyväskylä</p>
            </div>
            <hr className="hr-line"/>
            <div className="para-one-open">
                <p style={{fontSize:"1.3rem"}}>We’re just getting started. Join us as we continue to scale internationally,<br/>
                expand our partnerships and build the world’s leading event platform for<br />
                events of all shapes and sizes.
                </p>
                <p style={{fontSize:"1.3rem"}}>Our Brella team can’t wait to meet you! If there is nothing for you currently open,<br/> connect with us to be the first to know about our new job openings.</p>
            </div>
            <hr className="hr-line" style={{marginTop:"10rem"}}/>
            <div className="para-one-open">
            <p style={{fontSize:"1.3rem"}}>
                Here I have really been able to make an impact and also been given the freedom to<br/>
                make it. It’s an amazing feeling when you can grow with the company in a truly<br />
                global environment, not one day has passed that I wouldn’t have learned something
                </p>
                <img
                src={process.env.PUBLIC_URL + "/images/img1.jpg"}
                className="leftSide-img"
                
              />
                </div>
        </div>
    )
}

export default Openposition;
