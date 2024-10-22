import React from 'react';
import { Link } from 'react-router-dom'; // Use Link instead of <a>

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu">
        <h2>Pegasus</h2>
        <ul>
        <li><Link to="/home" className="sidebar-item">Home</Link></li>
          <li><Link to="/Calendar" className="sidebar-item">Calendar</Link></li>
          <li><Link to="/ProjectMember" className="sidebar-item">Project Members</Link></li>
          <li><Link to="/NewTask" className="sidebar-item">New Task</Link></li>
          <li><Link to="/AddTask" className="sidebar-item">Add Task</Link></li>
          <li><Link to="/Profile" className="sidebar-item">Profile</Link></li>
        </ul>
      </div>
      <div>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
