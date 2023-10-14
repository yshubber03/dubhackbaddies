import React, {useState} from 'react';
import './App.css';

function Profile() {
    const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [grade, setGrade] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  return (
    <div>
      <h2>Create a Profile</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={handleGenderChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br/>
        <label>
          Year:
          <select value={grade} onChange={handleGradeChange}>
            <option value="">Select Year</option>
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value = "senior">Senior</option>
          </select>
        </label>
      </form>
      <p>
        Your name is: {name} <br />
        Your gender is: {gender}
      </p>
    </div>
  );
}


export default Profile;