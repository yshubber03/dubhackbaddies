// ProfileForm.js
import React from 'react';
import './App.css'; // Import your CSS file
import logo from './/images/logo.png';


function ProfileForm() {
  let onPage = true;

  return (

        <div className="container">
        <div className="containerheader">
      <h2>UW Bus Buddies</h2>
  
      <img src={logo} alt="My Logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
      </div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <label>
          Gender:
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Year:
          <select name="year">
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>
        </label>

        <label>
          Major:
          <input type="text" name="major" />
        </label>

        <label>
          Picture:
          <input type="file" name="picture" />
        </label>

        <label>
          Home Transit Center:
          <select name="transitCenter">
            <option value="Redmond">Redmond</option>
            <option value="Bellevue">Bellevue</option>
            <option value="Totem Lake">Totem Lake</option>
          </select>
        </label>

        <button type="submit">Submit Your Profile</button>
      </form>
      </div>
    
    
    
  
      

  );


}

export default ProfileForm;
