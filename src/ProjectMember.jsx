
import React from 'react';


const ProjectMember = ({ role, name, experience, projects, email }) => {
  return (
    <div className="App">
         <h1>Project Name: {}</h1>
         <h2>Team Members</h2>
         
         <div className='member-card'>

    <div className="team-member-card">
      <div className="team-member-image">
        <img src="https://via.placeholder.com/150" alt="Profile" />
      </div>
      <h3>Team Member{role}</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p><strong>Working Projects:</strong> {projects}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>

    <div className="team-member-card">
      <div className="team-member-image">
        <img src="https://via.placeholder.com/150" alt="Profile" />
      </div>
      <h3>Team Member{role}</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p><strong>Working Projects:</strong> {projects}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>

    </div>

    </div>

    
  );
};

export default ProjectMember;
