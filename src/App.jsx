import React from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "./Home";
import UpcomingTasks from './upcomingtasks';
import TeamMember from './TeamMember';

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
    <>
    <div className="app-container">
     <Sidebar/> 
     <div className="main-content">
     <Header/>
     <Home/>
     <UpcomingTasks/>
     <TeamMember/>
     </div>
     </div>
    </>
  );
}

export default App
