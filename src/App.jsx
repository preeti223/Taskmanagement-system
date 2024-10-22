// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "./Home";
import NewTask from './NewTask';
import ProjectMember from './ProjectMember'; 
import Calendar from './Calendar';
import AddTask from './AddTask';
import Profile from './Profile';
function App() {
  const teamMembers = [
    {
      role: 'Team Manager',
      name: 'John Doe',
      experience: '10',
      projects: 'Project A, Project B',
      email: 'john.doe@example.com',
    },
    {
      role: 'Developer',
      name: 'Alice Smith',
      experience: '5',
      projects: 'Project A',
      email: 'alice.smith@example.com',
    },
    {
      role: 'Developer',
      name: 'Bob Johnson',
      experience: '4',
      projects: 'Project B',
      email: 'bob.johnson@example.com',
    },
  ];

  return (
    <Router>
      <div className="app-container">
        <Sidebar /> 
        <div className="main-content">
          <Header /> 
          
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/NewTask" element={<NewTask />} />
            <Route path="/ProjectMember" element={<ProjectMember teamMembers={teamMembers} />} />
            <Route path="/Calendar" element={<Calendar />} /> 
            <Route path="/AddTask" element={<AddTask/>} />
            <Route path="/Profile" element={<Profile/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


