import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('Bikash Dahal');
  const [email, setEmail] = useState('bikash@example.com');
  const [role, setRole] = useState('Developer');
  const [profileImage, setProfileImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-image-section">
        <h4>Profile Image</h4>
        <input type="file" onChange={handleImageChange} />
        {profileImage && <p>File selected: {profileImage.name}</p>}
      </div>
      <form onSubmit={handleSubmit} className="update-profile-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>
    </div>
  );
}
export default Profile;