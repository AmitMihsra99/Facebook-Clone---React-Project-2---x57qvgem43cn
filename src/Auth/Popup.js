import React, { useState, useEffect } from "react";


import "./Popup.css";

const Popup = ({ handleClose }) => {

    const [days, setDays] = useState([]);
    const [months, setMonths] = useState([]);
    const [years, setYears] = useState([]);

    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");  
  
    useEffect(() => {
      // Populate days (1 to 31)
      const daysArray = Array.from({ length: 31 }, (_, index) => index + 1);
      setDays(daysArray);
  
      // Populate months (January to December)
      const monthsArray = Array.from({ length: 12 }, (_, index) => {
        const monthNumber = index + 1;
        return monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`;
      });
      setMonths(monthsArray);
  
      // Populate years (current year to 100 years ago)
      const currentYear = new Date().getFullYear();
      const yearsArray = Array.from({ length: 100 }, (_, index) => currentYear - index);
      setYears(yearsArray);
    }, []);


    

  // ... (same popup content as before)
/* -------------------------- API Works code-------------------------------- */
  let headersList={
    "content-type":"application/json",
    projectid:"x57qvgem43cn"
  }

  let bodyContent =JSON.stringify({
    email: email,
    password: password,
    appType: 'facebook'
   }) 


   const apiDataFetch= async()=>{
    const data=await
     
    fetch("https://academics.newtonschool.co/api/v1/user/signup",{
       method:'POST',
       body:bodyContent,
       headers:headersList
    });

    const json=await data.json();
    console.log(json);
    setEmail("");
    setPassword("");
    setUserName("");

   }

   /* -------------------------- API Works code end -------------------------------- */

   function handleFromData(){
     apiDataFetch();
   }

  return (
    <div className="popup">
      {/* ... (popup content) */}
      <span className="close" onClick={handleClose}>
        &times;
      </span>
       <div className="head">
      <h2>Sign Up</h2>
        <p>It's quick and easy.</p>
        </div>
        
        
        <div className="input-group">
          <input className="popup-sel"  type="text" placeholder="First Name" value={username} onChange={(e)=>setUserName(e.target.value)} />
          <input className="popup-sel" type="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input className="popup-sel" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        
        <div className="gender-group">
          <h5>Gender</h5>
           <label>
            <input type="radio" name="gender" value="male" />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" />
            Female
          </label>
          <label>
            <input type="radio" name="gender" value="custom" />
            Custom
          </label>
        </div>
        
        <div className="date-group">
        <label>Date of Birth:</label>
        <select>
          <option value="">Day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select>
          <option value="">Month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select>
          <option value="">Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        </div>
      
        <button className="sign-up-button" onClick={()=>{
          handleFromData
        }} >Sign Up</button>
    </div>
  );
};

export default Popup;





