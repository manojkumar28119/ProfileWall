import React, { useState, useEffect } from 'react';
import ProfileTable from './components/ProfilesTable';
import "./App.css"



const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    name: '',
    age: '',
    location: '',
    profession: ''
  });

  const [apiStatus,setApiStatus]  = useState(false)

  const getProfiles = async () => {
    setApiStatus(false)
    const response = await  fetch('https://user-profiles-backend.onrender.com/profiles')
    if(response.ok)
    {
      setProfiles(await response.json())
      setApiStatus(true)
    }
  }

  // Fetch profiles
  useEffect(() => {
    getProfiles();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(newProfile)

    const response =await fetch('https://user-profiles-backend.onrender.com/createprofile', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  // Specify that the request body is JSON
      },
      body: JSON.stringify(newProfile)  // Convert the JavaScript object to JSON
    });

    if(response.ok)
    {
      getProfiles();
      setNewProfile({
        name: '',
        age: '',
        location: '',
        profession: ''
      })
    }
  };

  return (
    <div className="App">
      <div className='main-card'>
        <h1 className='heading'>Create User Profile</h1>
        <form onSubmit={handleSubmit} className='form' >
          <input className="form-control" type="text" name="name" value={newProfile.name} placeholder="Name" onChange={handleChange} required />
          <input className="form-control" type="number" name="age" value={newProfile.age} placeholder="Age" onChange={handleChange} required />
          <input className="form-control" type="text" name="location" value={newProfile.location} placeholder="Location" onChange={handleChange} required />
          <input className="form-control" type="text" name="profession" value={newProfile.profession} placeholder="Profession" onChange={handleChange} required />
          <button type="submit" className='btn btn-primary'>Create Profile</button>
        </form>
        
        <h2 className='heading'>User Profiles</h2>

        {apiStatus ? <ProfileTable profiles={profiles} />
        : (<div className='spinner-card'>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
          </div>)}

      </div>
    </div>
  )
};

export default App;


