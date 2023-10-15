// ProfileForm.js
import React from 'react';
import './App.css'; // Import your CSS file

function matching() {
  return (

    <div className="container">
     <h1>We found a match for you</h1>
  <div class="match-container">
    <div class="match-box">
      {/* <img src="image1.jpg" alt="Match 1"> */}
      <h2>Name 1</h2>
      <p>Information Line 1</p>
      <p>Information Line 2</p>
      <button>Add Friend</button>
    </div>
    <div class="match-box">
      {/* <img src="image2.jpg" alt="Match 2"> */}
      <h2>Name 2</h2>
      <p>Information Line 1</p>
      <p>Information Line 2</p>
      <button>Add Friend</button>
    </div>
  </div>
    </div>
  );
}

export default matching;
